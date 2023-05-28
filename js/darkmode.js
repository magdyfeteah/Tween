function setDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        document.getElementById("dark-mode-icon").src = "css/images/sun.svg";
    } else {
        document.getElementById("dark-mode-icon").src = "css/images/moon.svg";
    }
    
}