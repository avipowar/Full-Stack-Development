let puppyImage = document.getElementById("puppyImage");
let likeIcon = document.getElementById("likeIcon");
let likeButton = document.getElementById("likeButton");

let imageState = false;

function onClickLikeButton(){

    if (imageState) {
        puppyImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIcon.style.color="#0967d2"
        likeButton.style.color="#cbd2d9"
        likeButton.style.backgroundColor="#0967d2"

    }
    else {

        puppyImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIcon.style.color=""
        likeButton.style.color=""
        likeButton.style.backgroundColor="#0967d2" 
    }
    imageState = !imageState;
}