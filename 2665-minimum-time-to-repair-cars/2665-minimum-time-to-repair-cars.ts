function repairCars(ranks: number[], cars: number): number {
    let n = ranks.length 
    let min = 1
    let max = Math.min(...ranks) * cars * cars
    while (min < max){
        let count = 0
        let mid = Math.floor(min + (max - min) / 2)
        for (let i = 0; i<n; i++){
            count += Math.floor(Math.sqrt(mid/ranks[i]))
        }   
        if (count >= cars){
         max = mid
        } else {
         min = mid + 1
        }
    }
    return min
};