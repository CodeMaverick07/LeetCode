function minZeroArray(nums: number[], queries: number[][]): number {
    const n = nums.length
    const m = queries.length

    function isPossible(k: number): boolean {
        const diff = new Array(n + 1).fill(0)
        for (let i = 0; i < k; i++) {
            const [l, r, v] = queries[i]
            diff[l] += v
            if (r + 1 < n) {
                diff[r + 1] -= v
            }
        }
        let current = 0
        for (let i = 0; i < n; i++) {
            current += diff[i]
            if (current < nums[i]) {
                return false
            }
        }
        return true
    }

    if (nums.every(num => num === 0)) return 0

    let left = 1, right = m + 1
    let answer = -1
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (isPossible(mid)) {
            answer = mid
            right = mid
        } else {
            left = mid + 1
        }
    }

    return answer
}