//not linked to html
//isn't being ran

//lyrics api testing variable
// any spaces must be converted into dashes ie. -
// let artist = 'metallica'
// let title = 'so what'

export function getLyrics(artist, title) {
    let dashArtist = artist.replace(/\s+/g, '-');
    let dashTitle = title.replace(/\s+/g, '-');

    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(function (response){
        // console.log(response)
        return response.json();
    })
    .then(function (data){
        console.log(data)
        displayLyrics(data.lyrics)

    } )
}

export function displayArtistInfo(artist, songTitle) {
    $('#artistInfo').html("")
    let artistInfoEl = 
    $(`<p> ${artist}</p>
        <p>${songTitle}</p>`
        // <img src="https://picsum.photos/200">`
    )
    // random picture generator added to atleast make it look graphical
    // doesn't change between reloads
    $('#artistInfo').append(artistInfoEl)
}

function displayLyrics (lyrics) {
    $('#lyrics').html("")
    console.log(lyrics)
    // added breaks in the lyrics
    let lyrics1 = lyrics.replace(/\n\n/g , "\n");
    let newLyrics = lyrics1.replace(/\n/g , "<br>");
    console.log(newLyrics)
    let lyricsEl = 
        $(`<div class="">${newLyrics}</div>`
    )
    $('#lyrics').append(lyricsEl)
}