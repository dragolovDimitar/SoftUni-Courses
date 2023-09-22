function deposit(input){
    let cash = Number (input[0]);
    let month = Number (input[1]);
    let APY = Number (input[2]);
    let all = cash * (APY/100);
    let one = all /12;
    let total = cash + (month * one);
    console.log(total);
}

deposit(["200", "3", "5.7"])