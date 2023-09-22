function moutain (input) {
    let playrs = Number (input[0]);
    let mysala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (index = 1; index < input.length; index++){
        let team = Number (input[index]);

        if (team <= 5){
            mysala += team;
        } else if (team <= 12){
            monblan += team;
        } else if (team <= 25){
            kilimandjaro += team;
        } else if (team <= 40){
            k2 += team;
        } else {
            everest += team;
        }
    }

    let total = mysala + monblan + kilimandjaro + k2 + everest;

    console.log (`${(mysala / total * 100).toFixed(2)}%`);
    console.log (`${(monblan / total * 100).toFixed(2)}%`);
    console.log (`${(kilimandjaro / total * 100).toFixed(2)}%`);
    console.log (`${(k2 / total * 100).toFixed(2)}%`);
    console.log (`${(everest / total * 100).toFixed(2)}%`);
  

}

moutain(["10",

"10",

"5",

"1",

"100",

"12","26", "17", "37", "40", "78"])