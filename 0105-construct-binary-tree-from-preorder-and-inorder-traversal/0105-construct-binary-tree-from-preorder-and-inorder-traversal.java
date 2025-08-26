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
        Map<Integer,Integer> inorderMap = new HashMap<>();
        for (int i = 0; i < preorder.length; i++){
            inorderMap.put(inorder[i],i);
        }
        return helper(0,preorder.length-1,0,preorder,inorderMap);
    }

    public TreeNode helper(int left,int right,int idx,int[] preorder,Map<Integer,Integer> inorderMap){
    TreeNode node = new TreeNode(preorder[idx]);
    int mid = inorderMap.get(preorder[idx]);
    if (mid > left) node.left = helper(left,mid-1,idx+1,preorder,inorderMap);
    if (mid < right) node.right = helper(mid+1,right,mid+idx-left+1,preorder,inorderMap);
    return node;
    }
}