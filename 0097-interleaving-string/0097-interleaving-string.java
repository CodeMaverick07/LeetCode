class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) return false;

        Boolean[][] memo = new Boolean[s1.length()+1][s2.length()+1];
        return dfs(s1, 0, s2, 0, s3, 0, memo);
    }

    private boolean dfs(String s1, int i1, String s2, int i2, String s3, int i3, Boolean[][] memo) {
        if (i3 == s3.length()) {
            return i1 == s1.length() && i2 == s2.length();
        }

        if (memo[i1][i2] != null) return memo[i1][i2];

        boolean ans = false;

        if (i1 < s1.length() && s1.charAt(i1) == s3.charAt(i3)) {
            ans = dfs(s1, i1+1, s2, i2, s3, i3+1, memo);
        }

        if (!ans && i2 < s2.length() && s2.charAt(i2) == s3.charAt(i3)) {
            ans = dfs(s1, i1, s2, i2+1, s3, i3+1, memo);
        }

        return memo[i1][i2] = ans;
    }
}