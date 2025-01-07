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
 function height(root:TreeNode|null){
    
    if (root == null || (root.right==null && root.left == null)) return 0
    return 1+ Math.max(height(root.left),height(root.right))
 }

function isBalanced(root: TreeNode | null): boolean {
    if (root == null||(root.left == null && root.right == null)) return true
    let leftHeight = height(root.left)
    if(root.left != null) leftHeight++
    let rightHeight = height(root.right)
   if(root.right != null) rightHeight++
    if( Math.abs(leftHeight-rightHeight) > 1 ) return false
    return isBalanced(root.right) && isBalanced(root.left)
};