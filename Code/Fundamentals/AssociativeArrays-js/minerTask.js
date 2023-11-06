function minerTask(arr){
    let resource = {};

    for (let i = 0; i < arr.length; i += 2){
        let commodity = arr[i];
        let quantity = Number(arr[i+1]);

        if (commodity in resource){
            resource[commodity] += quantity;
        } else {
            resource[commodity] = quantity
        }
    }

    let entris = Object.entries(resource);
    entris.forEach(resources => 
        console.log(resources.join(' -> '))
        )
}
minerTask([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])