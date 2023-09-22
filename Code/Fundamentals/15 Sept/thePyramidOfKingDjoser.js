function king (base, increment){
    let stolne = 0;
    let marbel = 0;
    let lazuli = 0;
    let gold = 0;
    let block = 0;

    let height = 0;
    let step = 0;

    for (let i = base; i > 0; i -= 2){
        let totalBase = i * i;
        step++;

        if (i - 2 <= 0){
            gold += totalBase * increment;
        } else {
            let stoneBlock = i - 2;
            block = stoneBlock * stoneBlock;
            stolne += block * increment;

            if (step % 5 == 0) {
                lazuli += (totalBase - block) * increment;
    
            } else {
                marbel += (totalBase - block) * increment;
            }
        }
        
    }
    
    height = step * increment;

    console.log(`Stone required: ${Math.ceil(stolne)}`);
    console.log(`Marble required: ${Math.ceil(marbel)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

king(23,0.5)