export type TStringValue = {
    type: 'String';
    value: string;
};

export type TIntValue = {
    type: 'Int';
    value: number;
};

export type TArrayValue = Array<TIntValue | TStringValue>;

export type TObjectValue = Record<string, TIntValue | TStringValue>

export interface ITupleValue<TValue = string | TArrayValue | TObjectValue> {
    '_1': {
        type: string;
        value: Array<unknown>;
    };
    '_2': {
        type: 'String' | 'Array' | 'Tuple';
        value: TValue;
    };
}

export interface ITuple<TValue = string> {
    address: string;
    complexity: number;
    expr: string;
    result: {
        type: 'Tuple';
        value: ITupleValue<TValue>;
    };
    error?: number;
    message?: string;
}
