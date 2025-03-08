function minDistance(word1: string, word2: string): number {
    let dp = Array.from({length:word1.length+1},()=>Array(word2.length+1).fill(-1))
    return helper(word1.length-1,word2.length-1,word1,word2,dp)
};

function helper(i,j,word1,word2,dp){
    if (i == -1){
        return j + 1
    }
    if (j == -1){
        return i + 1
    }
    if ( dp[i][j] != -1 ) {
        return dp[i][j]
    }
    if (word1[i] == word2[j]){
       return dp[i][j] = helper(i - 1, j - 1, word1, word2, dp);
    }
    let insertion =  helper(i-1,j,word1,word2,dp)
    let deletion =  helper(i,j-1,word1,word2,dp)
    let replace = helper(i-1,j-1,word1,word2,dp)
    
    return dp[i][j] = 1 + Math.min(insertion,deletion,replace)

}