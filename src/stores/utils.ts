import { makeObservable, observable, runInAction } from 'mobx';

interface FetchTrackerProps<T> {
    fetchUrl: string;
    options?: RequestInit;
    parser?: (data: unknown) => T;
}

export class FetchTracker<T> {

    public data: T;
    public isLoading: boolean;

    private fetchUrl: string;
    private options: RequestInit;
    private readonly parser: (data: unknown) => T;

    constructor({
        fetchUrl,
        options,
        parser
    }: FetchTrackerProps<T>) {
        makeObservable(this, {
            data: observable,
            isLoading: observable
        });
        this.fetchUrl = fetchUrl;
        this.options = options;
        this.parser = parser;
    }

    public load() {
        this.isLoading = true;
        fetch(this.fetchUrl)
            .then(res => res.json())
            .then(data => {
                runInAction(() => {
                    this.data = this.parser(data);
                    this.isLoading = false;
                });
            });
    }
}
