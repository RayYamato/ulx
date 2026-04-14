async function x25() {
    const r = await fetch("https://rayyamato.github.io/ulx/25.txt");
    const t = await r.text();
    return t.trim();
}
