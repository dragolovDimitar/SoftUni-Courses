function magic (arr, num) {

    for (let i = 0; i < arr.length; i++){
        let currNum = arr[i];
        
        for (let j = i + 1; j < arr.length; j++){
            let jNum = arr[j];

            if (currNum + jNum == num){
                console.log(`${currNum} ${jNum}`)
            }
        }

    }
}

magic ([0,8,8],

    8)