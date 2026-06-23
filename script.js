const den = document.getElementById("den");

den.addEventListener("mouseover", function(){
    den.style.animationPlayState = "paused";
});

den.addEventListener("mouseout", function(){
    den.style.animationPlayState = "running";
});
