let cfg = "";

async function g1() {
    const [m1, m2, m3] = await Promise.all([
        p4(),
        q3(),
        x25()
    ]);

    cfg = m1 + m2 + m3;
    return cfg;
}