class Solution {
    public int maxProfit(int[] prices) {
        int curr = prices[0];
        int maxProfit = 0;
        for (int i = 1; i < prices.length; i++){
            if (curr > prices[i]){
                curr = prices[i];
            } else {
                int profit = prices[i]-curr;
                maxProfit = Math.max(profit,maxProfit);
            }
        }
        return maxProfit;
    }
}