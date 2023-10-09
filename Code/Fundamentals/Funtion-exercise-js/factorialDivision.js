function factorial (num,div) {
    let sum = 0;
    let nums = num

    for (let i = num - 1; i > 0; i--){
        nums *= i
    }
    for (let i = div - 1; i > 0; i--){
        div *= i
    }

    sum = nums / div;
    console.log(sum.toFixed(2));
}

factorial(1, 2)