function numOfSubarrays(arr: number[]): number {
    let oddCount = 0;
    let evenCount = 1; // Consider empty subarray as even sum
    let sum = 0;
    let result = 0;
    let MOD = 1_000_000_007; // Large prime to prevent overflow

    for (let num of arr) {
        sum += num;
        
        if (sum % 2 === 0) {
            result = (result + oddCount) % MOD;
            evenCount++;  
        } else {
            result = (result + evenCount) % MOD;
            oddCount++;
        }
    }

    return result;
}

