/** This is modular js for calling the swear filter api available from https://www.purgomalum.com */

const BASE = `https://www.purgomalum.com/service/json?&fill_text=%2A%2A%2A%2A%2A%2A&text=`;


/**
 * Get a count of the number of vulgarities in a song's lyrics
 * @param string lyric -- song lyrics
 * @param function callback function to update
 * @returns 
 */
export async function getCount(lyric) {
  if (!lyric) return 0;

  let total = 0

  //get the chuncks from splitting text > 2k
  const chunks = chunk(lyric, null);
  const clen = chunks.length;

  for(let i=0; i< clen; i++){
    let x = await counter(chunks[i]);
    total += x;
    // console.log(total);
  }
  // console.log(total)
  return calcPercentage(total);

}

/** A rough parental guidance algorithm
 * @param number found profanity instances
 * *note: the found instances are based on what
 * was discovered by the profanity api which doesn't 
 * account for more moderate profanity so this affects
 * the weight of profanity calc used (i.e. #found is more severe)
 */
function calcPercentage(found){

  if(found > 10) return 100;
  else if(found >= 2 && found >= 10) return 50;
  else if(found == 1) return 10;
  return 0;
}

/**
 * Gets count for a chunk
 * @param string chunk 
 * @param number total 
 * @returns 
 */
async function counter(chunk) {

  let t = 0;
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
