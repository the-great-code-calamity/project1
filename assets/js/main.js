/* The main logic controller for the application which
   imports from additional modules/libraries as needed
*/

document.getElementById("searchBtn").addEventListener("click", function () {
  let artistName = document.getElementById("artistNameInput").value;
  let songName = document.getElementById("songNameInput").value;
  console.log("Artist Name:", artistName);
  console.log("Song Name:", songName);

  const artistSong = document.getElementById("artist-song");
  const button = document.createElement("button");
  button.textContent = `${artistName} - ${songName}`;
  button.classList.add("btn", "btn-ghost");
  artistSong.appendChild(button);

  const modal = document.getElementById("my_modal_3");
  modal.close();
});



