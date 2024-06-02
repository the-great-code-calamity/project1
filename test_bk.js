import { sendAudio } from "./api.js";

const downloadLink = document.getElementById("download");
const stopButton = document.getElementById("stop");

function mergeBuffers(channelBuffer, recordingLength) {
  
  let result = new Float32Array(recordingLength);
  let offset = 0;

  for (let i = 0; i < channelBuffer.length; i++) {
    result.set(channelBuffer[i], offset);
    offset += channelBuffer[i].length;
  }

  const PCM32fSamples = Array.prototype.slice.call(result);
  const PCM16iSamples = [];

  for (let i = 0; i < PCM32fSamples.length; i++) {
    let val = Math.floor(32767 * PCM32fSamples[i]);
    val = Math.min(32767, val);
    val = Math.max(-32768, val);
    PCM16iSamples.push(val);
  }

  return PCM16iSamples;
}

// function createEDRAudio(audioContext){

//     async function doAsync(audioContext){
//     try{
//         await audioContext.audioWorklet.addModule("audio.js");
//     }catch(e){
//         console.log(e);
//         throw e;
//     }
//     return new AudioWorkletNode(audioContext, "edr-audio-processor");
//     }
//     if(!audioContext) return null;
//     return doAsync(audioContext);
// }

// const handleSuccess = function (stream) {
//   const audioContext = new AudioContext();
//   const volume = audioContext.createGain();
//   const audioInput = audioContext.createMediaStreamSource(stream);
//   audioInput.connect(volume);
//   const bufSize = 2048;
//   const leftChannel = [];
//   let recordingLength = 0;
//   audioContext.audioWorklet.addModule('audio.js')
//   let audionode = new AudioWorkletNode(audioContext, 'edr-audio-processor')

//   audionode.port.onmessage = (e) => {
//     leftChannel.push(e.data);
//     recordingLength += bufSize;
//   }

//   volume.connect(audionode);
//   audionode.connect(audioContext.destination());

//   for(let i=0; i < 50000; i++){}

//   audionode.disconnect();
//   console.log("********    " + leftChannel.length)

//   const PCM16iSamples = mergeBuffers(leftChannel, recordingLength);
// };

let audioCtx;
let tracks = [];
let tracksSize = 0;

const record = document
  .getElementById("start")
  .addEventListener("click", handleRecord);

function stopRecording() {
  if (audioCtx) audioCtx.close();
}

const stop = document.getElementById("stop").addEventListener("click", (e) => {
  console.log("STOP");
  stopRecording();
});

function doDownload(){
    const PCM16iSamples = mergeBuffers(tracks, tracksSize);
    console.log(JSON.stringify(PCM16iSamples));
    downloadLink.href = URL.createObjectURL(new Blob(PCM16iSamples));
    downloadLink.download = "acetest.wav";
}


function handleRecord() {
  //setTimeout(stopRecording, 5000);
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(async (stream) => {
  
      const bufferSize = 2048;

      audioCtx = new AudioContext();
      await audioCtx.audioWorklet.addModule("audio.js");
      const audioInput = audioCtx.createMediaStreamSource(stream);
      let audionode = new AudioWorkletNode(audioCtx, "edr-audio-processor");

      audionode.port.onmessage = (e) => {
        console.log("HAVE MESSAGE");
        tracks.push(e.data);
        tracksSize += bufferSize;
        console.log(
          `Tracks: ${tracks.length}, Track[0]: ${tracks[0]}, Buffer: ${tracksSize}`
        );
        if (tracks.length > 1000) {
            // audioInput.disconnect();
            // audionode.disconnect();
            audionode.port.postMessage("close");
            audionode.port.close();
            
          stream.getTracks().forEach(t => t.stop());
          doDownload();
          try {
            audioCtx.close();
          } catch (e) {
            console.log(e);
          }
          
          
        }
      };

      audioInput.connect(audionode).connect(audioCtx.destination);
    })
    .catch((err) => console.log("CAUTH: " + err));
}
