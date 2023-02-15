export interface Document {
    _id: string;
};

export interface Page extends Document {
    name: string;
    path: string;
    hits: Array<Hit>;
}

export interface Hit extends Document {
    client: Client;
    metadata: Metadata;
};

export interface Client extends Document {
    anonymizedId: string;
    country: string;
};

export interface Metadata extends Document {
    browser: string;
    isMobile: boolean;
};