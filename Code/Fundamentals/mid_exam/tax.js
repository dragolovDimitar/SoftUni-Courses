function calculateTax (arr) {
    let vehicle = arr.shift().split('>>');
    let taxCollected = 0;
    
    for (let car of vehicle){
        let separate = car.split(' ')
        let type = separate.shift();
        let years = Number(separate.shift());
        let km = Number(separate.shift());
        let totalTax = 0;

        if (type == 'family'){
            let count = 0
            
            for (let i = km; i >= 3000; i -= 3000){
                count++
            }
            

            totalTax = count * 12 + (50 - years * 5);
            taxCollected += totalTax;
            console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
        } else if (type == 'heavyDuty'){
            let count = 0
            
            for (let i = km; i >= 9000; i -= 9000){
                count++
            }
            

            totalTax = count * 14 + (80 - years * 8);
            taxCollected += totalTax;
            console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
            
        } else if (type == 'sports'){
            let count = 0
            
            for (let i = km; i >= 2000; i -= 2000){
                count++
            }
            

            totalTax = count * 18 + (100 - years * 9);
            taxCollected += totalTax;
            console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
        } else if (type != 'family' || type != 'heavyDuty' || type != 'sports'){
            console.log('Invalid car type.');
            continue;
        }
    }
    console.log(`The National Revenue Agency will collect ${taxCollected.toFixed(2)} euros in taxes.`);

}

calculateTax([ 'family 5 3000>>pickUp 1 1345>>heavyDuty 7 9000>>sports 5 2000' ])