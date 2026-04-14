async function p4() {
    const r = await fetch("https://drive.google.com/uc?export=download&id=1o8jQODym8Vt7-CppJTX5Ps87_3f2mTa2");
    const t = await r.text();
    return t.trim();
}