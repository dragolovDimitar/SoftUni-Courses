function divisible (input) {
    let n = Number (input[0]);
    let m = Number (input[1]);

    let sum = 0;
    let buff = "";
    
    for (let i = n; i <= m; i++) {
        if(i %  9 === 0){
            buff += i + "\n";
            sum += i;
        }
    }

    console.log (`The sum: ${sum}`);
    console.log(buff)
}

divisible(["100", "200"])