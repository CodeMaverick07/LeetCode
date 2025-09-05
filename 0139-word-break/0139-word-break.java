class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
       Set<String> st = new HashSet<>(wordDict);
       int maxlen = 0;
       for (String word : wordDict){
       maxlen = Math.max(word.length(),maxlen);
       } 
        boolean[] dp = new boolean[s.length()+1];
        dp[0] = true;

        for (int i = 1; i <= s.length(); i++){
            for (int j = i-1; j >= Math.max(0,i-maxlen); j--){
                if (dp[j]&&st.contains(s.substring(j,i))){
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }
}