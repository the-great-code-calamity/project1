/* The main logic controller for the application which
   imports from additional modules/libraries as needed
*/


//input items in modal and save to local storage
document.getElementById('searchBtn').addEventListener('click', function() {

   let artistName = document.getElementById('artistNameInput').value
   let songName = document.getElementById('songNameInput').value
   console.log('Artist Name:', artistName);
   console.log('Song Name:', songName);

   const newSongInfo = {
      artistName,
      songName,
   };

   let firstSongInfo = JSON.parse(localStorage.getItem('songData')) || [];
   firstSongInfo.push(newSongInfo);
  
   localStorage.setItem('songData', JSON.stringify(firstSongInfo));

   const modal = document.getElementById('my_modal_3');
   modal.close();

});
//get items from local storage and display on window
const data = localStorage.getItem('songData');
const parsedData = JSON.parse(data);
const artistSong = document.getElementById('artist-song');

for (let i = 0; i < parsedData.length; i++) {
   const button = document.createElement('button');
   button.textContent = `${parsedData[i].artistName} - ${parsedData[i].songName}`;
   button.classList.add('btn', 'btn-ghost');
   artistSong.appendChild(button);
};







/* make use of the record start/stop from the audio library */
import { recordStart, recordStop } from "./audio.js";
