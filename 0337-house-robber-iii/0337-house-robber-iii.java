/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int rob(TreeNode root) {
        int[] ans = travel(root);
        return Math.max(ans[0],ans[1]);
    }

    public int[] travel(TreeNode root){
        if (root == null){
            return new int[2];
        }
        int[] options = new int[2];
        int[] left_options = travel(root.left);
        int[] right_options = travel(root.right);
        // option[0] will be skip the current node 
        options[0] = Math.max(left_options[0],left_options[1])+Math.max(right_options[0],right_options[1]);
        // option[1] will be rob the current node  
        options[1] = root.val + left_options[0] + right_options[0];

        return options;
    }
}