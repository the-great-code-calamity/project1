/* The main logic controller for the application which
   imports from additional modules/libraries as needed
*/
import { getLyrics } from "./lyrics.js";

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
  const modal = document.getElementById("my_modal_3");
  modal.close();
});



 