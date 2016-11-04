function openTab(tabId) {
    var i, tabcontent, tablinks;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("tabdetails").innerHTML =this.responseText;
            document.getElementById("tabdetails").style.display="block";
        }
    };
    xhttp.open("GET", "/"+tabId, true);
    xhttp.send();
}

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
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function myFunction() {
    var x = document.getElementByClassName("navbar");
    if (x[0].className === "navbar") {
        x[0].className = "dropdown-content";
        x[0].Id="myDropdown";
    } else {
        x[0].className = "navbar";
        x[0].id="";
    }
}
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
