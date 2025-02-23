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

function helper(node: TreeNode | null, response: number[][], h:number){
    if(node == null )   return;
    if( response[h] === undefined ){
        response[h] = new Array<number>();
    }
    helper(node.left, response, h+1);
    response[h].push(node.val);
    helper(node.right, response, h+1);
}

function levelOrder(root: TreeNode | null): number[][] {
    const response: number[][] = [];
    helper(root, response, 0);
    return response;
};
