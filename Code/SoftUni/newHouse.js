function houseGarden (input){
    let flours = input[0];
    let countFlours = Number (input[1]);
    let buged = Number (input[2]);
    let price = 0;

    if (flours === "Roses"){
        if (countFlours > 80){
            price = (countFlours * 5) * 0.90;
        } else {
            price = countFlours * 5;
        }
    } else if (flours === "Dahlias"){
        if(countFlours > 90){
            price = (countFlours * 3.80) * 0.85;
        }else {
            price = countFlours * 3.80;
        }
    } else if (flours === "Tulips"){
        if (countFlours > 80){
            price = (countFlours * 2.80) * 0.85;
        }else {
            price = countFlours * 2.80;
        }
    } else if (flours === "Narcissus"){
        if (countFlours < 120){
            price = (countFlours * 3.00) * 1.15;
        }else {
            price = countFlours * 3.00;
        }
    } else if (flours === "Gladiolus"){
        if (countFlours < 80){
            price = (countFlours * 2.50) * 1.20;
        }else {
            price = countFlours * 2.50;
        }
    }

    if (buged >= price){
        console.log(`Hey, you have a great garden with ${countFlours} ${flours} and ${(buged - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - buged).toFixed(2)} leva more.`);
    }
}

houseGarden(["Gladiolus",

"64",

"160"])