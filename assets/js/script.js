var driverDrop = document.getElementById("driverDrop");
var dropDown = document.getElementById("dropDown");
var onDrop = false;
var onDriver = false;

driverDrop.addEventListener("mouseover", function() {
    onDriver = true;
    showOrNo("driverOn");
});
driverDrop.addEventListener("mouseout", function() {
    onDriver = false;
    showOrNo("driverOut");
});

dropDown.addEventListener("mouseover", function() {
    onDrop = true;
    showOrNo("dropOn");
});
dropDown.addEventListener("mouseout", function() {
    onDrop = false;
    showOrNo("dropOut");
});

var showOrNo = function(condition) {
    if (onDrop || onDriver) {
        dropDown.style.opacity = "1";
    } else {
        dropDown.style.opacity = "0";
    }
};

