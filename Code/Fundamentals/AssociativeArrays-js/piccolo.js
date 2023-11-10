function piccolo (carNumber){
    let garage = new Set();
    
    carNumber.forEach(info => {
        let [command, number] = info.split(', ');
        
        if (command == 'IN'){
            garage.add(number);
            
        } else if (command == 'OUT'){
            garage.delete(number);
        }
    })

    if (garage.size == 0){
        console.log('Parking Lot is Empty');
    } else {
        let sortedGarage = Array.from(garage).sort();
        console.log(sortedGarage.join('\n'));
    }
}
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])