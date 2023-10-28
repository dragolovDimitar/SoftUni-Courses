function inventory(arr){
    let heroes = [];

    for (let currInf of arr){
        let performance = currInf.split(' / ');
        let name = performance[0];
        let level = performance[1];
        let items = performance[2].split(', ');
        let myhero = {name: name, level: level, items: items};
        heroes.push(myhero);
    }
    
    heroes.sort((a,b) => a.level - b.level);
    heroes.forEach(i => console.log(`Hero: ${i.name}\nlevel => ${i.level}\nitems => ${i.items.join(', ')}`)
    )
}
inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])