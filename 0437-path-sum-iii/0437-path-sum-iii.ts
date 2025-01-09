function pathSum(root: TreeNode | null, targetSum: number): number {
    let ans = { count: 0 };
    helper(root, targetSum, ans);
    return ans.count;
}

function helper(root: TreeNode | null, target: number, ans: any) {
    if (root == null) return;

    // Count paths starting from the current node
    countPaths(root, target, ans);

    // Recursively check the left and right subtrees
    helper(root.left, target, ans);
    helper(root.right, target, ans);
}

function countPaths(node: TreeNode | null, targetSum: number, ans: any) {
    if (node == null) return;

    // Check if the current node value equals the remaining target sum
    if (node.val === targetSum) {
        ans.count++;
    }

    // Continue searching in the left and right subtrees
    countPaths(node.left, targetSum - node.val, ans);
    countPaths(node.right, targetSum - node.val, ans);
}