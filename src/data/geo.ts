import { IpInfo } from "../config";
import { fetchGeolocationInformationRequest, fromResolveCountryByIpResponse } from "../http";

export function resolveCountry(ipInfo: IpInfo, ip: string): Promise<string> {
    const fetchGeolocationRequest = fetchGeolocationInformationRequest(ipInfo, ip);

    return fetch(fetchGeolocationRequest).then(fromResolveCountryByIpResponse);
}