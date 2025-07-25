function maxProfit(prices: number[]): number {
    let min = prices[0];
    let maxProf = 0;

    for (let index = 1; index < prices.length; index++) {
            if (prices[index] < min) {
                min = prices[index];
            } else if (prices[index] > min) {
                const profit = prices[index] - min;
          
                if (profit > maxProf) maxProf = profit;
            }
    }
   
    return maxProf;

};