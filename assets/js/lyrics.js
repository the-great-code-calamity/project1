//not linked to html
//isn't being ran

//lyrics api testing variable (Do not change it, I will be very sad. -DH)
// any spaces must be converted into dashes ie. - (Done - DH)
// let artist = 'FRIZK'
// let title = 'ALL MY FELLAS'

// Remember to add export when done testing
export function getLyrics(artist, title) {
    let dashArtist = artist.replace(/\s+/g, '-');
    let dashTitle = title.replace(/\s+/g, '-');
    fetch(`https://api.lyrics.ovh/v1/${dashArtist}/${dashTitle}`)
    .then(function (response){
        if (!response.ok){
            // console.log("Bruh you goofy.")
            // If someone wanna fix this be my guest, this works but could be better.
            let data = []
            data.lyrics = 'Lyrics Unavailable!'
            return data;
        }
        console.log(response)
        return response.json();
    })
    .then(function (data){
        console.log(data);
        // Could be better, but it'll do for now.
        lyricsTarget = document.getElementById('lyricsContainer');
        artistTarget = document.getElementById('artistContainer');
        titleTarget = document.getElementById('titleContainer');

        // Fix lyrics to look more appealing
        let lyrics1 = data.lyrics.replace(/\r\n/g , "\r\n");
        console.log(lyrics1);
        let lyrics2 = lyrics1.replace(/\n\n/g , '\n\n');
        console.log(lyrics2);
        let newLyrics = lyrics2.replace(/\n/g , '\n');
        console.log(newLyrics);
        // Does da ting, what else can I say?
        lyricsTarget.textContent = newLyrics;
        artistTarget.textContent = artist;
        titleTarget.textContent = title;
    } )
}



// getLyrics(artist, title);
