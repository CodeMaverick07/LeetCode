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

function minDiffInBST(root: TreeNode | null): number {
    let arr = []
    let minDiff = Infinity
    inorder(root,arr)
    for (let i = 0; i < arr.length-1; i++){
        if (i == 0){
          minDiff = Math.abs(arr[i+1]-arr[i]) 
        }
        if (i > 0){
          minDiff = Math.abs(Math.min(minDiff,arr[i+1]-arr[i]))
        }
        
    }
    return minDiff
};

function inorder(root,arr) {
    if (root == null ) return null
    inorder(root.left,arr)
    arr.push(root.val)
    inorder(root.right,arr)
}

