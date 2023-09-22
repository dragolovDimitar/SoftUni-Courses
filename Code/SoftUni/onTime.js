function onTime (input){
    let hourExam = Number(input[0]);
    let minetsExam = Number (input[1]);
    let hourCome = Number(input[2]);
    let minetsCome = Number(input[3]);

    let examTime = hourExam * 60 + minetsExam;
    let comeTime = hourCome * 60 + minetsCome;

    let status = "";

    switch (true){
        case (comeTime > examTime):
            status = "Late";
            break;
        case (comeTime === examTime || examTime - comeTime <= 30):
            status = "On time";
            break;
        default:
            status = "Early";
            break;
    }

    console.log(status);

    let diff = Math.abs(examTime - comeTime);

    if (comeTime < examTime){
        if(diff < 60){
            console.log(`${diff} minutes before the start`);
        } else {
            let hours = Math.floor(diff / 60);
            let minute = diff % 60;
            console.log(`${hours}:${(minute < 10 ? "0" : "")}${minute} hours before the start`);
        } 
    } else {
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            let hours = Math.floor(diff / 60);
            let minutes = diff %60;
            console.log (`${hours} : ${(minutes < 10 ? "0" : "")}${minutes} hours after the start`);

        }
    }
}

onTime(["9",

"30",

"9",

"50"])