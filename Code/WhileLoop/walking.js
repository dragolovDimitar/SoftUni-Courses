function walking(input) {
    let index = 0;
    let command = input[index];
    let goalsStep = 10000;
    let totalStep = 0;

    while (command !== "Going home"){
        let step = Number(command);
        totalStep += step;

        if(totalStep >= goalsStep){
            console.log(`Goal reached! Good job!`);
            console.log(`${totalStep - goalsStep} steps over the goal!`);
            break;
        }
        index++;
        command = input[index];
    }

    if(command === "Going home"){
        let stepsToHome = Number(input[index + 1]);
        totalStep += stepsToHome;

        if(totalStep >= goalsStep){
            console.log(`Goal reached! Good job!`);
            console.log(`${totalStep - goalsStep} steps over the goal!`);
        } else {
            console.log(`${goalsStep - totalStep} more steps to reach goal.`);
        }
    }
}

walking(["1500", "300", "2500", "3000", "Going home", "200"])