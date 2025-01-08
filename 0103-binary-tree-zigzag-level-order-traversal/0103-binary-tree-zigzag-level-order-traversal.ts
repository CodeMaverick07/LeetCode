function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (root == null) return [];
    let level = height(root);
    let ans: number[][] = [];
    for (let i = 1; i <= level; i++) {
        let arr: number[] = [];
        if (i % 2 !== 0) {
            nthlevel(root, i, arr); 
        } else {
            nthlevel2(root, i, arr); 
        }
        ans.push(arr);
    }
    return ans;
}

function height(root: TreeNode | null): number {
    if (root == null) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
}

function nthlevel(root: TreeNode | null, n: number, arr: number[]) {
    if (root == null) return;
    if (n == 1) {
        arr.push(root.val);
        return;
    }
    nthlevel(root.left, n - 1, arr);
    nthlevel(root.right, n - 1, arr);
}

function nthlevel2(root: TreeNode | null, n: number, arr: number[]) {
    if (root == null) return;
    if (n == 1) {
        arr.push(root.val);
        return;
    }
    nthlevel2(root.right, n - 1, arr);
    nthlevel2(root.left, n - 1, arr);
}