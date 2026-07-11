function longestCommonPrefix(strs: string[]): string {
    let currLcp = strs[0]
    let newLcp = ""

    for (let i = 1; i < strs.length; i++){
        if (currLcp== ""){
            return currLcp
        }
        for (let j = 0; j < strs[i].length; j++){
            if (currLcp[j]===strs[i][j]){
                newLcp = newLcp + currLcp[j]
            } else {
                break;
            }
        }
        currLcp = newLcp
        newLcp = ""
    }
    return currLcp
};