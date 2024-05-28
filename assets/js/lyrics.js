//not linked to html
//isn't being ran

//lyrics api testing variable
// any spaces must be converted into dashes ie. -
// let artist = 'Frizk'
// let title = 'ALL MY FELLAS'


export function getLyrics( artist, title) {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
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
