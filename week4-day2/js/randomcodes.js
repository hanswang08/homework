/* ----random codes ------ */
//Function to generate combination of characters
function generateCode() {
//create variables to store generated codes and the type of characters we want to show as codes 
    var code = ' '; //initialize to null value
    var getCode = ' '; //to store entered code
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'
    var btnvalue; //for button booleanvalue
    for (i = 1; i <= 8; i++) {
        var char =  Math.random()* str.length; // random select a character from the variable and then store in a new variable
        code += str.charAt(char);
}
return code; //return the final accumulated string when loop ends
}
//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();
//Disable Button 
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue; //able/disable button
    if(btnvalue == true) { //test if button is disabled or enabled
        //set button and label colr translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        //set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}
disableButton();

//listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input", evaluateCode);
//run function if detected user had entered a character in textbox
function evaluateCode() {
    getCode = document.getElementById("codeentered").value; //get character entered
    var charset1 = getCode.trim(); //remove any hidden characters entered
    var charset2 = code.trim(); //remove any hidden characters generated
    //test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false); //if match, runt he function to enable button
    }
}
evaluateCode();
