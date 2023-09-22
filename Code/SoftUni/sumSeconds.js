function sumSeconds(input) {
    let timeFirst = Number (input[0]);
    let timeSeconds = Number (input[1]);
    let timeThird = Number (input[2]);

    let totalTime = timeFirst + timeSeconds + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
} 

sumSeconds(["35","45","44"])