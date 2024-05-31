/* The main logic controller for the application which
   imports from additional modules/libraries as needed
*/

/* make use of the record start/stop from the audio library */

import { recordStart, recordStop } from "./audio.js";
import { billboard, getTop10 } from "./billboard.js";
import { displayArtistInfo, getLyrics } from "./lyrics.js";

//hard coded in for testing

// getLyrics(artist, songTitle)
// displayArtistInfo(artist, songTitle)
billboard()
// console.log(billboard())
// console.log(rank)

billboard()
$( `.billboardArtist` ).on( "click", function(event) {
   console.log(event.target)
   // console.log(event.target.id.replace(/rank/, ''))
   let rank = Number(event.target.id.replace(/rank/, ''))
   const top10songs = JSON.parse(localStorage.getItem('billboardObj'))
   // console.log(top10songs[(rank - 1)].artist.split("&"))
   // console.log(top10songs[(rank - 1)].title)
   let artist = top10songs[(rank - 1)].artist.split('&')
   let songTitle =  top10songs[(rank - 1)].title
   getLyrics(artist[0], songTitle)
   displayArtistInfo(artist, songTitle)
} );


document.getElementById("searchBtn").addEventListener("click", function (event) {
  event.preventDefault();
  let artistName = document.getElementById("artistNameInput").value;
  let songName = document.getElementById("songNameInput").value;
 
  //const artistSong = document.getElementById("artist-song");
//  const button = document.createElement("button");
//   button.textConte nt = `${artistName} - ${songName}`;
//   button.classList.add("btn", "btn-ghost");
//   artistSong.appendChild(button);
console.log(artistName, songName);
  getLyrics(artistName, songName);
  displayArtistInfo(artistName, songName)
  const modal = document.getElementById("my_modal_3");
  modal.close();
});



 