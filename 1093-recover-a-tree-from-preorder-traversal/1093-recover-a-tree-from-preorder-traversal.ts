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

function recoverFromPreorder(traversal: string): TreeNode | null {
    let index = 0;
    const stack: [TreeNode, number][] = []; 
    while(index < traversal.length){
        let depth = 0
        while(traversal[index]=="-"){
            depth++
            index++
        } 
        let value = 0
        while (index < traversal.length&&traversal[index]>="0"&&traversal[index]<="9"){
            value = value * 10 + traversal[index].charCodeAt(0) - '0'.charCodeAt(0)
            index++
        }
          const node = new TreeNode(value);
              while (stack.length > depth) {
            stack.pop();
        }
        
        if (stack.length > 0) {
            const [parent] = stack[stack.length - 1];
            if (!parent.left) {
                parent.left = node;
            } else {
                parent.right = node;
            }
        }
        stack.push([node, depth]);
        
    }
    return stack[0][0];
};