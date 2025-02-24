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

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    let parent = new TreeNode(Infinity)
    parent.left = root
    helper(parent,low,high)
    return parent.left
};

function helper(root,low,high){
    if(root == null) return 
    while(root.left != null){
        if (root.left.val < low) root.left = root.left.right
        else if (root.left.val > high) root.left = root.left.left
        else break
    } 
     while(root.right != null){
        if (root.right.val < low) root.right = root.right.right
        else if (root.right.val > high) root.right = root.right.left
        else break
    } 
   helper(root.left,low,high)
   helper(root.right,low,high)
}
