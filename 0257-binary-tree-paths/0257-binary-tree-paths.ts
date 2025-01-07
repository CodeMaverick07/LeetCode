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

function binaryTreePaths(root: TreeNode | null): string[] {
    let ans = []
    let s = ""
    helper(root,ans,s)
    return ans
};
function helper(root:TreeNode, ans: string[], s:string){
    if (root == null ) return 
    if (root.left == null && root.right== null) {
        s += root.val
        ans.push(s)
        return 
    }
    helper(root.left,ans,s+root.val+"->")
    helper(root.right,ans,s+root.val+"->")
}