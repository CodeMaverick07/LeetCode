function lengthOfLastWord(s: string): number {
    let length = 0
    let idx = 0
    for (let i = s.length-1; i >= 0; i--){
        if (s[i] !== " "){
            idx = i
            break;
        }
    }
    for (let i = idx; i >= 0; i--){
        if (s[i] == " "){
            break;
        }
        length = length + 1
    }
    return length
};