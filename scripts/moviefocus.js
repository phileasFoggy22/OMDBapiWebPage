const APIKey = "http://www.omdbapi.com/?apikey=19e5ba0a";

function ShowMovie() {

    let req = new XMLHttpRequest();
    req.open("GET", APIKey + "&i=" + sessionStorage.getItem("movieID"));
    console.log(APIKey + "&i=" + sessionStorage.getItem("movieID"));
    req.send();
    req.onload = function () {
        var newobj1 = JSON.parse(req.responseText);
        console.log(newobj1);
        document.getElementById("movieTitle").innerHTML = newobj1["Title"];
        document.getElementById("movieYear").innerHTML = newobj1["Year"];
        document.getElementById("movieRated").innerHTML = newobj1["Rated"];

        document.getElementById("movieImage").src = newobj1["Poster"];
    }
}

function returnToResults() {
    window.location.href = "movielist.html";
}
