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
    if (root == null ) return new TreeNode(val)
   if (root.val > val ) {
    if (root.left == null ) {
        root.left = new TreeNode(val)
    } else insertIntoBST(root.left,val)
   } else {
    if (root.right == null) {
        root.right = new TreeNode(val)
    } else insertIntoBST(root.right,val)
   }

   return root
};