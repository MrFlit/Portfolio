if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

var titleText = ["-", "-/", "-/ M", "-/ Mr", "-/ MrF", "-/ MrFl", "-/ MrFli", "-/ MrFlit",  "-/ MrFlit /", "-/ MrFlit /-"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
