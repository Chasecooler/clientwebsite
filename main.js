// Notes
// Changing HTML Content ... Old Heading to New Heading

// <script>
var element = document.getElementById("id02");
element.innerHTML = "[aD] scitylanA ataD";
// </script>

// Script for Mouse Over

function mOver(obj) {
    obj.innerHTML = "This [Da] website is for Clients"
    }

    function mOut(obj) {
        obj.innerHTML = "Made for Clients [Da]"
    }

//    Made for Developers

// function mOver(obj) {
//     obj.innerHTML = "This [aD] website is for Developers: Redirect"
// }

// function mOut(obj) {
//     obj.innerHTML = "Made for Developers [aD]"


// Script to change H1 onClick

// function changeText clients

// function changeText() {
//     var c = document.getElementById("clients");
//     if (c.innerHTML === "Made for Clients [Da]") {
//         c.innerHTML = "You've selected content for Clients";
//     } else {
//     c.innerHTML = "Made for Clients [Da]";
//     }       
// }

// Click on text function to changeText for Developers [aD]


function changeText() {
    var d = document.getElementById("developers");
    if (d.innerHTML === "Made for Developers [aD]") {
        d.innerHTML = "You've selected content for Developers.";
    } else {
        d.innerHTML = "Made for Developers [aD]";
    }
}


// Alternate script
// function changeText() {
//     id.innerHTML = "You've selected content for Clients!";
// }

// function changeText(id) {
//     id.innerHTML = "You've selected content for Developers!";
// }

// Refresh the page from a timer.
// Trying to see if changeText(id) restores original after a few seconds. 

function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
}

// </script>

// Script for dropdownMenu

function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        /*chamge topnav to topnav responsive*/
    } else {
        x.className = "topnav";
    }
}


// NOT USED ###################

//Form Validation from w3schools ... www.w3schools.com

// var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// // When the user clicks on the password field, show the message box
// myInput.onfocus = function () {
//     document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function () {
//     document.getElementById("message").style.display = "none";
// }

// // When the user starts to type something inside the password field
// myInput.onkeyup = function () {
//     // Validate lowercase letters
//     var lowerCaseLetters = /[a-z]/g;
//     if (myInput.value.match(lowerCaseLetters)) {
//         letter.classList.remove("invalid");
//         letter.classList.add("valid");
//     } else {
//         letter.classList.remove("valid");
//         letter.classList.add("invalid");
//     }

//     // Validate capital letters
//     var upperCaseLetters = /[A-Z]/g;
//     if (myInput.value.match(upperCaseLetters)) {
//         capital.classList.remove("invalid");
//         capital.classList.add("valid");
//     } else {
//         capital.classList.remove("valid");
//         capital.classList.add("invalid");
//     }

//     // Validate numbers
//     var numbers = /[0-9]/g;
//     if (myInput.value.match(numbers)) {
//         number.classList.remove("invalid");
//         number.classList.add("valid");
//     } else {
//         number.classList.remove("valid");
//         number.classList.add("invalid");
//     }

//     // Validate length
//     if (myInput.value.length >= 8) {
//         length.classList.remove("invalid");
//         length.classList.add("valid");
//     } else {
//         length.classList.remove("valid");
//         length.classList.add("invalid");
//     }
// }



// Bootstrap Script for Slide Show FROM WWW.GETBOOTSTRAP.COM

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Changing the value of an Attribute from www.3wschools.com

{/* <script> */}
    document.getElementById("imagdev3").src = "img_data_chrisreid_unsplash.jpg";
// </script>

{/* <p>The original image was smiley.gif, but the script changed it to landscape.jpg</p> */}
