const apiKeyHeader = 'api-key';
const contentTypeHeader = 'Content-Type';

export function insertHeaders(apiKey: string): Headers {
    const headers = new Headers();

    headers.set(apiKeyHeader, apiKey);
    headers.set(contentTypeHeader, 'application/json');

    return headers;
}