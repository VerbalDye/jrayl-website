function animateIcon() {
    let storeBar = document.getElementById("bar2");
    let isOpen = window.getComputedStyle(storeBar).getPropertyValue("opacity");
    if (isOpen == 1) {
    document.getElementById("bar1").style.transform = "translateY(.6rem) rotate(45deg)";
    document.getElementById("bar2").style.opacity = "0";
    document.getElementById("bar3").style.transform = "translateY(-.6rem) rotate(-45deg)";
    document.getElementById("menu").style.height = "100vh";
    document.getElementById("menuIcon").style.transform = "rotate(180deg)";
    }
    if (isOpen == 0) {
      document.getElementById("bar1").style.transform = "translateY(0rem) rotate(0deg)";
      document.getElementById("bar2").style.opacity = "1";
      document.getElementById("bar3").style.transform = "translateY(0rem) rotate(0deg)";
      document.getElementById("menu").style.height = "0vh";
      document.getElementById("menuIcon").style.transform = "rotate(0deg)";
    }
  }
  
  function closeMenu() {
    document.getElementById("bar1").style.transform = "translateY(0rem) rotate(0deg)";
    document.getElementById("bar2").style.opacity = "1";
    document.getElementById("bar3").style.transform = "translateY(0rem) rotate(0deg)";
    document.getElementById("menu").style.height = "0vh";
    document.getElementById("menuIcon").style.transform = "rotate(0deg)";
  }