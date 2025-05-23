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

// function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//    if (root == null ) return false
//    if (root!= null && root.left == null && root.right == null ) {
//     if (root.val == targetSum) return true
//    }
//    return hasPathSum(root.left,targetSum-root.val) || hasPathSum(root.right,targetSum- root.val)
    
// };

function hasNoLeaves(node: TreeNode) {
    return !(Boolean(node.left) || Boolean(node.right))
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {

    if(root === null) return false;
    if(targetSum - root.val === 0 && hasNoLeaves(root)) {
        return true
    };
    
    return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val)
};



