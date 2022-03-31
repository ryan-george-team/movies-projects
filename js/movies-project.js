const url = "https://raspy-peaceful-alarm.glitch.me/movies";

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

            let html = '<section class="row" style="width: 100%">';
            for (let i = 0; i < movieData.length; i++) {
                html += `<div class="card col-md-6" style="width: 18rem;" xmlns="http://www.w3.org/1999/html">
<button class="btn btn-primary " id="${movieData[i].id} " data-bs-toggle="modal" data-bs-target="#editModal${[i]}">edit</button>
  <img src="${movieData[i].poster}" class="card-img-top pt-2" alt="${movieData[i].title} movie poster" style="height: 200px; width: 150px">
  <div class="card-body">
    <h5 class="card-title">${movieData[i].title}</h5>
    <p class="card-text">${movieData[i].plot}</p>
    <button class="btn btn-primary delete" id="${movieData[i].id}">Delete</button>
    <a href="#" class="btn btn-primary">More Info</a>
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
                <input id="movieTitle${[i]}" value="${movieData[i].title}">
                <input id="actors${[i]}" value="${movieData[i].actors}">
                <input id="genre${[i]}" value="${movieData[i].genre}">
                <textarea id="plot${[i]}">${movieData[i].plot}</textarea>
                <input id="rating${[i]}" value="${movieData[i].rating}">
                <input id="director${[i]}" value="${movieData[i].director}">
                <input id="year${[i]}" value="${movieData[i].year}">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button id="${movieData[i].id}" type="button" class="btn btn-primary edit" data-bs-dismiss="modal" value="${i}" >Edit Movie</button>
            </div>
        </div>
    </div>
</div>`
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
                    poster: '../img/movie.jpg',
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
                }
                else {
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
    let newMovie = {
        title: document.querySelector('#movieTitle').value,
        rating: document.querySelector('#rating').value,
        poster: '../img/movie.jpg',
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
    }
    else {
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
        .catch(err => console.log('you have error plz cry',err));
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

