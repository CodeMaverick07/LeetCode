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
// function height(root:TreeNode| null) {
//     if (root == null || (root.right == null && root.left == null )) return 0
//     return 1 + Math.max(height(root.left),height(root.right))
// }
// function diameterOfBinaryTree(root: TreeNode | null): number {
//     if (root == null || (root.right == null && root.left == null)) return 0
//     let left = diameterOfBinaryTree(root.left)
//     let right = diameterOfBinaryTree(root.right)
//     let mid = height(root.right) + height(root.left) 
//     if (root.right != null) mid++
//     if (root.left != null ) mid++

//    let max = Math.max(mid,Math.max(right,left))
//     return max
// };

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = { value: 0 }
  helper(root,diameter)
  return diameter.value;
}
function helper(root:TreeNode, diameter:any ) {
    if (root == null ) return 0
    let right = helper(root.right,diameter)
    let left = helper(root.left, diameter)

    diameter.value = Math.max(diameter.value,right+left)
    return 1 + Math.max(left,right)

}