//////////////////// memorization /////////////////
// function longestCommonSubsequence(text1: string, text2: string): number {
//    let dp = Array.from({length:text1.length+1},()=>Array(text2.length+1).fill(-1))
//    return helper(text1,text2,text1.length,text2.length,dp)
// };

// function helper(text1,text2,i,j,dp){
//     if (i==0||j==0){
//         return 0
//     }
//     if (dp[i][j]!= -1){
//         return dp[i][j]
//     }
//     if (text1[i-1]==text2[j-1]){
//         return dp[i][j] = 1 + helper(text1,text2,i-1,j-1,dp)
//     }

//     return dp[i][j] = Math.max(helper(text1,text2,i-1,j,dp),helper(text1,text2,i,j-1,dp))
// }
//////////////////// tabulation /////////////////
// function longestCommonSubsequence(text1: string, text2: string): number {
//     let m = text1.length
//     let n = text2.length
//    let dp = Array.from({length:m+1},()=>Array(n+1).fill(-1))
   
//    for (let j = 0; j<=n; j++){
//     dp[0][j] = 0
//    }
//    for (let i = 0; i<=m; i++){
//      dp[i][0] = 0
//    }
//    for (let i = 1; i<= m; i++){
//       for (let j = 1; j<= n; j++){
//         if (text1[i-1]==text2[j-1]){
//         dp[i][j] = 1 + dp[i-1][j-1]
//     }
//       else {dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])}
    
//     }
//    }
//    return dp[m][n]
// };

//////////////////// memory optimization in tablulation /////////////////
function longestCommonSubsequence(text1: string, text2: string): number {
    let m = text1.length;
    let n = text2.length;

    let curr = new Array(n + 1).fill(0);
    let prev = new Array(n + 1).fill(0);

    for (let i = 1; i <= m; i++) {
         
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                curr[j] = 1 + prev[j - 1];
            } else {
                curr[j] = Math.max(prev[j], curr[j - 1]);
            }
        }
        prev = [...curr]; 
    }

    return prev[n];
}