import { insertHitDocumentBody, insertPageDocumentBody } from "./body";
import { Atlas, IpInfo } from "../config";
import { insertOneEndpoint } from "./endpoints";
import { insertHeaders } from "./header";
import { Hit, Page } from "../data";
import { composeGeolocationApiUrl, composeMongoApiUrl } from "./url";

export function insertPageDocumentRequest(
    atlas: Atlas,
    page: Page,
): Request {
    const method = 'POST';
    const url = composeMongoApiUrl(atlas.baseApiHost, atlas.appId, insertOneEndpoint);
    const headers = insertHeaders(atlas.apiKey);

    const data = insertPageDocumentBody(page, atlas);

    const init = <RequestInit>{
        headers: headers,
        method: method,
        body: data,
    }

    return new Request(url, init);
}

export function insertHitDocumentRequest(
    atlas: Atlas,
    hit: Hit,
): Request {
    const method = 'POST';
    const url = composeMongoApiUrl(atlas.baseApiHost, atlas.appId, insertOneEndpoint);
    const headers = insertHeaders(atlas.apiKey);

    const data = insertHitDocumentBody(hit, atlas);

    const init = <RequestInit>{
        headers: headers,
        method: method,
        body: data,
    }

    return new Request(url, init);
}

export function fetchGeolocationInformationRequest(
    ipInfo: IpInfo,
    ip: string,
): Request {
    const method = 'GET';
    const url = composeGeolocationApiUrl(ipInfo.apiToken, ip);

    const init = <RequestInit>{
        method: method,
    }

    return new Request(url, init);
}