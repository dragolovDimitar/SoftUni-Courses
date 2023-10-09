function passwordValidator(password){
    let isValidLength = paswordLength(password);
    let isValidLetterDigits = letterAndDigits(password);
    let isValid2Digits = onlyTwoDigits(password);

    if (isValidLength && isValidLetterDigits && isValid2Digits){
        console.log(`Password is valid`);
    }

    function paswordLength (password){
        if (password.length >= 6 && password.length <= 10 ) {
            return true;
        } else {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
    
    
    }
   
    
    function letterAndDigits (password){
        for (let code of password){
            let currCode = code.charCodeAt(0)
    
            if (
                !((currCode >= 48 && currCode <= 57) || 
                (currCode >= 65 &&currCode <= 90) ||
                (currCode >= 97 && currCode <= 122))
             ){

             console.log(`Password must consist only of letters and digits`);
             return false;

            } 
        }
        
        return true;
    }
    
    
    function onlyTwoDigits (password){
        let countDigits = 0;
    
        for (let code of password){
            let currChar = code.charCodeAt(0)
    
            if (currChar >= 48 && currChar <= 57){
                countDigits++
            }
        }
        
        if (countDigits < 2 ){
            console.log(`Password must have at least 2 digits`);
            return false;
        } else {
            return true;
        }
    }
    



}  
passwordValidator('4444444') 
