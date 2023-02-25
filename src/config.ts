export interface Env {
    MONGODB_API_KEY: string;
    MONGODB_APP_ID: string;
    MONGODB_DATA_SOURCE: string;
    MONGODB_DATABASE: string;
    HASH_FACTOR: number;
}

export interface Hash {
    factor: number;
}

export interface Atlas {
    apiKey: string;
    appId: string;
    dataSource: string;
    database: string;
}

export function fromEnv(env: Env): Atlas & Hash {
    return {
        apiKey: env.MONGODB_API_KEY,
        appId: env.MONGODB_APP_ID,
        database: env.MONGODB_DATABASE,
        dataSource: env.MONGODB_DATA_SOURCE,
        factor: env.HASH_FACTOR,
    }
}
