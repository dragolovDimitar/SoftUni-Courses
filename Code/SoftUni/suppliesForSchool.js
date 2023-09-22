function schoolSupplies(input){
    let pen = Number (input[0]);
    let mark = Number (input[1]);
    let proper = Number (input[2]);
    let discount = Number (input[3]);

    let penPrice = pen * 5.80;
    let markPrice = mark * 7.20;
    let properPrice = proper * 1.20;
    let totalPrice = penPrice + markPrice + properPrice;
    let withDiscount = totalPrice - (totalPrice*(discount / 100));

    console.log(withDiscount);
}

schoolSupplies(["2", "3", "4", "25"])