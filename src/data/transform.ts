import hash from "./hash";
import { extractClientIP, extractUserAgent } from "../http";
import { pageNameQueryParameter, pagePathQueryParameter } from "../http";
import { Client, defaultBrowserUserAgent, defaultClientIP, Metadata, Page } from "./schema";
import { Hash } from "../config";

export function requestToPage(req: Request): Page {
    const queryParams = new URL(req.url).searchParams;

    return <Page>{
        path: queryParams.get(pagePathQueryParameter),
        name: queryParams.get(pageNameQueryParameter),
    };
}

export async function requestToClient(req: Request, hashc: Hash): Promise<Client> {
    const ip = extractClientIP(req.headers) ?? defaultClientIP;
    const anonymizedId = await hash(ip, hashc.factor);

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