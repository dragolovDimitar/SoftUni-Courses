function skiTrip (input){
    let days = Number(input[0]);
    let room = input[1];
    let assessment = input[2];

    let night = days - 1;

    switch (room){
        case "room for one person": night *= 18.00;break;
        case "apartment": night *= 25.00;break;
        case "president apartment": night *= 35.00;break;
    }

    if (room === "apartment"){
        if (days < 10){
            night *= 0.70;
        } else if (days > 10 && days < 15){
            night *= 0.65;
        } else {
            night *= 0.50;
        }
    } else if (room === "president apartment"){
        if (days < 10){
            night *= 0.90;
        } else if (days > 10 && days < 15){
            night *= 0.85;
        } else {
            night *= 0.80;
        }
    }

    if (assessment === "positive"){
        console.log((night * 1.25).toFixed(2));
    } else if (assessment === "negative"){
        console.log((night * 0.90).toFixed(2));
    }
}

skiTrip(["14",

"apartment",

"positive"])