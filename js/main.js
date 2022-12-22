function setActive(id) {
    

    var elements = document.getElementsByClassName("active");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");

    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");

    if ( id == 1){
        text1.style.display = "block";
        text2.style.display = "none";
        text3.style.display = "none";
        img1.style.display = "block";
        img2.style.display = "none";
        img3.style.display = "none";
    
    }
    else if ( id == 2){
        text1.style.display = "none";
        text2.style.display = "block";
        text3.style.display = "none";
        img1.style.display = "none";
        img2.style.display = "block";
        img3.style.display = "none";

    }
    else if ( id == 3){
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "block";
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "block";
    }
  
}