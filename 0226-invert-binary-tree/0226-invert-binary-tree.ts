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

function invertTree(root: TreeNode | null): TreeNode | null {
   if (root == null) return root
    if (root.left==null && root.right == null) return root
    swap(root)
    invertTree(root.right)
    invertTree(root.left)
    return root
};



function swap (root:TreeNode | null) {
if (root == null )return 
let temp = root.right
root.right = root.left
root.left = temp
}