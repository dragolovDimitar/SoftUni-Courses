function multiplication (number){
    let product = 0;

    for (let i = 1; i <= 10; i++){
        product = number * i;
        console.log(`${number} X ${i} = ${product}`)
    }
}

multiplication (5)