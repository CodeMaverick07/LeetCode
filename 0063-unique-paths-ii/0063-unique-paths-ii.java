class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int inner = obstacleGrid[0].length;    
        int outer = obstacleGrid.length; 
        int[][] dp = new int[outer][inner]; 
        for (int i = 0; i < outer; i++){
            if (obstacleGrid[i][0]==1) break;
            for (int j = 0; j < inner; j++){
                if (j == 0 || i == 0){
                    if (obstacleGrid[i][j] == 1) break;
                    dp[i][j] = 1;
                }
            }
        }
        for (int i = 1; i < outer; i++){
            for (int j = 1; j < inner; j++){
                if (obstacleGrid[i][j]==1){
                    dp[i][j] = 0;
                } else {
                dp[i][j] = dp[i-1][j]+dp[i][j-1];
                }
            }
        }    
        return dp[outer-1][inner-1];   
    }
}