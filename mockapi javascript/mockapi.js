// GET ALL ANIME part 1
fetch("https://64247aee7ac292e3cfeb96c1.mockapi.io/animes")
.then ((response) => response.json())
.then ((result) => {
  console.log({ result })
})
.catch(error => { 
console.log("error", error);
})


// GET ALL ANIME part 2
const API_ENDPOINT = "https://64247aee7ac292e3cfeb96c1.mockapi.io/animes"

async function callApi() {
  try {
    const response = await fetch(API_ENDPOINT);
    const result = await response.json();
    
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}

callApi();


// GET ANIME BY ID
const API_ENDPOINT = "https://64247aee7ac292e3cfeb96c1.mockapi.io/animes"

async function callApi() {
  try {
    const response = await fetch(API_ENDPOINT + "/16");
    const result = await response.json();
    
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}

callApi();


//ATAU CARA LEBIH RAPI
const API_ENDPOINT = "https://64247aee7ac292e3cfeb96c1.mockapi.io/animes"
const API_ENDPOINT_ACCOUNTS = "https://64247aee7ac292e3cfeb96c1.mockapi.io/accounts"

// getALL Data anime
async function getAllAnimes() {
  try {
    const response = await fetch(API_ENDPOINT);
    const result = await response.json();
    
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}


//Untuk login
async function getAllAnimes() {
  try {
    const response = await fetch(API_ENDPOINT);
    const result = await response.json();
    
       for (var i=0; i<result.length; i++) {
           console.log(result[i]["title"])}
    } catch (error) {
    console.log("error", error);
  }
}
getAllAnimes();
//

async function getAnimeById(animeId) {
  try {
    const response = await fetch(API_ENDPOINT + '/' + animeId);
    const result = await response.json();
    
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}
// UNTUK MEMANGGIL GET ALL DATA
// getAllAnimes();

// UNTUK MEMANGGIL DATA BY ID
getAnimeById(16);
getAnimeById(15);
getAnimeById(17);
getAnimeById(1);

async function createNewAnime(newAnime) {
  try {
    const params = {
      method: "POST",
      body: JSON.stringify(newAnime),
      headers: {
        "Content-type": "application/json"
      }
    }
    const response = await fetch(API_ENDPOINT, params);
    const result = await response.json();
    
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}

//MEMBUAT DATA BARU
createNewAnime({
  title: "Anime baru",
  ongoing: false,
  summary: "baru rilis anime"
});

//SIGNUP CREATE
async function createNewAccounts(newAccount) {
  try {
    const params = {
      method: "POST",
      body: JSON.stringify(newAccount),
      headers: {
        "Content-type": "application/json"
      }
    }
    const response = await fetch(API_ENDPOINT_ACCOUNTS, params);
    const result = await response.json();
    
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}

createNewAccounts({
  email: "Lindo",
  password: "Lindo123"
});

//BERHASIL, cek lagi get All
// getAllAnimes();

//DELETE ANIME
async function deleteAnime(animeId) {
  try {
    const params = {
      method: "DELETE",
      };
    const response = await fetch(API_ENDPOINT + '/' + animeId, params);
    const result = await response.json();
    
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}

deleteAnime(18);
// BERHASIL, cek All lagi
// getAllAnimes();


//UPDATE DARI YANG SUDAH ADA
async function updateAnime(updatedAnime) {
  try {
     const params = {
      method: "PUT",
      body: JSON.stringify(updatedAnime),
      headers: {
        "Content-type": "application/json"
      }
     };
    const response = await fetch("https://64247aee7ac292e3cfeb96c1.mockapi.io/animes/1", params);
    const result = await response.json();
    
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}

updateAnime({
  id: "1",
  title: "Naruto Shippuden",
  ongoing: false,
  summary: "Ninja art, and war"
});
//BERHASIL

//UPDATE KEMBALI KE SEMULA
async function updateAnime(updatedAnime) {
  try {
     const params = {
      method: "PUT",
      body: JSON.stringify(updatedAnime),
      headers: {
        "Content-type": "application/json"
      }
     };
    const response = await fetch("https://64247aee7ac292e3cfeb96c1.mockapi.io/animes/" + updatedAnime.id, params);
    const result = await response.json();
    
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}

updateAnime({
  id: 1,
  title: "Naruto Shippuden",
  ongoing: false,
  summary: "Ninja art, and war"
});
//BERHASIL