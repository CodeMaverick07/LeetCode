function reverseWords(s: string): string {
    let array = []
    let word = ""
    let i = 0
    while (i < s.length){
        if (s[i]!= " "){
            word = word + s[i]
            i++
        } else {
            while (s[i]==" "){
                i++
            }
            if (word != ""){
            array.push(word)
            word = ""
            }
        
        }
    
    }
    console.log(array)
    for (let i = array.length -1; i >= 0; i--){
    if (word == ""){
        word = array[i]
    } else {
        word = word + " " +array[i]
    }
    }
    return word
};