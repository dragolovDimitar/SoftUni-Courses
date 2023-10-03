function topInt (numArr) {
    let tops = [];
    
    for (let i = 0; i < numArr.length; i++ ){
        let currentNum = numArr[i];
        let proof = true;

        for (let j = i + 1; j < numArr.length; j++){
            let rightNum = numArr[j];

            if (rightNum >= currentNum) {
                proof = false;
                break;
            }
        }

        if (proof) {
            tops.push(currentNum);
        }

    }

    console.log(tops.join(' '));
}

topInt([1, 4, 3, 2])