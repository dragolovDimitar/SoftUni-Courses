function storage (currStock, ordered) {
    let productList = {};
    

    for (let i = 0; i < currStock.length; i += 2){
        let productType = currStock[i];
        let count = Number(currStock[i + 1]);

        productList[productType] = count;
    }

    for (let i = 0; i < ordered.length; i += 2){
        let product = ordered[i];
        let count = Number(ordered[i + 1]);

        if (product in productList){
            productList[product] += count;
        } else {
            productList[product] = count;
        }
    }

    let result = Object.entries(productList);

    for (let i of result){

        console.log(i.join(' -> '));
    }

    
    
}
storage([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])