class Solution {
    public int rob(int[] nums) {
        if (nums.length == 1) return nums[0];
       int[] dp = new int[nums.length+1];
       dp[1] = nums[0];
       dp[2] = nums[1];

       for (int i = 3; i < nums.length + 1; i++){
        dp[i] = nums[i-1]+Math.max(dp[i-2],dp[i-3]);
       }
       return Math.max(dp[nums.length],dp[nums.length-1]);
    }
}