const url = "https://raspy-peaceful-alarm.glitch.me/movies";
const poster = ['../img/movie.jpg', '../img/movie2.jpg','../img/movie3.jpg']

fetch(url)
    .then(r => r.json())
    .then(data => {
        // console.log(data)
        document.querySelector(".loader").style.display = "none"//stop the load
    })
int()

function int() {
    getData()
}

function getData() {
    fetch(url)
        .then(res => res.json())
        .then(movieData => {
            console.log(movieData)

            let html = `<div class="d-flex justify-content-center mt-1" id="addmoviebutton">
                            <button type="button" id="addNewMovieBtn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add New Movie
                            </button>
                        </div>
                        <section class="row mt-3 d-flex justify-content-center" style="width: 100%">`;
            for (let i = 0; i < movieData.length; i++) {

                html += `<div class="card m-2 yellowborder" style="width: 18rem;" xmlns="http://www.w3.org/1999/html">
<div class="d-flex justify-content-center mt-3 mb-2">
<button class="btn btn-primary" id="${movieData[i].id} " data-bs-toggle="modal" data-bs-target="#editModal${[i]}" style="width: 50%">Edit Movie</button>
</div>
<div class="d-flex justify-content-center">
  <img src="${movieData[i].poster}" class="card-img-top yellowborder images" alt="${movieData[i].title} movie poster" style="height: 200px; width: 150px">
  </div>
  <div class="card-body" style="height: 15rem">
    <h5 class="card-title">${movieData[i].title}</h5>
    <p class="card-text">${movieData[i].plot}</p>
  </div>
  
  <div class="d-flex justify-content-center">
    <button class="btn btn-primary delete mx-2" id="${movieData[i].id}">Delete</button>
    <button class="btn btn-primary mx-2" id="${movieData[i].id} " data-bs-toggle="modal" data-bs-target="#modalInfo${[i]}">More info</button> 
    </div>
</div>

<!-- Modal Edit-->
<div class="modal fade" id="editModal${[i]}" tabindex="-1" aria-labelledby="modalEdit" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalEdit">Edit Movie</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               Title: <input id="movieTitle${[i]}" value="${movieData[i].title}"><br>
                Actors: <input id="actors${[i]}" value="${movieData[i].actors}"><br>
               Genre: <input id="genre${[i]}" value="${movieData[i].genre}"><br>
               Rating: <input id="rating${[i]}" value="${movieData[i].rating}"><br>
               Director: <input id="director${[i]}" value="${movieData[i].director}"><br>
               Year: <input id="year${[i]}" value="${movieData[i].year}"><br>
               Summary: <textarea id="plot${[i]}">${movieData[i].plot}</textarea>


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button id="${movieData[i].id}" type="button" class="btn btn-primary edit" data-bs-dismiss="modal" value="${i}" >Edit</button>
            </div>
        </div>
    </div>
</div>


<!--movie info-->
<div class="modal fade" id="modalInfo${[i]}" tabindex="-1" aria-labelledby="modalInfo" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalInfo">${movieData[i].title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
  <img src="${movieData[i].poster}" class="card-img-top pt-2" alt="${movieData[i].title} movie poster" style="height: 200px; width: 150px">
  <section>
                <b>Actors:</b> ${movieData[i].actors}<br>
               <b>Director:</b> ${movieData[i].director}<br>
               <b>Genre:</b> ${movieData[i].genre}<br>
               <b>Year:</b> ${movieData[i].year}<br>
               <b>Rating:</b> ${movieData[i].rating}<br>
               <b>Summary:</b> ${movieData[i].plot}
               
</section>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

`


            }
            html += `</section>`

            $('#cards').html(html)

            $('.delete').click(function () {
                console.log("hello")
                console.log(this.id)
                deletemovie(this.id);
            })

            $('.edit').click(function () {
                console.log("hello")
                console.log(this.id)
                console.log(this.value)

                let editedMovie = {
                    title: document.querySelector(`#movieTitle${[this.value]}`).value,
                    rating: document.querySelector(`#rating${[this.value]}`).value,
                    poster: movieData[this.value].poster,
                    year: document.querySelector(`#year${[this.value]}`).value,
                    genre: document.querySelector(`#genre${[this.value]}`).value,
                    director: document.querySelector(`#director${[this.value]}`).value,
                    plot: document.querySelector(`#plot${[this.value]}`).value,
                    actors: document.querySelector(`#actors${[this.value]}`).value,
                }
                console.log(editedMovie);
                console.log(parseInt(editedMovie.year));
                if ((Number(editedMovie.year))) {
                    console.log('is a num');
                    editTheMovie(editedMovie, this.id)
                } else {
                    alert("Please enter a numerical year");
                }
            })

        })
        .catch(error => console.log(error))

}


function deletemovie(id) {
    fetch(url + '/' + id, {
        method: 'DELETE',
        headers: {"Content-type": "application/json; charset=UTF-8"},
    })
        .then(res => res.json()) // or res.json()
        .then(res => getData())
        .catch(error => console.log('not deleted', error))
}


$('#sendNewMovie').click(function () {
    console.log('hello');
    let randomnum = Math.floor(Math.random()*poster.length);
    let newMovie = {
        title: document.querySelector('#movieTitle').value,
        rating: document.querySelector('#rating').value,
        poster: poster[randomnum],
        year: document.querySelector('#year').value,
        genre: document.querySelector('#genre').value,
        director: document.querySelector('#director').value,
        plot: document.querySelector('#plot').value,
        actors: document.querySelector('#actors').value,
    }
    // console.log(newMovie);
    console.log(parseInt(newMovie.year));
    if ((Number(newMovie.year))) {
        console.log('is a num');
        postmovie(newMovie)
    } else {
        alert("Please enter a numerical year");
    }
})


function postmovie(newMovie) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {"Content-type": "application/json; charset=UTF-8"},
    })
        .then(json => console.log(json))
        .then(res => getData())
        .catch(err => console.log('you have error plz cry', err));
}

function editTheMovie(movie, id) {
    fetch(url + '/' + id, {
        method: "PUT",
        body: JSON.stringify(movie),
        headers: {"Content-type": "application/json; charset=UTF-8"},
    })
        .then(res => getData())
        .catch(err => console.log('you have error plz cry', err));
}

$('#sans').dblclick(function () {
    console.log('hello')
    $('body').css({
        "font-family": '"Comic Sans MS", "Comic Sans", cursive',
    })
})