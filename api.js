let options = {
    headers:{
        "Content-Type": "text/plain",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "x-rapidapi-key": "faf35894acmsh73d960edb8b2b2bp1dd7b2jsn5c61aaa3c59f"
    },
    method: "POST"
}

export async function sendAudio(bits){

    return await fetch('https://shazam.p.rapidapi.com/songs/v2/detect?timezone=America%2FChicago&locale=en-US', {...options, body:bits}).then(
        response => response.json()
    );

}