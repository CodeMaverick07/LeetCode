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

function sortedArrayToBST(nums: number[]): TreeNode | null {
     if (nums.length == 0) return null
     return helper(nums,0,nums.length - 1)
};

function helper(nums,low,high){
     if (low > high) return null; 

    let mid = Math.floor((low + high) / 2);
    let root = new TreeNode(nums[mid]); 
        root.left = helper(nums, low, mid - 1);  
    root.right = helper(nums, mid + 1, high); 
    return root;
}