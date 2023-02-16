import hash from "./hash";
import { extractClientIP, extractUserAgent } from "./header";
import { pageNameQueryParameter, pagePathQueryParameter } from "./param";
import { Client, defaultBrowserUserAgent, defaultClientIP, Metadata, Page } from "./schema";

export function requestToPage(req: Request): Page {
    const queryParams = new URLSearchParams(req.url);

    return <Page>{
        path: queryParams.get(pagePathQueryParameter),
        name: queryParams.get(pageNameQueryParameter),
    };
}

export function requestToClient(req: Request): Client {
    const ip = extractClientIP(req.headers) ?? defaultClientIP;
    const anonymizedId = hash(ip);


    console.log(ip)
    console.log(anonymizedId)

    return <Client>{
        anonymizedId: anonymizedId
    };
}

export function requestToMetadata(req: Request): Metadata {
    const userAgent = extractUserAgent(req.headers) ?? defaultBrowserUserAgent;

    return <Metadata>{
        browser: userAgent,
        isMobile: /iPhone|iPad|iPod|Android/i.test(userAgent)
    };
}