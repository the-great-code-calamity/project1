/* The main logic controller for the application which
   imports from additional modules/libraries as needed
*/

import { getCount } from "./swears.js";
import { billboard, getTop10 } from "./billboard.js";
import { displayArtistInfo, getLyrics } from "./lyrics.js";

// displayArtistInfo(artist, songTitle)
billboard();
// billboard()
// console.log(billboard())
// console.log(rank)

billboard();
$(`.billboardArtist`).on("click", function (event) {
  console.log(event.target);
  // console.log(event.target.id.replace(/rank/, ''))
  let rank = Number(event.target.id.replace(/rank/, ""));
  const top10songs = JSON.parse(localStorage.getItem("billboardObj"));
  // console.log(top10songs[(rank - 1)].artist.split("&"))
  // console.log(top10songs[(rank - 1)].title)
  let artist = top10songs[rank - 1].artist.split("&");
  let songTitle = top10songs[rank - 1].title;

  setSwearMeter(artist[0], songTitle);
  displayArtistInfo(artist, songTitle);
});

document
  .getElementById("searchBtn")
  .addEventListener("click", async function (event) {
    //event.preventDefault();
    let artistName = document.getElementById("artistNameInput").value;
    let songName = document.getElementById("songNameInput").value;

    console.log(artistName, songName);
    setSwearMeter(artistName, songName);
    displayArtistInfo(artistName, songName);
    const modal = document.getElementById("my_modal_3");
    modal.close();
  });

async function setSwearMeter(artistName, songName){
  //need the actual lyrics to feed to the profanity filter api
  let lyrics = await getLyrics(artistName, songName).then((lyrics) => {return lyrics});
  //set the swear meter
  getCount(lyrics).then((count) => updateSwearRange(count));
}

/**
 * Sets the value and coloring of the swear meter
 * @param number count - number of profanity instances found
 */
let updateSwearRange = (count)=> {
  console.log(count);
  let range = $("#swear-range");

  //clear the css before adding appropriate class
  range.removeClass("range-info", "range-warning", "range-error", "range-success");
  if(count === 0)
    range.addClass("range-success")
  else if(count === 10)
    range.addClass("range-info")
  else if(count === 50)
    range.addClass("range-warning")
  else
    range.addClass("range-error");
  //set the value
  range.attr("value", count);
  console.log(range.attr("value"));
}
