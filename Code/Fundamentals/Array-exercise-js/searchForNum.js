function search(integers, threeNum) {
    let takeNums = threeNum[0];
    let deleteNums = threeNum[1];
    let theNum = threeNum[2];
    let count = 0;

    let takes = integers.slice(0,takeNums);
    takes.splice(0, deleteNums);
    
    for (let num of takes){
        if (num == theNum) {
            count++
        }
    }

    console.log(`Number ${theNum} occurs ${count} times.`);
    
}
search([5, 2, 3, 4, 3, 1, 6],

    [5, 2, 3])