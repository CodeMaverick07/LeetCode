function numDecodings(s: string): number {
    if (s[0]=="0") return 0
    let dp = []
    for (let i = 0; i<s.length; i++){
        dp[i] = -1
    }
  return helper(s,s.length-1,dp)
};

function helper(s,idx,dp){
    if (idx <= 0){
        return 1
    }
    if (dp[idx]!= -1){
        return dp[idx]
    }
    let notcombined = 0;
    if (s[idx]!= '0'){
        notcombined = helper(s,idx-1,dp)
    }
    let combined = 0
    if (s[idx-1]=="1"||s[idx-1]=="2"&&s[idx]<="6"){
        combined = helper(s,idx-2,dp)
    }
    return dp[idx] = combined + notcombined
}