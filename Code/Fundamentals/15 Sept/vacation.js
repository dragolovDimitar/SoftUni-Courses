function vacation (groupSize, type, day){
    let price = 0;

    switch(day) {
        case "Friday" :
            if (type == "Students"){
                price = 8.45;
            } else if (type == "Business"){
                price = 10.90;
            } else if (type == "Regular") {
                price = 15;
            }
            break;
        case "Saturday" :
            if (type == "Students"){
                price = 9.80;
            } else if (type == "Business"){
                price = 15.60;
            } else if (type == "Regular") {
                price = 20;
            }
            break;
        case "Sunday" :
            if (type == "Students"){
                price = 10.46;
            } else if (type == "Business"){
                price = 16;
            } else if (type == "Regular") {
                price = 22.50;
            }
            break;
    }

    let total = price * groupSize;

    if (type == "Students" && groupSize >= 30){
        total *= 0.85;
    } else if (type == "Business" && groupSize >= 100){
        let dis = price * 10;
        total -= dis 
    } else if (type == "Regular" && (groupSize >= 10 && groupSize <= 20)){
        total *= 0.95
    }

    console.log (`Total price: ${total.toFixed(2)}`)
}

vacation(30,"Students","Saturday")