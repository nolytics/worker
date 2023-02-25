/**
 * An hash function to be used to mask client IP address, in order to anonymize their identity. It uses SHA-256 as the base layer
 * and a factor used as a multiplier in the output bitstring. This factor is required, since an attacker could compute all images for
 * all unique IP addresses and thus deanonymizing user identity. With the factor, attackers would have to know it's number to correctly find 
 * the image.
 * 
 * @param pt A plain-text string corresponding to a client IP address
 * @param factor A factor number used as the output multiplier
 * @returns A mask of the plain-text string
 */
export default async function (pt: string, factor: number = 0.25): Promise<string> {
    const encoded = new TextEncoder().encode(pt);

    const digest = await crypto.subtle.digest({ name: 'SHA-256' }, encoded).then((x) => new Uint8Array(x));

    return Array.from(digest).map(b => (b * factor).toString(16).padStart(2, '0')).join('');
}