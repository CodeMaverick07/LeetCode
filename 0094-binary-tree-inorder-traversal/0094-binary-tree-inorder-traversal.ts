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

function inorderTraversal(root: TreeNode | null): number[] {
    let ans : number[] = []
    helper(root,ans)
    return ans

   
};

function helper(root: TreeNode | null, ans:number[]){
if (root==null) return; 
    
    helper(root.left,ans)
    ans.push(root.val)
   helper(root.right,ans)
}

