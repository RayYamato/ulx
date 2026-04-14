async function p4() {
    const r = await fetch("https://rayyamato.github.io/ulx/4.txt");
    const t = await r.text();
    return t.trim();
}
