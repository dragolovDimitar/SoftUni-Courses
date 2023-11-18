function replace (chars) {
    let noRepeat = '';
    let prevChar = '';

    for (let char of chars){
        if (char != prevChar){
            noRepeat += char;
            prevChar = char;
        }
    }
    console.log(noRepeat);
}

replace('aaaaabbbbbcdddeeeedssaa')