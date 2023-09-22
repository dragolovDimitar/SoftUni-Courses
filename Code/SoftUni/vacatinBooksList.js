function summerBooks(input){
    let pages = Number (input[0]);
    let pagePreHour = Number(input[1]);
    let period = Number (input[2]);

    let timeForOneBook = pages / pagePreHour;
    let dailyHours = timeForOneBook / period ;

    console.log(dailyHours);
}

summerBooks(["212", "20", "2"]);