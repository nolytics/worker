import { Atlas } from "../config";
import { insertHitDocumentRequest, insertPageDocumentRequest } from "./request";
import { fakeResponse } from "./response";
import { Hit } from "../data";
import { requestToClient, requestToMetadata, requestToPage } from "../data";

export default async function (req: Request, atlas: Atlas): Promise<Response> {
    const page = requestToPage(req);

    const hit = <Hit>{
        client: requestToClient(req),
        metadata: requestToMetadata(req),
        pageId: page.path,
    };

    const insertPageRequest = insertPageDocumentRequest(atlas, page);
    const insertHitRequest = insertHitDocumentRequest(atlas, hit);

    try {
        fetch(insertPageRequest, { body: insertPageRequest.body });
        fetch(insertHitRequest, { body: insertHitRequest.body });
    } finally {
        return await Promise.resolve(fakeResponse);
    }
}