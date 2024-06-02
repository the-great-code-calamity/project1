// any spaces must be converted into dashes ie. -

export async function getLyrics(artist, title) {
  let dashArtist = artist.replace(/\s+/g, "-");
  let dashTitle = title.replace(/\s+/g, "-");
  try{
    let lyrics = await
  
  fetch(`https://api.lyrics.ovh/v1/${dashArtist}/${dashTitle}`, 
    {mode: "cors"} 
  )
    .then(function (response) {
      if(response.ok)
        return response.json();
      else return Promise.reject("Unable to get response from lyric api")
      
    })
    .then(function (data) {
      console.log(data);
      displayLyrics(data.lyrics);
      return data.lyrics;
    });
    return lyrics;
  }catch(err){
    console.log(err);
    return "";
  }
}

export function displayArtistInfo(artist, songTitle) {
  $("#artistInfo").html("");
  let artistInfoEl = $(`<p> ${artist}</p>
        <p>${songTitle}</p>`);
  // <img src="https://picsum.photos/200">`
  $("#artistInfo").append(artistInfoEl);
}

function displayLyrics(lyrics) {
  if (lyrics) {
    $("#lyrics").html("");
    let lyrics1 = lyrics.replace(/\r\n/g, "\n");
    // console.log(lyrics1);
    let lyrics2 = lyrics1.replace(/\n\n/g, "\n");
    // console.log(lyrics2);
    let newLyrics = lyrics2.split("\n");

    for (let i = 0; i < newLyrics.length; i++) {
      let pEl = document.createElement("p");
      pEl.textContent = newLyrics[i];
      document.getElementById("lyrics").append(pEl);
    }
  } else {
    let lyricsEl = $(`<div class="">No lyrics found</div>`);
    $("#lyrics").append(lyricsEl);
  }
}
