// function change(){
// document.getElementById("like").style.color = "blue";
// document.getElementById("btn").style.backgroundColor = "blue";

// }

let isBlue = false;

function change() {
    const likeElement = document.getElementById("like");
    const btnElement = document.getElementById("btn");
    const imagelement =document.getElementById("image");

    if (isBlue) {
        likeElement.style.color = "lightgrey";
        btnElement.style.backgroundColor = "lightgrey";
        imagelement.src = "dog.jpg";

    } else {
        likeElement.style.color = "blue";
        btnElement.style.backgroundColor = "blue";
        imagelement.src = "happy.jpg";
    }

    isBlue = !isBlue;
}