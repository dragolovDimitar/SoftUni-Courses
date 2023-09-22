function assessment (input) {
    let actorName = input[0];
    let academiPoints = Number (input[1]);
    
    for(let i = 3; i < input.length; i++) {
        
        if (i % 2 !== 0) {
            let point = i + 1;
            let total = input[i].length * Number (input[point]) / 2;
            academiPoints += total;
        }
        if (academiPoints > 1250.5) {
            break;
        }
    }

    if (academiPoints > 1250.5){
        console.log (`Congratulations, ${actorName} got a nominee for leading role with ${academiPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academiPoints).toFixed(1)} more!`);
    }

}

assessment(["Zahari Baharov",
"205",
"4",
"Johnny Depp","45","Will Smith",
"29","Jet Lee","10","Matthew Mcconaughey",
"39"])