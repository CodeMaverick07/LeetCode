function hIndex(citations: number[]): number {
    citations.sort((a,b)=> a - b)
    console.log(citations)
    let ans = 0
    for (let i = 0; i < citations.length; i++){
        
        if (citations[i] >= citations.length - i ){
            return citations.length - i
        }
        console.log(i,ans)
    }
    return ans
};