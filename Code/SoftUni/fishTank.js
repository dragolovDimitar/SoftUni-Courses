function water(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let saveSpace = Number(input[3]);

    let allTank = length * width * high;
    let liters = allTank / 1000;
    let space = saveSpace / 100;
    console.log(liters*(1-space));
}

water(["85 ","75 ","47 ","17 "])