function christmasPreparation (input){
    let paper = Number (input[0]);
    let row = Number (input[1]);
    let fix = Number (input[2]);
    let discount = Number (input[3]);
    let totalPrice = 0;

    paper *= 5.80;
    row *= 7.20;
    fix *= 1.20;
    discount = discount / 100;
    totalPrice = paper + row + fix;
    discount = totalPrice * discount
    totalPrice -= discount
    
    console.log(totalPrice.toFixed(3))
}
christmasPreparation(['2','3','2.5','25'])