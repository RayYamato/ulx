async function x25() {
    const r = await fetch("https://drive.google.com/uc?export=download&id=1TU5jEJ3My4ZeRdvhFkK74GyVmUKDsklr");
    const t = await r.text();
    return t.trim();
}