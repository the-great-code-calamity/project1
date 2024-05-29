/** This is modular js for calling the swear filter api available from https://www.purgomalum.com */

const BASE = `https://www.purgomalum.com/service/json?&fill_text=%2A%2A%2A%2A%2A%2A&text=`;

/**
 * Get a count of the number of vulgarities in a song's lyrics
 * @param string lyric -- song lyrics
 * @returns 
 */
export async function getCount(lyric) {
  if (!lyric) return -1;

  //get the chuncks from splitting text > 2k
  let chunks = chunk(lyric, null);
  let total = 0;
  //iterate the chunks and get swear count
  let res = chunks.forEach((c) => {
    total = counter(c, total);
  });
  return total;
}

/**
 * Gets count for a chunk
 * @param string chunk 
 * @param number total 
 * @returns 
 */
async function counter(chunk, total) {
  let t = total || 0;
  //call the api with the text
  let txt = await callApi(chunk);
  //use matchall with regex to get accounting
  if (txt && txt.length > 0) {
    t += [...txt.matchAll("\\*{6}")].length;
  }
  return t;
}

/**
 * Chunk a string into chunks not more than 2000 chars
 * @param string s
 * @param [string] arr
 * @returns an array containing the chunks
 */
function chunk(s, arr) {
  let ar = arr || [];
  //if the string is > 2k including the base uri then chunk it otherwise add to array
  if (BASE.length + s.length > 2000) {
    //how much of the string we actually need
    let len = 2000 - BASE.length;
    //account for breaking apart words so get index of last space
    let idx = s.substring(1, len).lastIndexOf(" ");
    //and get string up to the last space
    let a = s.substring(1, idx);
    //add to array
    ar.push(a);
    //recurse until string is under limit
    ar = chunk(s.substring(idx), ar);
  } else {
    //string is under limit so just add and return 
    ar.push(s);
  }
  return ar;
}

/**
 * call to the api to text replace vulgarities
 * @param string lyric
 * @returns promise with text replacement for vulgarities
 */
async function callApi(lyric) {
  try {
    let res = await fetch(BASE + encodeURI(lyric));
    if (res.status !== 200) {
      console.error(`error: swear filter: ${res.statusText}`);
    }
    let data = await res.json();
    return data?.result || "";
  } catch (err) {
    console.error("Error fetching swears api " + err);
    return "";
  }
}
