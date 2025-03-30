function partitionLabels(s: string): number[] {
    let lastIndex = new Map();
    let ans = [];
    

    for (let i = 0; i < s.length; i++) {
        lastIndex.set(s[i], i);
    }
    
    let start = 0, end = 0;
    

    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex.get(s[i])); 
        
        if (i === end) { 
            ans.push(end - start + 1); 
            start = i + 1; 
        }
    }
    
    return ans;
}