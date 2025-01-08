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
    helper(root)
    return root
};

function helper(root:TreeNode) {
    if (root == null) return
    if (root.left==null && root.right == null) return 
    swap(root)
    helper(root.right)
    helper(root.left)
}

function swap (root:TreeNode | null) {
if (root == null )return 
let temp = root.right
root.right = root.left
root.left = temp
}