function canCompleteCircuit(gas: number[], cost: number[]): number {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < gas.length; i++){
                sum1 = sum1 + gas[i]
                sum2 = sum2 + cost[i]                  
    }
    if (sum1<sum2){
        return -1
    }
    let tank = 0; 
    let start = 0;
    for (let i = 0; i < gas.length; i++){
        tank = tank + gas[i] - cost[i]
        if (tank < 0){
            start = i + 1
             tank = 0
        }
       
    }
    return start
}
