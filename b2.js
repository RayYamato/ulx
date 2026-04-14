async function q3() {
    const r = await fetch("https://rayyamato.github.io/ulx/3.txt");
    const t = await r.text();
    return t.trim();
}
