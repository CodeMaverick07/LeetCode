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

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
    let arr = []
    inorder(root,arr)
    let first = -Infinity
    let second = -Infinity
    let prev = -Infinity
    
    for (let i = 0; i< arr.length; i++){
     if(arr[i].val<prev){
        if (first === -Infinity)first = i-1
        second = i 
     }
     prev = arr[i].val
    }
   let temp = arr[first].val
   arr[first].val = arr[second].val
   arr[second].val = temp
};

function inorder(root,arr){
    if (root == null) return 
    inorder(root.left,arr)
    arr.push(root)
    inorder(root.right,arr)
}
