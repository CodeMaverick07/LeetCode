class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
         k = k % n;
        if (n == 1) return;
        int[] arr = new int[n];
        int j = 0;
        for (int i = k; i < nums.length; i++){
            arr[i] = nums[j++]; 
        }
        for (int i = 0; i < k; i++){
            arr[i] = nums[j++]; 
        }
        for (int i = 0; i < n; i++){
            nums[i] = arr[i];
        }
    }
}