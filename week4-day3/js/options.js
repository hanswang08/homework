var selectBox = document.getElementById("cliffSelect")
selectBox.addEventListener("change", displayBox);
function displayBox() {
    var WestOption= document.getElementById("west")
    if (WestOption.selected == true) {
        document.getElementById("dateWest").style.visibility = "visible"
        document.getElementById("dateEast").style.visibility = "hidden"
        document.getElementById("dateNorth").style.visibility = "hidden"
        document.getElementById("dateSouth").style.visibility = "hidden"
    }
    else if (document.getElementById("east").selected == true) {
        document.getElementById("dateWest").style.visibility = "hidden"
        document.getElementById("dateEast").style.visibility = "visible"
        document.getElementById("dateNorth").style.visibility = "hidden"
        document.getElementById("dateSouth").style.visibility = "hidden"
    }
    else if (document.getElementById("north").selected == true) {
        document.getElementById("dateWest").style.visibility = "hidden"
        document.getElementById("dateEast").style.visibility = "hidden"
        document.getElementById("dateNorth").style.visibility = "visible"
        document.getElementById("dateSouth").style.visibility = "hidden"
    }
    else if (document.getElementById("south").selected == true) {
        document.getElementById("dateWest").style.visibility = "hidden"
        document.getElementById("dateEast").style.visibility = "hidden"
        document.getElementById("dateNorth").style.visibility = "hidden"
        document.getElementById("dateSouth").style.visibility = "visible"
    }
    else {
        document.getElementById("dateWest").style.visibility = "hidden"
        document.getElementById("dateEast").style.visibility = "hidden"
        document.getElementById("dateNorth").style.visibility = "hidden"
        document.getElementById("dateSouth").style.visibility = "hidden"
    }
}
