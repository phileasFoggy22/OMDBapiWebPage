const APIKey = "http://www.omdbapi.com/?i=tt3896198&apikey=19e5ba0a";

function returnResults() {
    if (sessionStorage.getItem("movieSearch") != null) {
        listSearchresults(sessionStorage.getItem("movieSearch"));
    }
    if (localStorage.getItem("history") != null) {
        console.log(localStorage.getItem("history"));
        var movies = localStorage.getItem("history");
        if (movies[0] != null) {
            document.getElementById("MovieOne").src = movies;
            console.log(movies[0]);
        }

    }
}

function SearchMovies() {

    let searchCriteria = document.getElementById("searchBox").value;
    sessionStorage.setItem('movieSearch', searchCriteria);
    listSearchresults(searchCriteria);

}

function listSearchresults(searchCriteria) {
    makeRequest("GET", APIKey + "&s=" + searchCriteria, "").then((resolve) => {

        var newobj1 = JSON.parse(resolve)["Search"];
        var node = document.createElement("TABLE");
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML = ("Title");
        var td2 = document.createElement('td');
        td2.innerHTML = ("Year");
        var td3 = document.createElement('td');
        td3.innerHTML = ("Movie");
        var td4 = document.createElement('td');
        td4.innerHTML = ("More");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        node.append(tr);

        for (var i = 0; i < newobj1.length; i++) {

            var tr = document.createElement('tr');
            var td1 = document.createElement('td')
            td1.innerHTML = newobj1[i]["Title"];
            var td2 = document.createElement('td');
            td2.innerHTML = newobj1[i]["Year"];
            var td3 = document.createElement('td');
            td3.innerHTML = newobj1[i]["Type"];
            var td4 = document.createElement('td');

            var btn = document.createElement('input');
            btn.className = "btn";
            btn.type = "button";
            btn.value = "More Detail";
            let id = newobj1[i]["imdbID"];
            btn.onclick = (function () {
                return function () {
                    getMovieFocus(id);
                }
            })(newobj1[i]["id"]);
            td4.appendChild(btn);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            node.append(tr);

        }
        document.getElementById("ResultsTable").appendChild(node);
    })
}

function getMovieFocus(id) {
    //session storage for id carried to next page
    sessionStorage.setItem('movieID', id);

    window.location.href = "moviefocus.html";
}

function makeRequest(method, url, body) {
    return new Promise(
        (resolve, reject) => {
            const req = new XMLHttpRequest();
            req.onload = () => {
                if (req.status >= 200 && req.status <= 299) {
                    resolve(req.responseText);
                } else {
                    console.log(req.responseText)
                    const reason = new Error("Rejected");
                    reject(reason);
                }
            }
            req.open(method, url);
            req.setRequestHeader('Content-Type', 'application/json');
            req.send(body);
        });

}
