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
    
    console.log('BILLBOARD FETCHED DANGER')

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

function displayTop10(billboardObj){
    
        $('#billboard').html("")
    
        for(let i = 0 ; i < 10; i++){

        let top10info = 
        $(`<button class="btn btn-ghost billboardArtist" id="rank${billboardObj[i].rank}">${billboardObj[i].rank}. ${billboardObj[i].artist} - ${billboardObj[i].title}</button>`
        )
        $('#billboard').append(top10info)
}}

export function billboard(){
    //checking if local storage exists
    //using local storage to prevent too much fetching of billboard api
if (top100Obj == null) {
    getTop10()
    console.log("Bill board sent to storage")
} 
    console.log('billboard pulled from storage')
     displayTop10(top100Obj)
    //  console.log(displayTop10(top100Obj))
}