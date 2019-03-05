let numOfClicks = 0;
function getMovie() {
    let url = 'https://www.omdbapi.com/?i=tt3896198&apikey=25182b57&t=';
    let userInput = document.getElementById('movieTitle').value;
    url += userInput;
    numOfClicks++;

    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        let movie = JSON.parse(req.responseText);
        let img = new Image();

        let h3 = document.getElementById('title');
        h3.append(movie.Title);
        let p = document.getElementById('desc');
        p.append(movie.Plot);
        let space_img = document.getElementById('space_img');
        space_img.append(img);
        img.src = movie.Poster;

    };
    req.send();

}




