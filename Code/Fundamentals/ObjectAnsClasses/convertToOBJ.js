function convert (sourse) {
    let obj = JSON.parse(sourse);
    let ent = Object.entries(obj);

    for (let [key, valuse] of ent){
        console.log(`${key}: ${valuse}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}')