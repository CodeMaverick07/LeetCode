// function findDifferentBinaryString(nums: string[]): string {
//     const n = nums.length;
//     const seen = new Set(nums);
//     let result = '';
    
//     function dfs(curr: string) {
//         if (curr.length === n) {
//             if (!seen.has(curr)) {
//                 result = curr;
//             }
//             return;
//         }
//         for (const bit of ['0', '1']) {
//             if (!result) {
//                 dfs(curr + bit);
//             }
//         }
//     }
    
//     dfs('');
//     return result;
// }
function findDifferentBinaryString(nums: string[]): string {
    let result = '';
    
    // Flip the bit at each position i from nums[i]
    for (let i = 0; i < nums.length; i++) {
        result += nums[i][i] === '0' ? '1' : '0';
    }
    
    return result;
}