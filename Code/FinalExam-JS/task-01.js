function stringGame (arr) {
    let text = arr.shift();
    let command = arr.shift();
    

    while (command != 'Done'){
        
        if (command.includes('Change')){
            command = command.split(' ')
            let char = command[1];
            let replacemnt = command[2];
            
            text = text.split('');

           for (let i = 0; i < text.length; i++){

                if (text[i] === char) {
                text[i] = replacemnt
                }
           }
           text = text.join('')
            console.log(text);

        } else if (command.includes('Includes')){

            command = command.split(' ')
            let string = command[1];

            if (text.includes(string)){
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (command.includes('End')){
            let word = command[1];

            if (text.endsWith(word)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (command == 'Uppercase'){

            text = text.toUpperCase();
            console.log(text);

        } else if (command.includes('FindIndex')){

            command = command.split(' ');
            let char = command[1];

            let index = text.indexOf(char)
            if (index !== -1) {
                console.log(index);
            }

        } else if (command.includes('Cut')){

            command = command.split(' ');
            let startIndex = Number(command[1]);
            let count = Number(command[2]);

            if (count > text.length) {
                continue;
            }
            text = text.split('');
            text = text.splice(startIndex, count);
            console.log(text.join(''));
        }
        command = arr.shift();
    }
}

stringGame(["//Th1s 1s my str1ng!//", "Change 1 i", "Includes string", "End my", "Uppercase", "FindIndex I", "Cut 5 5", "Done"]);
