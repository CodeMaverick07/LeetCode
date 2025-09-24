class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = 0;
        int j = 0;
        int k = 0;
        int[] ans = new int[m+n];
        while (j < m && k < n ){
            if (nums1[j]>nums2[k]){
                ans[i++] = nums2[k++];
            } else {
                ans[i++] = nums1[j++];
            }
        }
        while (j < m){
            ans[i++] = nums1[j++];
        }
        while (k < n){
            ans[i++] = nums2[k++];
        }
        for (int l = 0; l<nums1.length; l++){
            nums1[l] = ans[l];
        }
    }
}