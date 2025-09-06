class Solution {
    public int lengthOfLIS(int[] nums) {
        int[] dp = new int[nums.length];
        for (int i = 0; i<nums.length; i++){
            dp[i] = 1;
        }
        for (int i = 1; i < nums.length; i++){
            for (int j = 0; j < i; j++){
                if (nums[i] > nums[j]){
                    if (dp[i] < dp[j]+1){
                        dp[i] = dp[j] + 1;
                    }
                }
            }
        }
        int maxVal = dp[0];
        for (int i = 1; i< nums.length; i++){
            if (maxVal < dp[i]){
                maxVal = dp[i];
            }
        }
        return maxVal;
    }
}