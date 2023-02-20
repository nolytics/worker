import { Atlas } from "../config";
import { Hit, Page } from "../data";

const pageCollection = 'page';
const hitCollection = 'hit';

export function insertPageDocumentBody(page: Page, atlas: Atlas) {
    return JSON.stringify(
        {
            dataSource: atlas.dataSource,
            database: atlas.database,
            collection: pageCollection,
            document: page,
        }
    );
}

export function insertHitDocumentBody(hit: Hit, atlas: Atlas) {
    return JSON.stringify(
        {
            dataSource: atlas.dataSource,
            database: atlas.database,
            collection: hitCollection,
            document: hit,
        }
    );
}