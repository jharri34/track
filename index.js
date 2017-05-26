function httpGetAsync("https://jharri34.github.io/track/api", callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", "https://jharri34.github.io/track/", true); // true for asynchronous
    xmlHttp.send(null);
    console.log("Hello, World!!");
}
