function train (arr){
    let wagons = arr[0].split(' ').map(Number);
    let maxCapacity = Number(arr[1]);

    for (i = 2; i < arr.length; i++){
        let commands = arr[i].split(' ');
        let passengers;

        if (commands[0] == 'Add'){
            passengers = Number(commands[1]);
            wagons.push(passengers);
        } else {
            passengers = Number(commands[0]);
            for (j = 0; j < wagons.length; j++){
                if (wagons[j] + passengers <= maxCapacity){
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

function train (arr){
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());
    let passengers = 0; 

    arr.forEach(command => {
        if (command.includes('Add')){
            passengers = Number(command.split(' ')[1]);
            wagons.push(passengers);
        } else {
            passengers = Number(command);
            for(let i = 0; i < wagons.length; i++){
                if (wagons[i] + passengers <= maxCapacity){
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    });
    
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])