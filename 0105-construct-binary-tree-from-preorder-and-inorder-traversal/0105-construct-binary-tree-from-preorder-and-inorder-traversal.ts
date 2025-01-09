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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let n = preorder.length
    return helper(preorder,0,n-1,inorder,0,n-1)
    
    
};

function helper(preorder:number[],prelow:number,prehigh:number,inorder:number[],inlow:number,inhigh:number){
    if (prelow > prehigh) return null
    let root = new TreeNode(preorder[prelow])
    let i = inlow
    while(preorder[prelow]!=inorder[i]) i++;
    let leftSize = i - inlow
    root.left = helper(preorder,prelow+1,prelow+leftSize,inorder,inlow,i-1)
    root.right = helper(preorder,prelow+leftSize+1,prehigh,inorder,i+1,inhigh)
    return root
    
}