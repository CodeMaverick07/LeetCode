/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxProduct(root *TreeNode) int {
    total :=  totalSum(root)
    maxProduct := 0
    var dfs func(*TreeNode) int
    dfs = func (node *TreeNode) int {
        if node == nil {
            return 0
        }
        left := dfs(node.Left)
        right := dfs(node.Right)
        subSum := node.Val + left +right
        product := subSum * (total - subSum)
        if product > maxProduct {
            maxProduct = product
        }
        return subSum
    }
    dfs(root)
    return  maxProduct % 1000000007
}

func totalSum(root *TreeNode) int {
if root == nil{
return 0
} 
 return root.Val + totalSum(root.Left)+totalSum(root.Right)
}