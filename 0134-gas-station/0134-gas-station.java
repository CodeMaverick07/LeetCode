class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int startIdx = 0;
        int totalTank = 0;
        int currTank = 0;
        for (int i = 0; i < gas.length; i++){
            int gain = gas[i] - cost[i];
            totalTank += gain;
            currTank += gain;
           if(currTank < 0){
            startIdx = i + 1;
            currTank = 0;
           }

        }
        return totalTank >= 0 ? startIdx : -1;
    }
}