import { Atlas } from "./config";
import { insertHitDocumentRequest, insertPageDocumentRequest } from "./request";
import { fakeResponse } from "./response";
import { Hit, Page } from "./schema";

export default function (atlas: Atlas): Promise<Response> {
    // const page = <Page>{
    //     path: 'abcccc',
    //     name: 'defd',
    // };

    // const request = insertPageDocumentRequest(atlas, page);

    const hit = <Hit>{
        client: {
            anonymizedId: 'abc',
            country: 'def'
        },
        metadata: {
            browser: 'yoo',
            isMobile: false,
        },
        pageId: 'abc',
    };

    const request = insertHitDocumentRequest(atlas, hit);

    return fetch(request, { body: request.body }).finally(() => Promise.resolve(fakeResponse));
}