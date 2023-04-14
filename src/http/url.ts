export function composeMongoApiUrl(baseApiHost: string, appId: string, endpoint: string): URL {
    return new URL(`${baseMongoApiUrl(baseApiHost, appId)}/${endpoint}`);
}

export function composeGeolocationApiUrl(apiToken: string, ip: string): URL {
    console.log(`https://ipinfo.io/${ip}?token=${apiToken}`)
    return new URL(`https://ipinfo.io/${ip}?token=${apiToken}`);
}

// todo: set url to global or inject from .env
function baseMongoApiUrl(baseApiHost: string, appId: string): string {
    return `https://${baseApiHost}/app/${appId}/endpoint/data/v1/action`;
}