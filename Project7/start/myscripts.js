var imgArray = new Array(
    'CoupleSailingLg.jpg',
    'PigLg.jpg',
    'SaladLg.jpg',
    'StorkLg.jpg'
);


var titleArray = new Array(
    'Newlyweds Sailing',
    'Boy and His Pig',
    'Yummy Salad',
    'Stork at Sunset'
);
    
var imgPath = "Images/Fullsize/";

function swapImage(imgID) {

    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');

    var newImg;
    var textTitle;

    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;

    textTitle=titleArray[imgID];

          textDiv.innerHTML = textTitle;
}
    
function preloadImages() {		
    for(var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image;
        tmpImg.src = imgPath + imgArray[i];
    }
}
