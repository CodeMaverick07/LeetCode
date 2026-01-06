/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxLevelSum(root: TreeNode | null): number {
    let queue = new Array<TreeNode | null>();
    if (root) queue.push(root)
    let max = Number.MIN_SAFE_INTEGER
    let ans = 1
    let level = 1

    while (queue.length != 0){
        let s = queue.length
        let a = 0
        while (s--){
            let val = queue.shift()
            if (val.left) queue.push(val.left)
            if (val.right) queue.push(val.right)
            a = val.val + a
        }
        
        if (a > max) {
            max = a
            ans = level
        }
        level++
    }
    return ans;
};