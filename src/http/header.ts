const apiKeyHeader = 'api-key';
const contentTypeHeader = 'content-type';
const userAgentHeader = 'user-agent'
const cloudflareClientIPHeader = 'cf-connecting-ip';

export function insertHeaders(apiKey: string): Headers {
    const headers = new Headers();

    headers.set(apiKeyHeader, apiKey);
    headers.set(contentTypeHeader, 'application/json');

    return headers;
}

export function extractUserAgent(headers: Headers): string | null {
    return headers.get(userAgentHeader);
}

export function extractClientIP(headers: Headers): string | null {
    return headers.get(cloudflareClientIPHeader);
}