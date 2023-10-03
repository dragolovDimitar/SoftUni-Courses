function maxSequence(arr) {
    
    let longestSequence = [];
    
    for (let i = 0; i < arr.length; i++){
        let currNum = arr[i];
        let currSequence = [currNum]

        for (let j = i + 1; i < arr.length; j++){
            let rigthNum = arr[j];

            if (rigthNum == currNum){
                currSequence.push(rigthNum);
            } else {
                break;
            }
        }

        if (currSequence.length > longestSequence.length){
            longestSequence = currSequence.slice();
        }
    }
 
 
    
    console.log(longestSequence.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);