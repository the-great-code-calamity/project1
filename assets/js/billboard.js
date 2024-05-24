// https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=2022-10-08

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

// date needs to be in this format
// leaving date broken so that way app function can't run accidently
let date = "2022-10-08"

async function getTop100() {

    //copy and pasted from rapid api
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    }


// getTop100()



