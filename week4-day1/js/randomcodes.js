/* ----random codes ------ */
//Function to generate combination of characters
function generateCode() {
//create variables to store generated codes and the type of characters we want to show as codes 
    var code = ' '; //initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'
    for (i = 1; i <= 8; i++) {
        var char =  Math.random()* str.length; // random select a character from the variable and then store in a new variable
        code += str.charAt(char);
}
return code; //return the final accumulated string when loop ends
}
//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();
//Disable Button 
function disableButton() {
    document.getElementById("submit").disabled = true;
}
disableButton();
