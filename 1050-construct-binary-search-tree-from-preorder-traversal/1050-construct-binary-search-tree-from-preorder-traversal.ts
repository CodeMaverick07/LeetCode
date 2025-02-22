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

function bstFromPreorder(preorder: number[]): TreeNode | null {
    let n = preorder.length
    if (n==0) return null
    let root = new TreeNode(preorder[0])
    if (n==1) return root
    for (let i = 1; i < n; i++){
       helper(root,preorder[i])
    }
    return root
};

function helper(root,val){
    if (root == null) return
    let node = new TreeNode(val)
    if (root.val > val) {
    if (root.left == null) root.left = node 
    else helper(root.left,val)
 } else {
    if (root.right == null) root.right = node
    else helper(root.right,val)
 }      
}