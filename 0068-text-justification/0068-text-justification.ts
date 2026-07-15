function fullJustify(words: string[], maxWidth: number): string[] {
    let ans = []
    let currLine = []
    let currLen = 0
    let i = 0
    while (i < words.length){
        if (currLen + words[i].length + currLine.length > maxWidth){
            let spaces = maxWidth - currLen
            let line = currLine[0]
             if (currLine.length == 1){
                line = line + " ".repeat(spaces)
                ans.push(line)
                currLen = 0
                currLine = []
                continue
            } else {
                let gaps = currLine.length - 1
                let base = Math.floor(spaces / gaps)
                let extra = spaces % gaps
                    for (let j = 1; j < currLine.length; j++){
                      if (extra != 0){
                        let space = base + 1
                        extra = extra -1
                        line = line + " ".repeat(space) + currLine[j]
                      } else {
                         line = line + " ".repeat(base) + currLine[j]
                      }
                    }
                    ans.push(line)
                    currLen = 0
                    currLine = []
                    continue;
            }
        }  else {
            currLen = currLen + words[i].length
            currLine.push(words[i])
            i++  
        }
           
    }
    if (currLine.length > 1){
        let line = currLine[0]
        let lastSpaces = maxWidth - (currLen + (currLine.length - 1))
        for (let i = 1; i < currLine.length; i++){
            if (i == currLine.length - 1){
                line = line +  " " + currLine[i] + " ".repeat(lastSpaces)
            } else {
                line = line + " " + currLine[i]
            }
        }
        ans.push(line)
    } else if (currLine.length == 1){
        let spaces = maxWidth - currLen 
        let line = currLine[0] + " ".repeat(spaces)
        ans.push(line)
    }
    return ans
};