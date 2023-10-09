function charInRange (char1, char2){
    let code1 = char1.charCodeAt();
    let code2 = char2.charCodeAt();

    let smallCode = Math.min(code1,code2);
    let bigCode = Math.max(code1,code2);

    codeToStr(smallCode, bigCode)
    
    
    function codeToStr(smallCode, bigCode){
        let arr = [];

        for (let i = smallCode + 1; i < bigCode; i++){
        let currCode = String.fromCharCode(i)
        arr.push(currCode);
     }

        console.log(arr.join(' '))
    }

}

charInRange('C', '#')