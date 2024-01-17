function fruit (fruits, weight, pricePerKg) {
    weightInKg = weight / 1000;
    totalPrice = pricePerKg * weightInKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruits}.`);
}
fruit('orange', 2500, 1.80)