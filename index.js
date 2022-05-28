$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});




let takeFilm = document.getElementById("films");
let recherche = document.getElementById("submit");

recherche.addEventListener("click", ()=> { 

    let titre = document.getElementById("title").value;

    async function getMovies() {
        const url = "https://www.omdbapi.com/?s=" + titre + "&plot=short&type=movie&apikey=2a4831ba"
        const response = await fetch(url)
        const data = await response.json()
        return data.Search
    }
    
    takeFilm.innerHTML = "";

    const data = getMovies().then(function (movies) {
        movies.forEach(function(movie){
            const divMovieCard = document.createElement("div")
            divMovieCard.classList.add("card");
        
            const img = document.createElement("img")
            img.classList.add("card-img-top");
            img.setAttribute("src", movie.Poster)
        
            const divCardBody = document.createElement("div")
            divCardBody.classList.add("card-body");
        
            const h5 = document.createElement('h5');
            h5.textContent= movie.Title + " : " + movie.Year
            h5.classList.add("card-title");
        
            const button = document.createElement("a")
            button.classList.add("btn");
            button.classList.add("btn-primary");
            button.setAttribute("href", "#")
            button.textContent = "Voir Plus"
        
            divMovieCard.appendChild(img)
            divMovieCard.appendChild(divCardBody)
            divCardBody.appendChild(h5)
            // divCardBody.appendChild(button)
            takeFilm.appendChild(divMovieCard)
        })
      
    })

})


    







//   "https://www.omdbapi.com/?s=the_matrix&plot=short&type=movie&apikey=2a4831ba"