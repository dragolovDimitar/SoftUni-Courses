function cookingMaster (packeg) {
    let buget = packeg.shift();
    let students = packeg.shift();
    let flourPrice = packeg.shift();
    let aEggPrice = packeg.shift();
    let aponPrice = packeg.shift();
    let total = 0;
    let flourCount = 0;

    for (let i = students; i > 0; i--){
        if (i % 5 === 0){
            flourCount++
        }
    }
    
    flourPrice *= students - flourCount;
    aEggPrice *= students * 10;
    aponPrice *= Math.ceil(students* 1.20);

    total = flourPrice + aEggPrice + aponPrice;

    if (total <= buget){
        console.log(`Items purchased for ${total.toFixed(2)}$.`);
    } else {
        console.log(`${(total - buget).toFixed(2)}$ more needed.`); 
    }
    
}

cookingMaster([100,

    25,
    
    4.0,
    
    1.0,
    
    6.0])