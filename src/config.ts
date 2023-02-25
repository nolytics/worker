export interface Env {
    MONGODB_API_KEY: string;
    MONGODB_APP_ID: string;
    MONGODB_DATA_SOURCE: string;
    MONGODB_DATABASE: string;
    MONGODB_BASE_API_HOST: string;
    HASH_FACTOR: number;
}

export interface Hash {
    factor: number;
}

export interface Atlas {
    apiKey: string;
    appId: string;
    baseApiHost: string;
    dataSource: string;
    database: string;
}

export function fromEnv(env: Env): Atlas & Hash {
    return {
        apiKey: env.MONGODB_API_KEY,
        appId: env.MONGODB_APP_ID,
        baseApiHost: env.MONGODB_BASE_API_HOST,
        database: env.MONGODB_DATABASE,
        dataSource: env.MONGODB_DATA_SOURCE,
        factor: env.HASH_FACTOR,
    }
}
