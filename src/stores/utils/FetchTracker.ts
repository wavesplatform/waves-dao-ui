import { makeObservable, observable, runInAction } from 'mobx';

interface FetchTrackerProps<T> {
    fetchUrl: string;
    options?: RequestInit;
    parser?: (data: unknown) => T;
    autoFetch?: boolean;
}

export class FetchTracker<T> {

    public data: T;
    public isLoading: boolean;
    public error: any;

    private fetchUrl: string;
    private options: RequestInit;
    private readonly parser: (data: unknown) => T;

    constructor({
        fetchUrl,
        options,
        parser,
        autoFetch = false
    }: FetchTrackerProps<T>) {
        makeObservable(this, {
            data: observable,
            isLoading: observable,
            error: observable
        });
        this.fetchUrl = fetchUrl;
        this.options = options;
        this.parser = parser;

        if (autoFetch) {
            this.load();
        }
    }

    public load(): Promise<void> {
        this.isLoading = true;
        return fetch(this.fetchUrl)
            .then(res => res.json())
            .then(data => {
                runInAction(() => {
                    this.data = this.parser(data);
                    this.isLoading = false;
                });
            })
            .catch(e => {
                runInAction(() => {
                    this.error = e;
                });
            });
    }
}
