export default function (pt: string): string {
    let hash = 4;

    for (let i = 0; i < pt.length; i++) {
        hash *= pt.charCodeAt(i) * 0.4;
    }

    return `${hash.toFixed()}`
}