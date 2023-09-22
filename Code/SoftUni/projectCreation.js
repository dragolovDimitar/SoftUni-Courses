function project(input){
    
    let name = input[0];
    let count = input[1];
    let hour = count * 3;

    console.log(`The architect ${name} will need ${hour} hours to complete ${count} project/s.`);
}

project(["Bobi", "6"]);