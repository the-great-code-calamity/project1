/* The main logic controller for the application which
   imports from additional modules/libraries as needed
*/
document.getElementById('searchBtn').addEventListener('click', function() {
  
   const artistName = document.getElementById('artistNameInput').value
   const songName = document.getElementById('songNameInput').value
   console.log('Artist Name:', artistName);
   console.log('Song Name:', songName);
})




/* make use of the record start/stop from the audio library */
import { recordStart, recordStop } from "./audio.js";
