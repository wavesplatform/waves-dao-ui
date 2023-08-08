interface IEvaluateParams {
    url: string;
    contractAddress: string;
    expr: string;
}
export function evaluate({
    url,
    contractAddress,
    expr,
}: IEvaluateParams): Promise<any> {
    return fetch(
        `${url}/${contractAddress}`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({ expr })
        }
    ).then((res) => res.json());
}
