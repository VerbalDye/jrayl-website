var headerEl = document.querySelector("header");
var heroVideo = document.getElementById("heroVideo");
var heroEl = document.querySelector(".hero");

var resizeHero = function() {
    var headerHeight = headerEl.offsetHeight;
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    heroEl.style.height = windowHeight - headerHeight + "px";

    console.log(headerHeight);
    console.log(windowHeight);
    console.log(headerHeight - windowHeight);
    console.log(heroEl.style.height);

    if (windowHeight/1080 > windowWidth/1920) {
        console.log("long");
        heroVideo.style.width = "";
        heroVideo.style.height = windowHeight + "px";
        var heroWidth = heroVideo.clientWidth;
        heroVideo.style.top = "0";
        heroVideo.style.left = -(heroWidth - windowWidth) / 2 + "px";
    } else {
        console.log("wide");
        heroVideo.style.height = "";
        heroVideo.style.width = windowWidth + "px";
        var heroHeight = (windowWidth / 16) * 9;
        console.log(heroHeight);
        heroVideo.style.left = "0";
        heroVideo.style.top = -(heroHeight - windowHeight) + "px";
    }
};

var detatchHeader = function() {
    if (scrollY > 0) {
        headerEl.className = "header-scroll";
    } else {
        headerEl.className = "";
    }
}

resizeHero();

onresize = resizeHero;
onscroll = detatchHeader;