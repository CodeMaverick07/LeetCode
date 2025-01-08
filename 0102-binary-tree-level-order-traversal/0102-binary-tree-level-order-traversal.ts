// function levelOrder(root: TreeNode | null): number[][] {
//     if (root == null ) return []
//     let n = 1 + height(root)
//     let ans = []
//     for (let i = 1; i<= n; i++){
//         let arr = []
//         nthLevel(root,i,arr)
//         ans.push(arr)
//     }
//     return ans
// };

// function nthLevel(root:TreeNode | null,n:number,arr:number[]) {
//     if (root == null ) return 
//   if (n == 1) {
//    arr.push(root.val)
// return 
//   }
//   nthLevel(root.left, n-1,arr)
//   nthLevel(root.right,n-1,arr)
// }

// function height(root:TreeNode) {
//     if (root == null) return 0
//     if (root.left == null && root.right == null ) return 0
//     return 1+Math.max(height(root.left),height(root.right))
// }

function levelOrder(root: TreeNode | null): number[][] {
    if (root == null) return []
    
    let ans: number[][] = []
    let queue: TreeNode[] = [root]  // Start with the root in the queue
    
    while (queue.length > 0) {
        let levelSize = queue.length  // Number of nodes at the current level
        let currentLevel: number[] = []
        
        // Process all nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift()!
            currentLevel.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        
        ans.push(currentLevel)  // Add the current level to the result
    }
    
    return ans
}