import { Atlas, Hash } from "../config";
import { insertHitDocumentRequest, insertPageDocumentRequest } from "./request";
import { fakeResponse } from "./response";
import { Hit } from "../data";
import { requestToClient, requestToMetadata, requestToPage } from "../data";

export default async function (req: Request, config: Atlas & Hash): Promise<Response> {
    const page = requestToPage(req);

    try {
        const hit = <Hit>{
            client: await requestToClient(req, config),
            metadata: requestToMetadata(req),
            occurrenceTimeMS: Date.now(),
            pageId: page.path,
        };

        const insertPageRequest = insertPageDocumentRequest(config, page);
        const insertHitRequest = insertHitDocumentRequest(config, hit);

        console.info(`received hit for page: ${page.path} | name: ${page.name}`);

        fetch(insertPageRequest, { body: insertPageRequest.body });
        fetch(insertHitRequest, { body: insertHitRequest.body });
    } catch (err) {
        console.error(err);
    } finally {
        return Promise.resolve(fakeResponse);
    }
}