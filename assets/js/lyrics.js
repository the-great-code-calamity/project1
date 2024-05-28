//not linked to html
//isn't being ran

//lyrics api testing variable
// any spaces must be converted into dashes ie. -
// let artist = 'Frizk'
// let title = 'ALL MY FELLAS'


function getLyrics() {
    let dashTitle = title.replace(/\s+/g, '-');
    let dashArtist = artist.replace(/\s+/g, '-');
    fetch(`https://api.lyrics.ovh/v1/${dashArtist}/${dashTitle}`)
    .then(function (response){
        if (!response.ok){
            return ('Lyrics Unavailable!');
        }
        console.log(response)
        return response.json();
    })
    .then(function (data){
        console.log(data)

    } )
}

getLyrics(artist, title);
