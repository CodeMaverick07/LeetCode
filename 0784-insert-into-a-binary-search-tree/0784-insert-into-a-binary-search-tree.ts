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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
 let node = new TreeNode(val)
 if (root == null) return node
 if (root.val > val) {
    if (root.left == null) root.left = node 
    else insertIntoBST(root.left,val)
 } else {
    if (root.right == null) root.right = node
    else insertIntoBST(root.right,val)
 }
 

 return root
};