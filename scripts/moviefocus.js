const APIKey = "http://www.omdbapi.com/?apikey=19e5ba0a";

function ShowMovie() {

    let req = new XMLHttpRequest();
    makeRequest("GET", APIKey + "&i=" + sessionStorage.getItem("movieID"), "").then((resolve) => {
        {
            var newobj1 = JSON.parse(resolve);
            console.log(newobj1);
            document.getElementById("movieTitle").innerHTML = newobj1["Title"];
            document.getElementById("movieYear").innerHTML = newobj1["Year"];
            document.getElementById("movieRated").innerHTML = newobj1["Rated"];

            document.getElementById("movieImage").src = newobj1["Poster"];

            //local storage for search history
            if (localStorage.getItem("movieID") === null) {
                var movies = [newobj1["Poster"]];
                localStorage.setItem("history", movies);
            } else {


            }

        }
    })
}

function returnToResults() {
    window.location.href = "movielist.html";
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
