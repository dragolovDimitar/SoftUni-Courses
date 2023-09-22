function courierExpress(input) {
    let packageKilos = Number(input[0]);
    let command = input[1];
    let kilometra = Number(input[2]);
    let overRade = 0;
    let kilometraPrice = 0;

    if (packageKilos < 1) {
        kilometraPrice = kilometra * 0.03
        if (command === 'express') {
            overRade = 0.03 * 0.80

        }
    } else if (packageKilos < 10) {
        kilometraPrice = kilometra * 0.05;
        if (command === 'express') {
            overRade = 0.05 * 0.40

        }
    } else if (packageKilos < 40) {
        kilometraPrice = kilometra * 0.10;
        if (command === 'express') {
            overRade = 0.10 * 0.05

        }
    } else if (packageKilos < 90) {
        kilometraPrice = kilometra * 0.15;
        if (command === 'express') {
            overRade = 0.15 * 0.02

        }
    } else if (packageKilos < 150) {
        kilometraPrice = kilometra * 0.20;
        if (command === 'express') {
            overRade = 0.20 * 0.01

        }
    }
    overRade *= packageKilos;
    let total = kilometra * overRade
    let final = total + kilometraPrice

    console.log(`The delivery of your shipment with weight of ${packageKilos.toFixed(3)} kg. would cost ${final.toFixed(2)} lv.`)

}

courierExpress(['87','express','130'])