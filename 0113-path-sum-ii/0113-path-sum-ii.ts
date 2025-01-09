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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    let ans:number[][] = []
    let arr :number[] = []
     helper(root,ans,arr,targetSum)
    return ans
};

function helper(root:TreeNode,ans:number[][],arr:number[],target:number) {
    if (root == null ) return 
    arr.push(root.val)
    if (root.left == null && root.right == null && root.val == target) {
       ans.push([...arr])
    }
    helper(root.left,ans,arr,target-root.val)
    helper(root.right,ans,arr,target- root.val)
    arr.pop()
}