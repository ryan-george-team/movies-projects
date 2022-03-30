const omethods ={
    method :'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};


fetch('https://raspy-peaceful-alarm.glitch.me/movies', omethods)
    .then(res => res.json())
    .then(movieData => {
        console.log(movieData)
    })
.catch(error => console.log(error))