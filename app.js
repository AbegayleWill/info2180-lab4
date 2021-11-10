window.onload = function(){
    var httpRequest;
    search = document.getElementById("searchbox");
    document.getElementById("search").addEventListener('click', makeRequest);
    console.log("button clicked")

    
    
    function Contents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var result = doucment.getElementById("result");
                var heroes = httpRequest.responseText;
                if (searchbox.value != ""){
                result.innerHTML = heroes
                } else {
                    alert('There was a problem with the request.');
                }
            }
        }
    }
    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = Contents;
        httpRequest.open('GET', "http://localhost/info2180-lab4/superheroes.php?q" + search.value, true);
        httpRequest.send();
        
    }

    
  
}