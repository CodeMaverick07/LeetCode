class Solution {
    public int maxArea(int[] height) {
        int i = 0;
        int j = height.length-1;
        int maxWater = 0;
        while (i < j){
            int contains = Math.min(height[i],height[j]) * (j - i);
            maxWater = Math.max(contains,maxWater);
            if (height[i]>height[j]){
                j--;
            }else {
                i++;
            }
        }
        return maxWater;
    }
}