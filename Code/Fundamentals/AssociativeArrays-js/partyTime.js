function party (guests) {
    let vip = [];
    let normal = [];
    let idOfGuests = guests.shift();

    while(idOfGuests != 'PARTY'){
        let indicator = idOfGuests[0];

        if (isNaN(indicator)){
            normal.push(idOfGuests);
        } else {
            vip.push(idOfGuests);
        }

        idOfGuests = guests.shift();
    }

    let list = vip.concat(normal);

    guests.forEach(guest => {
        if (list.includes(guest)){
            list.splice(list.indexOf(guest), 1);
        }
    })

    console.log(list.length);
    list.forEach(guest => console.log(guest))
}

party(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])