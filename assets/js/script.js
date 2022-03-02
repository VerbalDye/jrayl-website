var driverDrop = document.getElementById("driverDrop");
var dropDown = document.getElementById("dropDown");
driverDrop.addEventListener("mouseover", function() {
    dropDown.style.opacity = "1";
});
driverDrop.addEventListener("mouseout", function() {
    dropDown.style.opacity = "0";
});