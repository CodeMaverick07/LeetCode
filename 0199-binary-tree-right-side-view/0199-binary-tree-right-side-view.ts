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

function rightSideView(root: TreeNode | null): number[] {
   
    let ans : number [] = []
    if(root == null ) return ans
    solve(root,ans,1)
    return ans
};



function solve(root:TreeNode,ans:number[],n:number){
    if (root == null) return 
    ans[n-1] = root.val
    solve(root.left,ans,n+1)
    solve(root.right,ans,n+1)

} 