import { IpInfoApiSuccessResponse } from "./response";

export function fromResolveCountryByIpResponse(response: Response): Promise<string> {
    return response.text().then((x) => { console.log(x); return <IpInfoApiSuccessResponse>{ ...JSON.parse(x) } }).then((x) => x.country);
}