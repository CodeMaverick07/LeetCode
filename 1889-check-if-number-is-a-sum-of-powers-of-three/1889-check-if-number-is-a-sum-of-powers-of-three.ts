function checkPowersOfThree(n: number): boolean {
    function backtrack(i:number,cur:number):boolean{
    if (cur == n) {
        return true
    }
    if (cur > n || 3**i>n){
        return false
    }

    if (backtrack(i+1,cur + 3**i)){
        return true
    }
    return backtrack(i+1,cur)
}
return backtrack(0,0)
    
};

