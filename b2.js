async function q3() {
    const r = await fetch("https://drive.google.com/uc?export=download&id=18Dzumx63mo0OjhRxLkXWFULXQutyr5jN");
    const t = await r.text();
    return t.trim();
}