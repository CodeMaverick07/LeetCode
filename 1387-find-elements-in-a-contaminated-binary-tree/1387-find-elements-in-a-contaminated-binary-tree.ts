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

class FindElements {
    root: TreeNode|null;
    values: Set<number>
    constructor(root: TreeNode | null) {
      this.root = root 
      this.values = new Set<number>()
      if (root){
        const queue:[TreeNode|null,number][] = [[root,0]]
        while (queue.length > 0) {
            const [node,value] = queue.shift()
            node.val = value
            this.values.add(value)
            if (node.left){
                queue.push([node.left,value*2+1])
            }
                       if (node.right){
                queue.push([node.right, value * 2 + 2])  
            }

        }
      } 
    }

    find(target: number): boolean {
        return this.values.has(target)
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */