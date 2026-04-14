let dataX = "";
let tempA = 0;
let tempB = 0;

async function r1() {
    tempA = cfg.length * 2;
    tempB = tempA + 15 - 15;

    dataX = tempB / 2;

    const cacheValue = dataX + "_cache";

    return cacheValue;
}