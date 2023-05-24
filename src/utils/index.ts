export function toArray<T>(some: T | Array<T>): Array<T> {
    if (Array.isArray(some)) {
        return some;
    } else {
        return [some];
    }
}