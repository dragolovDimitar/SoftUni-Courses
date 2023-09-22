function travel (input){
    let budget = Number (input[0]);
    let season = input[1];

    let sleepPlace;
    let place;
    let spendMoney;

    if (budget <= 100){
        place = "Bulgaria";
        if(season === "summer"){
            spendMoney = budget * 0.30;
            sleepPlace = "Camp"
        } else if (season === "winter"){
            spendMoney = budget * 0.70;
            sleepPlace = "Hotel"
        }
    } else if (budget <= 1000){
        place = "Balkans";
        if (season === "summer"){
            spendMoney = budget * 0.40;
            sleepPlace = "Camp";
        } else if (season === "winter"){
            spendMoney = budget * 0.80;
            sleepPlace = "Hotel";
        }
    } else if (budget > 1000){
        place = "Europe";
        if (season === "summer" || season === "winter"){
            spendMoney = budget * 0.90;
            sleepPlace = "Hotel"
        }
    }

    console.log(`Somewhere in ${place}`);
    console.log(`${sleepPlace} - ${spendMoney.toFixed(2)}`)
}

travel(["50", "summer"])