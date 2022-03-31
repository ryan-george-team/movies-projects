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
                html += `<div class="card col-md-6" style="width: 18rem;">
  <img src="${movieData[i].poster}" class="card-img-top pt-2" alt="${movieData[i].title} movie poster" style="height: 200px; width: 150px">
  <div class="card-body">
    <h5 class="card-title">${movieData[i].title}</h5>
    <p class="card-text">${movieData[i].plot}</p>
    <button class="btn btn-primary delete" id="${movieData[i].id}">Delete</button>
    <a href="#" class="btn btn-primary">More Info</a>
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
};

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
    if (!isNaN(Number(newMovie.year))) {
        console.log('is a num');
        test(newMovie);
    }
    else {
        alert("Please enter a numerical year");
    }
})

function test(testMovie) {
    console.log(testMovie.year);
}

// function addCard() {
//     html += `<div class="card" style="width: 18rem;">
//   <img src="${movieData[i].poster}" class="card-img-top" alt="${movieData.title} movie poster" style="height: 200px; width: 150px">
//     <div class="card-body">
//         <h5 class="card-title">${.title}</h5>
//     <p class="card-text">${movieData[i].plot}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>`
// };



