class Solution {
    public int minPathSum(int[][] grid) {
        int o = grid.length;
        int l = grid[0].length;
        int[][] dp = new int[o+1][l+1];
        for (int i = 0; i < o+1; i++){
            for (int j = 0; j < l+1; j++){
                if (i == 0||j==0){
                    dp[i][j] = Integer.MAX_VALUE;
                }
            }
        }
        dp[1][1] = grid[0][0];
        for (int i = 1; i < o+1; i++){
            for (int j = 1; j < l+1; j++){
                if (i == 1 && j== 1) continue;
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1])+grid[i-1][j-1];
            }
        }       
        return dp[o][l];
    }
}