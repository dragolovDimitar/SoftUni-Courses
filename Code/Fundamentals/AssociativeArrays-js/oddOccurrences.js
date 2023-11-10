function occurrences (arr) {
    let items = arr.split(' ');
    let allItems = {};
    let oddIt = [];

    for (let symbol of items){
       let lower = symbol.toLowerCase();

        if (lower in allItems){
            allItems[lower] += 1;
        } else {
            allItems[lower] = 1;
        }
    }

    let entries = Object.entries(allItems);

    entries.forEach(arr => {
        if (arr[1] % 2 == 1){
            oddIt.push(arr[0]);
        }
    })

    console.log(oddIt.join(' '));
}

occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')