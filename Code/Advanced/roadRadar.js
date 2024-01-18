function roadRadar (speed, zone) {
   let overLimit = {
        to20: 'speeding',
        to40: 'excessive speeding',
        over40: 'reckless driving'
    }

    speed = Number(speed);

    let speedLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }
    
    if (speed <= speedLimit[zone]) {
        console.log(`Driving ${speed} km/h in a ${speedLimit[zone]} zone`);
    } else if (speed > speedLimit[zone]) {
        let diffrence = speed - speedLimit[zone];
        let status 
        if (diffrence <= 20) {
            status = overLimit.to20;
        } else if (diffrence <= 40) {
            status = overLimit.to40;
        } else {
            status = overLimit.over40;
        }

        console.log(`The speed is ${diffrence} km/h faster than the allowed speed of ${speedLimit[zone]} - ${status}`);
    }
}

roadRadar('120', 'interstate')