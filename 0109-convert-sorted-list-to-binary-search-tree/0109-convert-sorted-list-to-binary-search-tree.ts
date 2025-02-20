/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (head==null) return null

    let arr = []
    let curr = head
    while (curr != null) {
        arr.push(curr.val)
        curr = curr.next
    }
   return helper(arr,0,arr.length-1)    
};

function helper(arr,low,high){
     if (low > high) return null;
    const mid = Math.floor((low + high) / 2);
    const root = new TreeNode(arr[mid]);
    root.left = helper(arr, low, mid - 1);
    root.right = helper(arr, mid + 1, high);
    return root;
}