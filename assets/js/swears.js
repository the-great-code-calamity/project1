/** This is modular js for calling the swear filter api */

const BASE = `https://www.purgomalum.com/service/json?&fill_text=%2A%2A%2A%2A%2A%2A&text=`;

export async function getCount(lyric){
    if(!lyric)
        return -1;
    // console.log(lyric);

    let txt = await callApi(lyric);
        if(txt && txt.length > 0){
            return [...x.matchAll("\\*{6}")].length;
        }
        return -1;
}

async function callApi(lyric){

    try{
        let res = await fetch(BASE + encodeURI(lyric));
        if (res.status !== 200) {
            console.error(`error: swear filter: ${res.statusText}`);
          }
          let data = await res.json();  
          return data?.result || "";
    } catch(err){
        console.error("Error fetching swears api " + err);
        return -1;
    }
}