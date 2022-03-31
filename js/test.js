const url = "https://raspy-peaceful-alarm.glitch.me/movies"
const movietest ={
    title: 'blade',
    rating: '4.5',
    poster:'../img/movie.jpg',
    year :"20xx",
    genre: "action",
    director :'blade the director',
    plot: "blade man does blade man things",
    actors: "blade",
}
console.log(movietest)
function postmovie() {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(movietest),
        headers: {"Content-type": "application/json; charset=UTF-8"},
    })
        .then(json => console.log(json))
        .catch(err => console.log('you have error plz cry',err));
}

fetch(url)
    .then(res => res.json())
    .then(movieData => {
        console.log(movieData)

        let html = '';
        for (let i = 0; i < movieData.length; i++) {
            html += `<div class="card" style="width: 18rem;">
  <img src="${movieData[i].poster}" class="card-img-top" alt="${movieData[i].title} movie poster" style="height: 200px; width: 150px">
  <div class="card-body">
    <h5 class="card-title">${movieData[i].title}</h5>
    <p class="card-text">${movieData[i].plot}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
        }

        $('#test').html(html)
    })
    .catch(error => console.log(error))

// delete
function deletemovie() {
    fetch(url + '/'+258, {
        method: 'DELETE',
        headers: {"Content-type": "application/json; charset=UTF-8"},
    })
        .then(res => res.json()) // or res.json()
        .then(res => console.log(res))
        .catch(error => console.log('not deleted', error))
}

//edit movie
function editmovie() {
    fetch(url + '/' + 8, {
        method: "PUT",
        body: JSON.stringify(movietest),
        headers: {"Content-type": "application/json; charset=UTF-8"},
    }).then(json => console.log(json))
        .catch(err => console.log('you have error plz cry', err));
}

function addCard() {
    html += `<div class="card" style="width: 18rem;">
  <img src="${movieData[i].poster}" class="card-img-top" alt="${movieData[i].title} movie poster" style="height: 200px; width: 150px">
  <div class="card-body">
    <h5 class="card-title">${movieData[i].title}</h5>
    <p class="card-text">${movieData[i].plot}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>`
};