function fetchData() {
    const xhttp = new XMLHttpRequest();// membuat object XMLHttpRequest
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
    const httpMethod = "GET";
    // membuat callback function
    xhttp.onload = function() {
      console.log(this.responseText);
    }
    // mengirim request ke server
    xhttp.open(httpMethod, url);
    xhttp.send();
  }

  