import { Atlas } from "./config";
import { insertPageDocumentRequest } from "./request";
import { fakeResponse } from "./response";
import { Page } from "./schema";

export default function (atlas: Atlas): Promise<Response> {
    const page = <Page>{
        path: 'abc',
        name: 'def',
    };

    const request = insertPageDocumentRequest(atlas, page);

    return fetch(request, { body: request.body }).finally(() => Promise.resolve(fakeResponse));
}