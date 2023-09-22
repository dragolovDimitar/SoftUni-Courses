function excursionSale (input){
    let seaRest = Number (input[0]);
    let mountainRest = Number (input[1]);
    let index = 2
    let command = input[index];
    let profit = 0;

    while(command !== 'Stop'){
        let restType = input[index];
        if (seaRest === 0 && mountainRest === 0){
            console.log (`Good job! Everything is sold.`)
            break;
        }
        
        if (restType === 'sea' && seaRest !== 0){
            profit += 680
            seaRest-=1;
        } else if (restType === 'mountain' && mountainRest !== 0){
            profit += 499
            mountainRest-=1;
        }


        index++
        command = input[index];
    }

    console.log (`Profit: ${profit} leva.`)

}
excursionSale(["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])