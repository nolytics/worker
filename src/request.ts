import { insertDocumentBody } from "./body";
import { Atlas } from "./config";
import { insertOneEndpoint } from "./endpoints";
import { insertHeaders } from "./header";
import { Page } from "./schema";
import { composeMongoApiUrl } from "./url";

export function insertPageDocumentRequest(
    atlas: Atlas,
    page: Page,
): Request {
    const method = 'POST';
    const url = composeMongoApiUrl(atlas.appId, insertOneEndpoint);
    const headers = insertHeaders(atlas.apiKey);

    const data = insertDocumentBody(page, atlas);

    const init = <RequestInit>{
        headers: headers,
        method: method,
        body: data,
    }

    return new Request(url, init);
}