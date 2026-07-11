function candy(ratings: number[]): number {
    let candy = new Array(ratings.length).fill(0)
    candy[0] = 1
    for (let i = 1; i < ratings.length; i++){
        if (ratings[i-1]<ratings[i]){
            candy[i] = candy[i-1] + 1
        } else {
            candy[i] = 1
        }
    }
    for (let i = ratings.length - 1; i >= 1; i--){
        if (ratings[i]<ratings[i-1]){
            candy[i-1] = Math.max(candy[i-1],candy[i]+1)
        }
    }
    let ans = 0;
    for (let i = 0; i < ratings.length; i++){
        ans = ans + candy[i]
    }
    return ans
};