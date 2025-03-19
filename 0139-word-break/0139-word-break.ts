function wordBreak(s: string, wordDict: string[]): boolean {
    let memo: boolean[] = new Array(s.length).fill(undefined);
    return rec(0, s, wordDict, memo);
}

function rec(idx: number, s: string, wordDict: string[], memo: boolean[]): boolean {
    if (idx === s.length) return true; // If we've processed the entire string, return true
    if (memo[idx] !== undefined) return memo[idx]; // Check memoization

    for (let i = idx; i < s.length; i++) {
        let prefix = s.substring(idx, i + 1);
        if (wordDict.includes(prefix) && rec(i + 1, s, wordDict, memo)) {
            return (memo[idx] = true);
        }
    }

    return (memo[idx] = false);
}