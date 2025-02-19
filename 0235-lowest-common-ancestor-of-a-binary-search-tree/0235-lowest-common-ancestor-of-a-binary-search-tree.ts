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




// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//    if (root == p || root == q) return root 
//    if (p==q) return p
// let left =  p.val < root.val
// let right = q.val > root.val
// if((left&&right ) || (!left&&!right)) return root
// if (left && !right) return lowestCommonAncestor(root.left,p,q)
// if (!left&&right) return lowestCommonAncestor(root.right,p,q)
// return null
	
// };

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	  if(!root || !p || !q) return null;
    while(root){
        if(p.val < root.val && q.val < root.val){
            root = root.left;
        } else if (p.val > root.val && q.val > root.val){
            root = root.right;
        } else {
            return root;
        }
    }
}

