function reverseWords(s: string): string {
    let array = [];
    let word = "";
    let i = 0;

    while (i < s.length) {
        if (s[i] != " ") {
            word += s[i];
            i++;
        } else {
            if (word !== "") {      // push only valid words
                array.push(word);
                word = "";
            }

            while (i < s.length && s[i] == " ") {
                i++;
            }
        }
    }
    if (word !== "") {
        array.push(word);
    }

    word = "";

    for (let i = array.length - 1; i >= 0; i--) {
        if (word === "") {
            word = array[i];
        } else {
            word += " " + array[i];
        }
    }

    return word;
}