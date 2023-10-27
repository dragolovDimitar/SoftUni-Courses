function addresInfo (info) {
    let entries = Object.entries(info);
    for (let [keys, value] of entries){
        console.log(`${keys} -> ${value}`);
    }
}

addresInfo({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })