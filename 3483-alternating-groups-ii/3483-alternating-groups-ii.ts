function numberOfAlternatingGroups(colors: number[], k: number): number {
    const n = colors.length;
    
    // Edge case: if k is greater than the array length
    if (k > n) return 0;
    
    // Create a circular array for easier handling
    const circular = [...colors, ...colors.slice(0, k - 1)];
    
    let count = 0;
    let validWindow = true;
    
    // Check if the first window is alternating
    for (let i = 0; i < k - 1; i++) {
        if (circular[i] === circular[i + 1]) {
            validWindow = false;
            break;
        }
    }
    if (validWindow) count++;
    
    // Slide the window
    for (let i = 1; i < n; i++) {
        // Remove effect of the leaving pair (i-1, i)
        const leavingPair = circular[i - 1] === circular[i];
        
        // Add effect of the entering pair (i+k-2, i+k-1)
        const enteringPair = circular[i + k - 2] === circular[i + k - 1];
        
        // Update validWindow status based on the changes
        if (leavingPair && !enteringPair) {
            // Window might become valid
            validWindow = true;
            // Recheck the entire window
            for (let j = i; j < i + k - 1; j++) {
                if (circular[j] === circular[j + 1]) {
                    validWindow = false;
                    break;
                }
            }
        } else if (!leavingPair && enteringPair) {
            // Window becomes invalid
            validWindow = false;
        }
        // If both pairs are valid or both invalid, window status doesn't change
        
        if (validWindow) count++;
    }
    
    return count;
}