class Solution {
    public int minDistance(String word1, String word2) {
        int l1 = word1.length();
        int l2 = word2.length();
        int[][] costDP = new int[l1+1][l2+1];
        for (int i = 0; i < l1+1; i++){
            costDP[i][0] = i;
        }
        for (int i = 0; i < l2+1; i++){
            costDP[0][i] = i;
        }
        for (int i = 1; i < l1+1; i++){
            for (int j = 1; j < l2+1; j++){
                if (word1.charAt(i-1)==word2.charAt(j-1)){
                    costDP[i][j] = costDP[i-1][j-1];
                }else {
                int topLeft = costDP[i-1][j-1];
                int top = costDP[i-1][j];
                int left = costDP[i][j-1];
                costDP[i][j] = Math.min(topLeft,Math.min(top,left))+1;
            }      
            } 
        }
        return costDP[l1][l2];
    }
}