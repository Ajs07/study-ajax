async function fetchData() {
  /*Sebelumnya, XMLHttpRequest memang mainstream untuk mengirimkan request pada API , namun fetch lebih sederhana dan lebih powerful dan semakin hari semakin menjadi pilihan yang lebih baik.
  Berbeda dengan XMLHttpRequest, fetch menghasilkan Promise secara default dan kamu dapat menghindari callback hell. */
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
    method:"GET"
  })
    // Ubah format response dari API menjadi format JavaScript object dengan printah JSON.parse() .
    const json = await response.json();
    // Ambil data aktual yang dibutuhkan. Dalam contoh ini, data Pokemon ada di dalam key results dengan tipe data array.
    const results = json.results;

    // Lakukan looping dan mengambil setiap nama Pokemon dan menampilkannya dalam element HTML <p>.
    let data = ''
    for (i = 0; i < results.length; i++) {
      data = data + `<p>${results[i].name}</p>`;
    }

    // memilih <div> tersebut dengan perintah document.getElementById("<nama_id>") dan mengganti nilainya dengan perintah .innerHTML.
    document.getElementById("progate").innerHTML = data;
  
  // mengirim request ke server
  xhttp.open(httpMethod, url);
  xhttp.send();
}