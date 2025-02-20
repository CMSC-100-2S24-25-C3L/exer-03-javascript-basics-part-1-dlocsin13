function main(){
    let pw1 = "Pass1234";
    let pw2 = "Pass1234";
    let pw3 = "HELLO1234";
    let pw4 = "HELLO1234"

    console.log("Password 1: " + pw1);
    console.log("Password 2: " + pw2);
    console.log("Validity: " + validatePassword(pw1,pw2) + "\n");

    console.log("Password 1: " + pw3);
    console.log("Password 2: " + pw4);
    console.log("Validity: " + validatePassword(pw3,pw4) + "\n");

    console.log("String: " + pw1);
    console.log("Reversed String: " + reverseString(pw1) + "\n");

    console.log("Store Password with input ('John', 'Pass1234', 'Pass1234'):");
    console.log(storePassword("John", "Pass1234", "Pass1234"));

    console.log("Store Password with input ('John', 'Pass123', 'Pass12345'):");
    console.log(storePassword("John", "Pass123", "Pass12345"));
    return;
}


function validatePassword(str1, str2){
    //check if the password has valid length
    if(str1.length < 8){
        return false;
    }

    //check if the password has an Upper, Lower, or Number
    if(!hasLower(str1) || !hasUpper(str1) || !hasInteger(str1)){
        return false;
    }

    //check if both strings has same length
    if(str1.length != str2.length){
        return false;
    }

    //check if the strings are equal
    if(!strCompare(str1, str2)){
        return false;
    }

    return true;

}

function reverseString(str){
    let reverse = "";

    //loop to store the characters of a string to the reverse variable in reverse order
    for(let i = str.length - 1; i >= 0 ; i--){
        reverse = reverse.concat(str[i]);
    }

    return reverse;
}


function storePassword(n, pw1, pw2){

    //checks if the passwords are valid
    if(validatePassword(pw1, pw2)){

        //returns an object that has name and password, password is the reversed given password
        return user = {
            name: n,
            password: reverseString(pw1)
        }
    }

    //if not valid, returns object with name and password, password is the first password given
    return user = {
        name: n,
        password: pw1
    }
}

//helper function to compare 2 strings
function strCompare(str1, str2){

    //for every character in str1 and str2, check if they are equal
    //returns false if char is not equal
    for(let i = 0; i < str1.length; i++){
        if(str1[i] !== str2[i]){
            return false;
        }
    }

    return true;
}

//helper function to check if a string has an uppercase
function hasUpper(str){
    //list of uppercase letters
    let upper_alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
    
    //checks every char in the string
    //if atleast 1 char in the string matches an element in the upper_alphabet, return true
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < upper_alphabet.length; j++){
            if(str[i] === upper_alphabet[j]){
                return true;
            }
        }
    }
    return false;
}

//same as hasUpper but with lower case letters
function hasLower(str){
    let lower_alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < lower_alphabet.length; j++){
            if(str[i] === lower_alphabet[j]){
                return true;
            }
        }
    }
    return false;
}

//same with hasUpper but with numbers
function hasInteger(str){
    let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++){
            if(str[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
}

main();