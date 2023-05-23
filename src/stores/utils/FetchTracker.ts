import { makeObservable, observable, runInAction } from 'mobx';
import { Poll } from './Poll';

interface FetchTrackerProps<T, K> {
    fetchUrl: string;
    refreshInterval?: number;
    options?: RequestInit;
    parser?: (data: K) => T;
    autoFetch?: boolean;
}

export class FetchTracker<T, K> { // T - data type, K - fetch response type

    public data: T = Object.create(null);
    public isLoading = true;
    public error: any;
    public isFirstLoad = true;

    private poll: Poll<void> | undefined;
    private fetchUrl: FetchTrackerProps<T, K>['fetchUrl'];
    private options: FetchTrackerProps<T, K>['options'];
    private readonly refreshInterval: FetchTrackerProps<T, K>['refreshInterval'];
    private readonly parser: FetchTrackerProps<T, K>['parser'];

    constructor({
        fetchUrl,
        options,
        parser,
        autoFetch = false,
        refreshInterval
    }: FetchTrackerProps<T, K>) {
        makeObservable(this, {
            data: observable,
            isLoading: observable,
            error: observable
        });
        this.fetchUrl = fetchUrl;
        this.options = options;
        this.parser = parser;
        this.refreshInterval = refreshInterval;

        if (autoFetch) {
            this.isLoading = true;
            this.load();
        }
    }

    public load(): Promise<void> {
        const _load = () => fetch(this.fetchUrl, this.options)
            .then(res => res.json())
            .then(data => {
                runInAction(() => {
                    if (typeof this.parser === 'function') {
                        this.data = this.parser(data);
                    } else {
                        this.data = data as T;
                    }
                    this.error = null;
                    this.isLoading = false;
                    this.isFirstLoad = false;
                });
            })
            .catch(e => {
                runInAction(() => {
                    this.error = e;
                    this.isFirstLoad = false;
                });
            });

        if (typeof this.refreshInterval === 'number') {
            this.poll = new Poll<void>(
                {
                    get: () => _load(),
                    set: () => {
                        null;
                    }
                },
                this.refreshInterval,
                false
            );

            return this.poll.play();
        } else {
            return _load();
        }
    }

    off(): void {
        if (this.poll) {
            this.poll.destroy();
        }
    }
}
