function rota (array, rotations){
    for ( let i = 1; i <= rotations; i++){
        let els = array.shift();
        array.push(els)
        
        
    }
    console.log(array.join(' '));
}

rota ([51, 47, 32, 61, 21], 2)