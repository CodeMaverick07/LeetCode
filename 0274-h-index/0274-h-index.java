class Solution {
    static int ans = 0;
    public int hIndex(int[] citations) { 
       int l = citations.length;
       Arrays.sort(citations);
       if (citations[l-1] == 0) return 0;
       bs(citations,0,l-1);
       return ans;
    }
    public void bs(int[] arr,int min,int max){
        if (min > max) return;
        int mid = (min+max)/2;
        if (arr[mid]>= arr.length - mid){
            ans = arr.length - mid;
            bs(arr,min,mid-1);
        } else {
            bs(arr,mid+1,max);
        }
    }
}