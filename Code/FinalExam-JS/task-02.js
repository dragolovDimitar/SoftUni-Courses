function messageTranslator (arr) {
    let integer = Number(arr.shift());
    let command = arr.shift();
    let pattern = /^!([A-Z][a-z]{3,})!:\[([^\]]{8,})]$/;
    let obj = {};
    
    for (let i = 1; i <= integer; i++){

        if (command.match(pattern)){
            let match = command.match(pattern);
            let comm = match[1];
            let translatingText = match[2]
            let split = translatingText.split('');
            let charCode = []

            for (let  letter of split){
                charCode.push(letter.charCodeAt()) 
            }
            obj = {comm: comm, numbers: charCode};
            console.log(`${obj.comm}: ${obj.numbers.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
        command = arr.shift();  
    }
}

messageTranslator(["3",

"!play!:[TheNewSong]",

"!Ride!:[Bike]",

"!Watch!:[LordofTheRings]"])