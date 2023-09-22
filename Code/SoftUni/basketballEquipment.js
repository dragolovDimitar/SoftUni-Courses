function staff(input){
    let oneYearSubscription = Number(input[0]);

    let shous = oneYearSubscription * 0.60;
    let suit = shous * 0.80;
    let ball = suit / 4;
    let accsesoars = ball / 5;

    let total = oneYearSubscription + shous + suit + ball + accsesoars;
    console.log(total);
}

staff(["550"])