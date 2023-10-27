function convertToJSON (name, lastName, hairColor) {
    let personIn = {
        name,
        lastName,
        hairColor
    }
    console.log(JSON.stringify(personIn));
}

convertToJSON('George', 'Jones',

'Brown')