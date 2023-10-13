function distinct (arr) {
    let unNums = [];
    for (let num of arr){
        if (!(unNums.includes(num))){
            unNums.push(num);
        }
      
    }

    console.log(unNums.join(' '));
}

distinct([7, 8, 9, 7, 2, 3,4, 1, 2]) 