//Resize Header
var heroVideo = document.getElementById("heroVideo");

window.addEventListener("resize", resizeHero);

var resizeHero = function() {
    var windowHeight = window.innerHeight + "px";
    var windowWidth = window.innerHeight + "px";
    heroVideo.style.height = windowHeight;
    heroVideo.style.minWidth = windowWidth;
    heroVideo.style.bottom = windowHeight;
    heroVideo.style.top = "none"
    console.log("Success");
};

resizeHero();