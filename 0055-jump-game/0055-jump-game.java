class Solution {
    public boolean canJump(int[] nums) {
        int n = nums.length;
        int[] arr = new int[n];
        arr[0] = 1;
        for (int i = 0; i < n; i++){
            if (arr[i] == 1){
                for (int j = i + 1; j <=i + nums[i] && j < n; j++){
                arr[j] = 1;
            }
            }  
        }
    return arr[n-1] == 1;
    }
}