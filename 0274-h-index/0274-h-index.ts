function hIndex(citations: number[]): number {
   let count = 0;
    for (let i = citations.length; i >= 1; i--){
        count = 0
        for (let j = 0; j < citations.length; j++){
            if (i <= citations[j]){
                count++
            }
        }
        if (count >= i){
            return i
        }
    }
    return 0
};