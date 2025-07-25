function canJump(nums: number[]): boolean {

    // let l = nums.length -1
    // let jump = 1
    // let i = 1
    // while ( jump < l ){
    // if (nums[i] == 0 && jump != l ) return false
    // jump = jump + nums[i]
    // console.log(jump)
    // i = i + nums[i] 
    // }
    // return (jump == l)

    let n = nums.length;
    let j = 1;
    let arr: boolean[] = new Array(nums.length).fill(false);
    if(n == 1) return true;

    if(nums[0] == 0 && n > 1) return false;
    for(let i = 0 ; i < n ; i ++){
        let expected = i + nums[i];
        for(j ; j <= expected ; j ++){
            arr[j] = true;
            if(j == i){
                // console.log("lund")
                return false;
            }
        }
        // console.log(i , j);
        
        if(j == n) return true;
    }



    return arr[n - 1];
};
// [2,2,1,0,4]
// 5 - > [F ,T , T ,F, F,]
            //  i
            //         j


// [2,3,1,1,4]