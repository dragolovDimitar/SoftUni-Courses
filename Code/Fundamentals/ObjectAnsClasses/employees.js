function personalNum(names){
    for (let employees of names) {
        let employee = { name: employees, perNumber: employees.length};
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.perNumber}`);
    }

   
}

personalNum([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])