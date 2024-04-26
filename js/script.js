fetch('https://api.tvmaze.com/shows')
.then(res=>res.json())
.then(data=>{getFilms(data);
})


var film=document.getElementById("my-film");
function getFilms(films){
    film.innerHTML="";



    films.forEach(char=>{
        film.innerHTML+=

       `<div class="col-md-2">
        <img src="${char.image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color:white;>${char.name}</h5>
          <p class="card-text" style="color:white;>${char.imdb}</p>
          <p class="card-text" style="color:white;">${char.network.name}</p>

          <p class="card-text" >${char.language}</p>

          <a href="#" class="btn btn-primary">About</a>
        </div>
      </div>;`
    })
}