function race (arr) {
    let distance = {};
    let names = arr.shift().split(', ');
    let command = arr.shift();

    names.forEach(name => distance[name] = 0);

    let letter = /[A-Za-z]/g;
    let digits = /\d/g;

    while(command != 'end of race') {
        let name = command.match(letter).join('');
        let digitsMatches = command.match(digits);
        let sum = digitsMatches.map(Number).reduce((acc, val) => acc + val);

        if (name in distance) {
            distance[name] += sum;
        }
        command = arr.shift();
    }

    let sortResults = Object.entries(distance).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortResults[0][0]}`);
    console.log(`2nd place: ${sortResults[1][0]}`);
    console.log(`3rd place: ${sortResults[2][0]}`);

}

race(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])