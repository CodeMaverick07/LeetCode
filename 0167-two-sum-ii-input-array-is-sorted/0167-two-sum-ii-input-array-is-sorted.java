class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int i = 0;
        int j = numbers.length - 1;

        while (i < j) {
            int sum = numbers[i] + numbers[j];
            if (sum == target) {
                return new int[]{i + 1, j + 1}; // 1-based indexing
            } else if (sum < target) {
                i++; // increase the smaller number
            } else {
                j--; // decrease the larger number
            }
        }
        return new int[]{-1, -1}; // should never reach here based on problem guarantees
    }
}