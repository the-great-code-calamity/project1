/* The main logic controller for the application which
   imports from additional modules/libraries as needed
*/

/* make use of the record start/stop from the audio library */

import { recordStart, recordStop } from "./audio.js";
import { billboard, getTop10, billboardClick } from "./billboard.js";
import { displayArtistInfo, getLyrics } from "./lyrics.js";

//hard coded in for testing
let artist = 'metallica'
let songTitle = 'one'

getLyrics(artist, songTitle)
displayArtistInfo(artist, songTitle)
billboard()
// console.log(billboard())
// console.log(rank)

billboard()
$( `.billboardArtist` ).on( "click", function(event) {
   console.log(event.target.id.replace(/rank/, ''))
   let rank = Number(event.target.id.replace(/rank/, ''))
   const top10songs = JSON.parse(localStorage.getItem('billboardObj'))
   // console.log(top10songs[(rank - 1)].artist)
   // console.log(top10songs[(rank - 1)].title)
   let artist = top10songs[(rank - 1)].artist
   let songTitle =  top10songs[(rank - 1)].title
   getLyrics(artist, songTitle)
   displayArtistInfo(artist, songTitle)
} );
