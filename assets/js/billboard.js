// https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=2022-10-08

// import { displayArtistInfo, getLyrics } from "./lyrics";

// THIS API ONLY ACCEPTS 40 REQUESTS A MONTH!!!
// DO NOT TEST FREELY
const url = 'https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=2022-10-08';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f8ac503a57msh1bcfd46d46d36d8p1ea995jsn5714eaa0fbd8',
		'x-rapidapi-host': 'billboard-api5.p.rapidapi.com'
	}
};

// export let rank = 0

const top100Obj = JSON.parse(localStorage.getItem('billboardObj'))
// date needs to be in this format
// leaving date broken so that way app function can't run accidently
let date = "2022-10-08"

export async function getTop10() {
    
    console.log('BILLBOARD FETCHED')

    //copy and pasted from rapid api
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        localStorage.setItem('billboardObj', JSON.stringify(result.chart.entries)) 
        return

    } catch (error) {
        console.error(error);
    }
}
function something () {
    console.log('dosomething')
}

function displayTop10(billboardObj){
    for(let i = 0 ; i < 10; i++){
        let top10info = 
        $(`<button class="btn btn-ghost billboardArtist" id="rank${billboardObj[i].rank}">${billboardObj[i].rank}. ${billboardObj[i].artist} ${billboardObj[i].title}</button>`
        )
        $('#billboard').append(top10info)
        
    // $( `#rank${billboardObj[i].rank}` ).on( "click", function(event) {
    //     console.log(i)
    //     console.log(event.target.id.replace(/rank/, ''))
    //     let rank = Number(event.target.id.replace(/rank/, ''))
    //     return rank;
    //     // const top10songs = JSON.parse(localStorage.getItem('billboardObj'))
    //     // console.log(top10songs[(rank - 1)].artist)
    //     // console.log(top10songs[(rank - 1)].title)
    //     // let artist = top10songs[(rank - 1)].artist
    //     // let songTitle =  top10songs[(rank - 1)].title
    //     // getLyrics(artist, songTitle)
    //     // displayArtistInfo(artist, songTitle)
    // } );
}}

export function billboard(){
    //checking if local storage exists
    //using local storage to prevent too much fetching of billboard api
if (top100Obj == null) {
    getTop10()
    console.log("to storage")
} 
    console.log('not tostorage')
     displayTop10(top100Obj)
    //  console.log(displayTop10(top100Obj))
}

export function billboardClick() {
    console.log("helllllp") }
