class Solution {
    public int maxProfit(int[] prices) {
    int l = prices.length;
    int maxProfit = 0;
    int curr = prices[0];
    for (int i = 1; i < l; i++){
         if (prices[i]<curr){
            curr = prices[i];
         } else {
            int currProfit = prices[i] - curr;
            maxProfit = Math.max(currProfit,maxProfit);
         }
    }
    return maxProfit;
 }
}