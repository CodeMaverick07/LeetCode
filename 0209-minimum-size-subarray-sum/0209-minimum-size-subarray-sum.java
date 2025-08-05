class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int n = nums.length;
        int minWindow = Integer.MAX_VALUE;
        int sum = 0;
        int left = 0;
        for (int i = 0; i<n; i++){
        sum += nums[i];
        while(sum >= target){
        minWindow = Math.min( minWindow , i - left + 1);
        sum -= nums[left];
        left++;
        }
    }
        return minWindow == Integer.MAX_VALUE ? 0 : minWindow;

    }
}