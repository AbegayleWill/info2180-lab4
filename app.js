window.onload = function(){
    var httpRequest;
    document.getElementById("search").addEventListener('click', makeRequest);
    console.log("button clicked")

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
        alert('Cannot create an XMLHTTP instance');
        return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', "http://localhost/info2180-lab4/superheroes.php");
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            alert(httpRequest.responseText);
        } else {
            alert('There was a problem with the request.');
        }
        }
    }
}

