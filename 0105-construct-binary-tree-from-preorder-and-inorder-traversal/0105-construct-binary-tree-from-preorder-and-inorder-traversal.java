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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        Map<Integer,Integer> mp = new HashMap<>();
        for (int i = 0; i < preorder.length; i++){
            mp.put(inorder[i],i);
        }
        return helper(preorder,mp,0,0,preorder.length-1);
    }
    public TreeNode helper(int[] preorder,Map<Integer,Integer> mp,int rootIdx,int left,int right){
        TreeNode root = new TreeNode(preorder[rootIdx]);
        int mid = mp.get(preorder[rootIdx]);
        if (mid > left) root.left = helper(preorder,mp,rootIdx+1,left,mid-1);
        if (mid < right) root.right = helper(preorder,mp,rootIdx+mid-left+1,mid+1,right);
        return root;
    }
}