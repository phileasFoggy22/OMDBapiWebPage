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
        var newobj1 = JSON.parse(req.responseText)["Search"];
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
            console.log(newobj1[i]);
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
            let id = newobj1[i]["id"];
            btn.onclick = (function () {
                return function () {
                    //getPets(id);
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
    }
}
