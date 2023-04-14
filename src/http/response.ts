export const fakeResponse = new Response(null, {
    status: 200,
    headers: new Headers({
        'Content-Type': 'image/jpeg'
    })
});

export interface IpInfoApiSuccessResponse {
    country: string;
}