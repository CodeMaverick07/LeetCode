function minDistance(word1: string, word2: string): number {
    let m = word1.length
    let n = word2.length
    let dp = Array.from({ length: m + 1 }, 
                        () => Array(n + 1).fill(-1));
    for (let i = 0; i <= m; i++ ){
        dp[i][0] = i
    }
    for (let j = 0; j <= n; j++ ){
        dp[0][j] = j
    }
     for (let i = 1; i <= m; i++){
        for (let j = 1; j <= n; j++){
            if (word1[i - 1] === word2[j - 1]) { 
                dp[i][j] = dp[i - 1][j - 1]
            } else {
            let insertion = dp[i][j - 1]
            let deletion = dp[i - 1][ j]
            let replace = dp[i - 1][j - 1]
            dp[i][j] = 1 + Math.min(insertion, deletion, replace);
            }

           
        }     
    }
     return dp[m][n]
}

// function helper(i: number, j: number, word1: string, word2: string, dp: number[][]): number {
//     if (i === 0) return j; 
//     if (j === 0) return i; 

//     if (dp[i][j] !== -1) return dp[i][j]; 

//     if (word1[i - 1] === word2[j - 1]) { 
//         return dp[i][j] = helper(i - 1, j - 1, word1, word2, dp);
//     }

//     let insertion = helper(i, j - 1, word1, word2, dp); 
//     let deletion = helper(i - 1, j, word1, word2, dp); 
//     let replace = helper(i - 1, j - 1, word1, word2, dp); 

//     return dp[i][j] = 1 + Math.min(insertion, deletion, replace);
// }

