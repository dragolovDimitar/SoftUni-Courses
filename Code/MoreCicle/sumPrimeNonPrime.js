function sumPrime (input){
   let index = 0; 
   let currentSum = input[index];
   let prime = 0;
   let nonPrime = 0;
   let isComplex = false;

   while(currentSum !== "stop"){
        let current = Number(currentSum)
        if (current < 0){
            console.log("Number is negative.");
            index++
            currentSum = input[index];
            continue;
        } else {
            for(let i = 2; i < current; i++){
                if(current % i === 0){
                    isComplex = true;
                    break;
                }
            }
        }

        if(isComplex){
            prime += current;
            isComplex = false;
        } else {
            nonPrime += current;
        }

        index++; 
        currentSum = input[index]
      
        
    }
   console.log (`Sum of all prime numbers is: ${nonPrime}`);
   console.log (`Sum of all non prime numbers is: ${prime}`);
}
sumPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])