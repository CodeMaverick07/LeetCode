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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root == null) return root
    if (root.val == key) {
        if (root.left == null && root.right == null) return null;
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;
        
        // Two children case
        let curr = root;
        let pred = curr.right;
        while (pred.left != null) pred = pred.left;
        root.val = pred.val;
        root.right = deleteNode(root.right, pred.val);
        return root;
    }
    if (root.val > key ) {
        let l = root.left
        if (l == null) return root
       if (l.val == key) {
        if (l.left == null && l.right == null) {
            root.left = null 
        } else if ( l.left == null || l.right == null) {
            if (l.right != null ) root.left = root.left.right
            if (l.left != null ) root.left = root.left.left
        } else {
            let curr = l
            let pred = curr.left
           while (pred.right !=null) pred = pred.right
           root.left = deleteNode(root,pred.val)
           pred.left = curr.left
           pred.right = curr.right
           root.left = pred
        }
       }
      root.left = deleteNode(root.left,key)
    } else {
        let r = root.right
        if (r == null) return root
        if (r.val == key) {
        if (r.left == null && r.right == null) {
            root.right = null 
        } else if ( r.left == null || r.right == null) {
            if (r.right != null ) root.right = root.right.right
            if (r.left != null ) root.right = root.right.left
        } else {
            let curr = r
            let pred = curr.right
           while (pred.left !=null) pred = pred.left
           root.right = deleteNode(root,pred.val)
           pred.left = curr.left
           pred.right = curr.right
           root.right = pred
        
        }
       }
      root.right = deleteNode(root.right,key)
    }
    return root
};