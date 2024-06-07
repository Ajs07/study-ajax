function fetchData() {
  const xhttp = new XMLHttpRequest();
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
  const httpMethod = "GET";
  // membuat callback function
  xhttp.onload = function() {
    // Ubah format response dari API menjadi format JavaScript object dengan printah JSON.parse() .
    const response = JSON.parse(this.responseText);
    // Ambil data aktual yang dibutuhkan. Dalam contoh ini, data Pokemon ada di dalam key results dengan tipe data array.
    const results = response.results;

    // Lakukan looping dan mengambil setiap nama Pokemon dan menampilkannya dalam element HTML <p>.
    let data = ''
    for (i = 0; i < results.length; i++) {
      data = data + `<p>${results[i].name}</p>`;
    }

    // memilih <div> tersebut dengan perintah document.getElementById("<nama_id>") dan mengganti nilainya dengan perintah .innerHTML.
    document.getElementById("progate").innerHTML = data;
  }
  // mengirim request ke server
  xhttp.open(httpMethod, url);
  xhttp.send();
}