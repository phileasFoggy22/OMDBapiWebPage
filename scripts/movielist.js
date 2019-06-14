const APIKey = "http://www.omdbapi.com/?i=tt3896198&apikey=19e5ba0a";

function SearchMovies() {

    let searchCriteria = document.getElementById("searchBox").value;
    listSearchresults(searchCriteria);

}

function listSearchresults(searchCriteria) {
    let req = new XMLHttpRequest();
    req.open("GET", APIKey + "&s=" + searchCriteria);
    req.send();
    req.onload = function () {
        console.log(req.response);
    }
}
