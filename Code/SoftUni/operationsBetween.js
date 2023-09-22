function operatorBetween (input){
    let N1 = Number (input[0]);
    let N2 = Number (input[1]);
    let operator = input[2];

    switch(operator){
        case "+":
            let sum = N1 + N2;
            if (sum % 2 === 0){
                console.log(`${N1} ${operator} ${N2} = ${sum} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${sum} - odd`); 
            } break;
        case "-":
            let sum1 = N1 - N2;
            if (sum1 % 2 === 0){
                console.log(`${N1} ${operator} ${N2} = ${sum1} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${sum1} - odd`); 
            } break;
        case "*":
            let sum2 = N1 * N2;
            if (sum2 % 2 === 0){
                console.log(`${N1} ${operator} ${N2} = ${sum2} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${sum2} - odd`); 
            }break;
        case "/":
            if (N2 === 0){
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                console.log(`${N1} / ${N2} = ${(N1/N2).toFixed(2)}`);
            } break;
        case "%":
            if (N2 === 0){
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                console.log(`${N1} % ${N2} = ${N1%N2}`);
            } break;

    }
}

operatorBetween (["10",

"12",

"+"])