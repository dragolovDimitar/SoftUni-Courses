function odd (num){
    let sum = 0;
    let n = 1;

    for (let i = 0; i < num; i++){
        sum += n;
        console.log(n)
        n += 2;
    }

    console.log(`Sum: ${sum}`)

    
}

odd (5)