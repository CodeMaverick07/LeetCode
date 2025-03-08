function minDistance(word1: string, word2: string): number {
    let dp = Array.from({ length: word1.length + 1 }, 
                        () => Array(word2.length + 1).fill(-1));
    return helper(word1.length, word2.length, word1, word2, dp);
}

function helper(i: number, j: number, word1: string, word2: string, dp: number[][]): number {
    if (i === 0) return j; 
    if (j === 0) return i; 

    if (dp[i][j] !== -1) return dp[i][j]; 

    if (word1[i - 1] === word2[j - 1]) { 
        return dp[i][j] = helper(i - 1, j - 1, word1, word2, dp);
    }

    let insertion = helper(i, j - 1, word1, word2, dp); 
    let deletion = helper(i - 1, j, word1, word2, dp); 
    let replace = helper(i - 1, j - 1, word1, word2, dp); 

    return dp[i][j] = 1 + Math.min(insertion, deletion, replace);
}

