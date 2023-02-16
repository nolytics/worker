import { Atlas } from "./config";
import { Document } from "./schema";

// replace with https://www.mongodb.com/docs/atlas/api/data-api-resources/#update-a-single-document
export function insertDocumentBody(document: Document, atlas: Atlas) {
    return JSON.stringify(
        {
            dataSource: atlas.dataSource,
            database: atlas.database,
            collection: atlas.collection,
            document: document,
        }
    );
}