function smallestNumber(pattern: string): string {
    let result: string[] = [];
    let stack: number[] = [];

       for (let i = 0; i < pattern.length+1; i++) {
        stack.push(i + 1); 
    if (i === pattern.length || pattern[i] === 'I') {
       while (stack.length > 0) {
                result.push(stack.pop()!.toString());
            }
     }
   }

    return result.join('');
};