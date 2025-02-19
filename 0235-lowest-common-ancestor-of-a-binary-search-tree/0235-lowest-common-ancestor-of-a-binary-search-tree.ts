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




function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
   if (root == p || root == q) return root 
   if (p==q) return p

let left = contains(root.left,p)
let right = contains(root.right,q)
if((left&&right )|| (!left&&!right)) return root
if (left && !right) return lowestCommonAncestor(root.left,p,q)
if (!left&&right) return lowestCommonAncestor(root.right,p,q)
return null
	
};

function contains(root,node){
    if (root == node) return true
    if (root == null ) return false
    return contains(root.left,node)|| contains(root.right,node)

}
