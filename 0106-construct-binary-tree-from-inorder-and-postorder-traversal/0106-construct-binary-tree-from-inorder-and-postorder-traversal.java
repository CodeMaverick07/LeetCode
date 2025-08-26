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
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        int l = inorder.length;
        Map<Integer,Integer> mp = new HashMap<>();
        for (int i = 0; i < l; i++){
            mp.put(inorder[i],i);
        }
        return buildTree(postorder,mp,0,l-1,l-1);
    }

    public TreeNode buildTree(int[] postorder,Map<Integer,Integer> mp, int left,int right,int idx){
        TreeNode node = new TreeNode(postorder[idx]);
        int mid = mp.get(postorder[idx]);
        if (mid > left ) node.left = buildTree(postorder,mp,left,mid-1,idx - (right - mid) - 1);
        if (mid < right) node.right = buildTree(postorder,mp,mid+1,right,idx-1);
        return node;
    }
}