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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
   if (root == null ) return 
   let left = root.left
   let right = root.right 
   root.left = null
   flatten(left)
   flatten(right)
   root.right = left
   let temp = left
   while (temp != null &&temp.right !=null){ 
    temp = temp.right
    }
   if (temp != null){ temp.right = right } 
   else root.right = right
   return 
};

