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

function convertBST(root: TreeNode | null): TreeNode | null {
    let arr = []
    inorder(root,arr)
    let n = arr.length
    for (let i = 0; i<n; i++){
        if (i>0){
        arr[i][1] = arr[i][1]+arr[i-1][1]
        arr[i][0].val = arr[i][1]
        }  
    }
    return root
};

function inorder(root,arr){
  if (root==null) return
  inorder(root.right,arr)
  arr.push([root,root.val])
  inorder(root.left,arr)
}