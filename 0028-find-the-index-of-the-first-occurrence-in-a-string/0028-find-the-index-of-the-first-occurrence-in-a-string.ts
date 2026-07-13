function strStr(haystack: string, needle: string): number {
    let hLen = haystack.length;
    let nLen = needle.length;
    let idx = -1;
    for (let i = 0; i < hLen; i++){
        if (haystack[i]===needle[0]){
            let match = 0;
            let j = i
            let k = 0
            while (k < nLen){
                if (needle[k]==haystack[j]){
                    j++
                    k++
                    match++
                } else {
                    break;
                }
            }
            if (match == nLen){
                return i
            }
        }
    }
    return -1
};