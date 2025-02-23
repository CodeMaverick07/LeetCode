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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
     if (!preorder.length || !postorder.length) return null;
      const root = new TreeNode(preorder[0]);
      if (preorder.length === 1) return root;

       const leftSubtreeRoot = preorder[1];
       const leftSubtreeSize = postorder.indexOf(leftSubtreeRoot)+1
     
     root.left = constructFromPrePost(preorder.slice(1,leftSubtreeSize+1),postorder.slice(0,leftSubtreeSize))
     root.right = constructFromPrePost(preorder.slice(leftSubtreeSize + 1),postorder.slice(leftSubtreeSize, -1))
     return root
};