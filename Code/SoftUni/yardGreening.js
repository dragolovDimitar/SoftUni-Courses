function yard(input){
    let total = input[0] * 7.61 ;
    let discount = total * 0.18 ;
    let final = total - discount ;

    console.log("The final price is: " + final + " lv.");
    console.log("The discount is: " + discount + " lv.");
    
}
 
yard([600]);