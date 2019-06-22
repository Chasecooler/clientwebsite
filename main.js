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

// function changeText developers


function changeText() {
    var d = document.getElementById("developers");
    if (d.innerHTML === "Made for Developers [aD]") {
        d.innerHTML = "You've selected content for Developers";
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