function reveal (word, text){
    let words = word.split(", ");

    for (let word of words) {
        let len = word.length;
        let starTemplate = "*".repeat(len);
        text = text.replace(starTemplate, word);
    }

    console.log(text);
}
reveal('great',

'softuni is ***** place for learning new programming languages')