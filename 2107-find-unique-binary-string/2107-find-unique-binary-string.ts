function findDifferentBinaryString(nums: string[]): string {
    const n = nums.length;
    const seen = new Set(nums);
    let result = '';
    
    function dfs(curr: string) {
        // If we found a string not in nums, store it and return
        if (curr.length === n) {
            if (!seen.has(curr)) {
                result = curr;
            }
            return;
        }
        
        // Try both 0 and 1 for each position
        for (const bit of ['0', '1']) {
            // If we haven't found a result yet, continue searching
            if (!result) {
                dfs(curr + bit);
            }
        }
    }
    
    dfs('');
    return result;
}