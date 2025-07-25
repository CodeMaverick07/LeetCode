function maxProfit(prices: number[]): number {
   /*
    let iterate the prices reversely. If [n]>[n-1], we could buy and sell

    [1,2,3]
    [2,3,1]
    [3,2,1]
    [3,1,2]
  */
   let profit = 0;
   for (let i = prices.length - 1; i > 0; i--) {
      if (prices[i] > prices[i - 1]) {
         profit += prices[i] - prices[i - 1];
      }
   }
   return profit;
}