var photos = []; //Declare an empty array to store image element
var fileNames = [];// Declare an empty element to store image file names
var imageList = []; //Declare an empty array to store html list that contain an image
var image; //Declare an empty variable to store the assembled image list codes
var openList = "<li class='partner'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag

for (var i=0; i<6; i++) {
    fileNames.push("partner" + (i+1));
    photos.push(`<img src=images/partners/${fileNames[i]}.png>`);
    
    image = openList + photos[i] + closeList;
    imageList.push(image);
}
document.getElementById("partners").innerHTML = imageList;