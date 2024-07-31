var rectangle = document.getElementById("icon-html");

rectangle.classList.add("animate-rectangle");

setTimeout(function() {
    rectangle.classList.remove("animate-rectangle");
}, 2000);