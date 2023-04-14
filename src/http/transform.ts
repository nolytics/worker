import { IpInfoApiSuccessResponse } from "./response";

export function fromResolveCountryByIpResponse(response: Response): Promise<string> {
    return response.text().then((x) => <IpInfoApiSuccessResponse>{ ...JSON.parse(x) }).then((x) => x.country);
}