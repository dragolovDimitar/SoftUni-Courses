function row (arr) {
    
    for (let town of arr){
        let tokens = town.split(" | ");
        let city = tokens.shift();
        let latitude = Number(tokens.shift());
        let longitude = Number(tokens.shift());

        latitude = latitude.toFixed(2);
        longitude = longitude.toFixed(2);

        let townObj = {town: city, latitude: latitude, longitude: longitude};
        console.log(townObj);
       
    }
}
row(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])