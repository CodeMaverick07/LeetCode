var minDominoRotations = function(tops, bottoms) {
    let res = Infinity;
    for (let val = 1; val <= 6; val++) {
        let topSwaps = 0, bottomSwaps = 0;
        let valid = true;
        for (let i = 0; i < tops.length; i++) {
            if (tops[i] !== val && bottoms[i] !== val) {
                valid = false;
                break;
            }
            if (tops[i] !== val) topSwaps++;
            if (bottoms[i] !== val) bottomSwaps++;
        }
        if (valid) res = Math.min(res, topSwaps, bottomSwaps);
    }
    return res === Infinity ? -1 : res;
};