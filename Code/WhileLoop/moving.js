function moving(input) {
    let wigth = Number (input[0]);
    let length = Number (input[1]);
    let hight = Number (input[2]);
    let index = 3;
    let box = input[index];
    let totalSpace = wigth * length * hight;
    let allBoxes = 0;

    while (box !== "Done"){
        let boX = Number(box);
        allBoxes += boX

        if (allBoxes > totalSpace){
            console.log(`No more free space! You need ${Math.abs(totalSpace - allBoxes)} Cubic meters more.`);
            break;
        }

        index++;
        box = input[index];
    }

    if (totalSpace > allBoxes) {
        console.log(`${totalSpace - allBoxes} Cubic meters left.`)
    }
}

moving(["10","1","2","4","6","Done"])