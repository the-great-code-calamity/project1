//not linked to html
//isn't being ran

//lyrics api testing variable
// any spaces must be converted into dashes ie. -
// let artist = 'metallica'
// let title = 'one'

export function getLyrics( artist, title) {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(function (response){
        console.log(response)
        return response.json();
    })
    .then(function (data){
        console.log(data)

    } )
}
