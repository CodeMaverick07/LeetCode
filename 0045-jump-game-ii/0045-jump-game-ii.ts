function jump(nums: number[]): number {
    let l = nums.length;
    let min = new Array(nums.length).fill(0);
    let visited = new Array(nums.length).fill(false);

    

    for (let i = 0; i<l; i++){
        let j;
        for (j = i+1; j < i+1+nums[i]; j++){
            if(j >= l) {
                return min[l - 1];
            }
            
            if(visited[j]){
                min[j] = Math.min(min[i] + 1 , min[j]);
            }else{
                min[j] = min[i] + 1;
            }
            visited[j] = true;
        }
        // console.log(i , j);
        // console.log(min);

    }
    return min[l-1]
};


// [0 1 1 0 0]

// [0 1 1 2 2]
//    i
//             j

// [0 1 1 2 2]
//    i 
//      j 