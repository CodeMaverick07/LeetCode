function longestCommonSubsequence(text1: string, text2: string): number {
   let dp = Array.from({length:text1.length},()=>Array(text2.length).fill(-1))
   return helper(text1,text2,text1.length-1,text2.length-1,dp)
};

function helper(text1,text2,i,j,dp){
    if (i<0||j<0){
        return 0
    }
    if (dp[i][j]!= -1){
        return dp[i][j]
    }
    if (text1[i]==text2[j]){
        return dp[i][j] = 1 + helper(text1,text2,i-1,j-1,dp)
    }

    return dp[i][j] = Math.max(helper(text1,text2,i-1,j,dp),helper(text1,text2,i,j-1,dp))
}