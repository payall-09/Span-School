document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var span = document.getElementsByClassName("close")[0];

    setTimeout(function() {
        popup.style.display = "block";
    }, 2000);

    span.onclick = function() {
        popup.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    };
});
