class Solution {
    public int maxArea(int[] height) {
        int l = height.length;
        int i = 0;
        int j = l - 1;
        int max = 0;
        while (i < j){ 
           int min = Math.min(height[i],height[j]);
           int diff = j - i;
           max = Math.max(max, diff * min);
           if (height[i]>height[j]){
            j--;
           } else i++;
        }
        return max;
    }
}