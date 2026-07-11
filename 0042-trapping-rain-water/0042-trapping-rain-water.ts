function trap(height: number[]): number {
    let len = height.length
    let leftMax = new Array(len).fill(0)
    let rightMax = new Array(len).fill(0)

    leftMax[0] = height[0]
    rightMax[len-1] = height[len-1]

    for (let i = 1; i < len; i++){
        leftMax[i] = Math.max(leftMax[i-1],height[i])
        rightMax[len-i-1] = Math.max(rightMax[len-i],height[len-i-1])  
    }
    let total = 0
    for (let i = 0; i < len; i++){
        total = total + Math.min(leftMax[i],rightMax[i]) - height[i]
    }
    return total
};