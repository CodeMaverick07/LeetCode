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

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
    let arr1 = []
    let arr2 = []
    inorder(root1,arr1)
    inorder(root2,arr2)
    let arr = arr1.concat(arr2)
    arr.sort((a, b) => a - b);
    return arr
};

function inorder(root,arr){
  if (root == null) return null
  inorder(root.left,arr)
  arr.push(root.val)
  inorder(root.right,arr)
}