
function isSymmetric(root: TreeNode | null): boolean {
    if (root == null) return true
    return helper(root.left,root.right)
};

function helper(root1:TreeNode,root2:TreeNode){
    if (root1 == null && root2 == null) return true
    if (root1 == null || root2 == null )return false

    return root1.val == root2.val && helper(root1.left,root2.right)&&helper(root1.right,root2.left)
}