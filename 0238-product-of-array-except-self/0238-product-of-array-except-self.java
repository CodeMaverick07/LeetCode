class Solution {
    public int[] productExceptSelf(int[] nums) {
     int l = nums.length;
     int zeroCount = 0;
     int zeroIndex = -1;
     int maxMulti = 1;
     for (int i = 0; i < l; i++){
        if (nums[i] == 0){
            zeroCount++;
            zeroIndex = i;
        } else {
        maxMulti = maxMulti * nums[i];
        }
    
     }
     if (zeroCount > 1){
        return new int[l];
     }
     if (zeroCount == 1){
        int[] arr = new int[l];
        arr[zeroIndex] = maxMulti;
        return arr;
     }
     int[] arr = new int[l];
     for (int i = 0; i < l; i++){
        arr[i] = maxMulti/nums[i];
     }
     return arr;

    }
}