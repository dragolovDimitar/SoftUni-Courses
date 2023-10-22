function theWall (nums) {
   let arrNums = nums.map(Number);
   let totalYard = 0;
   let price = 0;
   let crews = arrNums.filter(len => len < 30).length;
   let concretePerDay = [];

   while (crews !== 0){
    let allCrewsConcrete = 0;

    for (let j = 0; j < arrNums.length; j++){
        if (arrNums[j] !== 30){
            arrNums[j]++;
            allCrewsConcrete += 195;

            if (arrNums[j] == 30){
                crews--;
            }
        }
    }
    totalYard += allCrewsConcrete;
    concretePerDay.push(allCrewsConcrete);
   }

   price = totalYard * 1900;
   console.log(concretePerDay.join(', '));
   console.log(`${price} pesos`);
}

theWall([17,22,17,19,17])