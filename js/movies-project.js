const url = "https://raspy-peaceful-alarm.glitch.me/movies";
const poster = ['../img/movie.jpg', '../img/movie2.jpg', '../img/movie3.jpg', '../img/movie4.jpg', '../img/movie5.jpg']
let genreCheck = ['action', 'drama', 'fantasy', 'history', 'horror', 'romance' , 'sci-fi', 'war', 'comedy']


fetch(url)
    .then(r => r.json())
    .then(data => {
        // console.log(data)
        document.querySelector(".loader").style.display = "none"//stop the load
        document.querySelector(".holder").style.display = "flex"
        document.querySelector(".holder-2").style.display = "flex"
    })
int()

function int() {
    getData()
}

function getData() {
    fetch(url)
        .then(res => res.json())
        .then(movieData => {
            // console.log(movieData)
            getCards(movieData);
        })
        .catch(error => console.log(error));
}

function getCards(movieData) {
    // language=HTML
    let html = `
        <div class="d-flex justify-content-center mt-1" id="addmoviebutton">
            <button type="button" id="addNewMovieBtn" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                Add New Movie
            </button>

            <!--  Sort by genre dropdown-->
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    Sort By Genre
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                    <li>
                        <button value="all" class="dropdown-item" type="button">All</button>
                    </li>
                    <li>
                        <button value="action" class="dropdown-item" type="button">Action</button>
                    </li>
                    <li>
                        <button value="drama" class="dropdown-item" type="button">Drama</button>
                    </li>
                    <li>
                        <button value="fantasy" class="dropdown-item" type="button">Fantasy</button>
                    </li>
                    <li>
                        <button value="History" class="dropdown-item" type="button">History</button>
                    </li>
                    <li>
                        <button value="horror" class="dropdown-item" type="button">Horror</button>
                    </li>
                    <li>
                        <button value="romance" class="dropdown-item" type="button">Romance</button>
                    </li>
                    <li>
                        <button value="scifi" class="dropdown-item" type="button">Sci-Fi</button>
                    </li>
                    <li>
                        <button value="war" class="dropdown-item" type="button">War</button>
                    </li>
                    <li>
                        <button value="comedy" class="dropdown-item" type="button">Comedy</button>
                    </li>
                </ul>
            </div>
        </div>

        <section class="row mt-3 d-flex justify-content-center movie-holder">`;
    for (let i = 0; i < movieData.length; i++) {
let moviePlot = movieData[i].plot.substring(0, 150);
        html += `<div class="card m-2 yellowborder pb-1" style="width: 18rem;" xmlns="http://www.w3.org/1999/html">
<div class="d-flex justify-content-center mt-3 mb-2">
<button class="btn btn-primary" id="${movieData[i].id} " data-bs-toggle="modal" data-bs-target="#editModal${[i]}" style="width: 50%">Edit Movie</button>
</div>
<div class="d-flex justify-content-center ">
  <img src="${movieData[i].poster}" class="card-img-top yellowborder images " alt="${movieData[i].title} movie poster" style="height: 200px; width: 150px">
  </div>
  <div class="card-body" style="height: 15rem">
    <h5 class="card-title">${movieData[i].title}</h5>
    <p class="card-text ">${moviePlot}</p>
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
            <div class="modal-body  ">
            <div class="row justify-content-around">
              <section class="col-6"> Title: <input id="movieTitle${[i]}" value="${movieData[i].title}"></section>
              <section class="col-6">  Actors: <input id="actors${[i]}" value="${movieData[i].actors}"></section>
              </div>
              <div class="row justify-content-between">
              <section class="col-2"> Director: <input id="director${[i]}" value="${movieData[i].director}"></section>
               <section class="col-2">Year: <input id="year${[i]}" value="${movieData[i].year}"></section>
               <section class="col-2"> Rating: <input id="rating${[i]}" value="${movieData[i].rating}" style="width: 70%"></section>
               </div>
               <div class="row justify-content-around">
               <section class="col-4" style="height: 150px; width: 200px"> Genre: <textarea id="genre${[i]}" style="height:125px"> ${movieData[i].genre}</textarea></section>
              <section class="col-4" style="height: 150px; width: 200px"> Summary: <textarea id="plot${[i]}" style="height: 125px" >${movieData[i].plot}</textarea></section>
                </div>

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
            <div class="d-flex justify-content-center mb-3">
  <img src="${movieData[i].poster}" class="card-img-top  moreInfo-border" alt="${movieData[i].title} movie poster" style="height: 200px; width: 150px;">
  </div>
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
        let genreString =  document.querySelector(`#genre${[this.value]}`).value.split(",");
        console.log(genreString)
        // console.log(genreString[0].toLowerCase())
        let newGenewArray =[]

       for (let b =0;  b < genreString.length; b++) {
           genreCheck.forEach(genre=>{
               if (genreString[b].toLowerCase().includes(genre)){
                   newGenewArray.push(genreString[b])
               }
           })
       }
        console.log(newGenewArray)
        let newGeneString = newGenewArray.join(", ")
        console.log(newGeneString)
        let editedMovie = {
            title: document.querySelector(`#movieTitle${[this.value]}`).value,
            rating: document.querySelector(`#rating${[this.value]}`).value,
            poster: movieData[this.value].poster,
            year: document.querySelector(`#year${[this.value]}`).value,
            genre: newGeneString,
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
}

// Deletes movie on database
function deletemovie(id) {
    fetch(url + '/' + id, {
        method: 'DELETE',
        headers: {"Content-type": "application/json; charset=UTF-8"},
    })
        .then(res => res.json()) // or res.json()
        .then(res => getData())
        .catch(error => console.log('not deleted', error))
}

function newMovieGenreSelection() {
        console.log('hello I am other click function');
        let selectedGenreArray = [];
        // let checkedGenres = $(':checkbox:checked');
        $(':checkbox:checked').each(function (i) {
            selectedGenreArray[i] = $(this).val();
        })
    let genreString = selectedGenreArray.join(' , ');
    console.log(genreString);
    return genreString;
    }


$('#sendNewMovie').click(function () {
    console.log('hello');
    let randomnum = Math.floor(Math.random() * poster.length);
    let newMovie = {
        title: document.querySelector('#movieTitle').value,
        rating: document.querySelector('#rating').value,
        poster: poster[randomnum],
        year: document.querySelector('#year').value,
        genre: newMovieGenreSelection(),
        director: document.querySelector('#director').value,
        plot: document.querySelector('#plot').value,
        actors: document.querySelector('#actors').value,
    }
    console.log(newMovie);
    console.log(parseInt(newMovie.year));
    if ((Number(newMovie.year))) {
        console.log('is a num');
        postmovie(newMovie)
    } else {
        alert("Please enter a numerical year");
    }
})


// User selected genre
$(document).on('click', '.dropdown-item', function () {
    $(this).parents('.dropdown-menu').prev().html($(this).html());
    let genreSelection = $(this).html();
    sortGenreFx(genreSelection);
});

// Returns array of movies by the genre selected by user
function sortGenreFx(selectedGenre) {
    fetch(url)
        .then(r => r.json())
        .then(data => {

            let filteredByGenreArray = data.filter(dataByGenre => dataByGenre.genre.toLowerCase().includes(selectedGenre.toLowerCase()));
            if (selectedGenre.toLowerCase() == "all"){
                location.reload()
            }else if (filteredByGenreArray.length === 0) {
                alert(`There are no movies with the genre: ${selectedGenre}`);
                location.reload();
            }
            getCards(filteredByGenreArray);
        })
        .catch(error => console.log(error))
}

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