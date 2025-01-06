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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let tree1 : number[] = []
  let tree2 : number[] = []
  helper(p,tree1)
  helper(q,tree2)
  return arraysAreEqual(tree1,tree2)
};

function helper(node: TreeNode|null,ans:number[]){
if (node === null){
     ans.push(Infinity); 
    return
} 
 ans.push(node.val)
 helper(node.left,ans)
 
 helper(node.right,ans)
}


function arraysAreEqual(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  
  return true;
}