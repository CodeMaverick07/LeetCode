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
 

let ans = true;
let temp = null;

function isValidBST(root: TreeNode | null): boolean {
    if (root === null) return true;
    ans = true;
    temp = null;
    inorder(root);
    return ans;
}

function inorder(root: TreeNode | null) {
    if (root === null) return;
    
    inorder(root.left);
    
    if (temp === null) {
        temp = root;
    } else if (root.val <= temp.val) {
        ans = false;
    } else {
        temp = root;
    }
    
    inorder(root.right);
}