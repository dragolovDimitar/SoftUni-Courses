function maxNum (input) {
    let index = 0;
    let command = input[index];
    index++;
    let mNum = Number.MAX_SAFE_INTEGER;

    while(command !== "Stop"){
        let num = Number(command);
        if(mNum > num){
            mNum = num;
        } 
        command = input[index];
        index++;
        
    }
    console.log(mNum)
}

maxNum(["45", "-20", "7", "99", "Stop"])