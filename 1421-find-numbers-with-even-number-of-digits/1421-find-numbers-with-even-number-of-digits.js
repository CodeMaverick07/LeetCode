var findNumbers = function(nums) {
    let res = 0;

    for (let n of nums) {
        if ((n > 9 && n < 100) || (n > 999 && n < 10000) || n === 100000) {
            res++;
        }
    }

    return res;    
};