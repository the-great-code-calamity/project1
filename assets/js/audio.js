/** Audo logic */

import { send } from "./shazamApi.js";

export function recordStart(){
    console.log("recording");
    send("something");
}

export function recordStop(){
    console.log("recording stopped");
}