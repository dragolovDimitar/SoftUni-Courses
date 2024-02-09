function addRemove (arr) {
    let indexNum = [];

    for (let i = 0; i < arr.length; i++){

        if (arr[i] == 'add'){
            indexNum.push(i+1);
        } else if (arr[i] == 'remove'){
            indexNum.pop();
        }
    }

    if (indexNum.length == 0){
        console.log('Empty');
    } else {
        console.log(indexNum.join('\n'));
    }
}
addRemove(['add', 'add', 'remove', 'add', 'add']);
