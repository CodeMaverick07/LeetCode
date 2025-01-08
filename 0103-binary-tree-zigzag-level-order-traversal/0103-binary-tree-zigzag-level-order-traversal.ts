/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val);
 *         this.left = (left === undefined ? null : left);
 *         this.right = (right === undefined ? null : right);
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  let level = height(root);
  let ans: number[][] = [];

  for (let i = 1; i <= level; i++) {
    let arr: number[] = [];
    if (i % 2 !== 0) {
      nthlevel(root, i, arr); // Left to right
    } else {
      nthlevelReverse(root, i, arr); // Right to left
    }
    ans.push(arr);
  }

  return ans;
}

function height(root: TreeNode | null): number {
  if (root === null) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

function nthlevel(root: TreeNode | null, n: number, arr: number[]) {
  if (root === null) return;
  if (n === 1) {
    arr.push(root.val);
    return;
  }
  nthlevel(root.left, n - 1, arr);
  nthlevel(root.right, n - 1, arr);
}

function nthlevelReverse(root: TreeNode | null, n: number, arr: number[]) {
  if (root === null) return;
  if (n === 1) {
    arr.push(root.val);
    return;
  }
  nthlevelReverse(root.right, n - 1, arr);
  nthlevelReverse(root.left, n - 1, arr);
}