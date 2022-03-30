const url = "https://raspy-peaceful-alarm.glitch.me/movies";



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
