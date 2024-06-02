import { sendAudio } from "./api.js";

/** Tried this original route for conversion of 32/16 but had issues
 *   with the script processor stuff or something that I don't remember
 *   any longer
 */

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

let audioCtx;

const record = document
  .getElementById("start")
  .addEventListener("click", handleRecord);

function stopRecording() {
  if (recorder) recorder.disconnect();
}

const stop = document.getElementById("stop").addEventListener("click", (e) => {
  console.log("STOP");
  stopRecording();
});

function doDownload(outdata) {
  //const PCM16iSamples = mergeBuffers(tracks, tracksSize);
  //console.log(JSON.stringify(PCM16iSamples));
  console.log(JSON.stringify(outdata));
  downloadLink.href = URL.createObjectURL(new Blob(outdata));
  downloadLink.download = "acetest.wav";
}

let recorder = null;

function handleRecord() {
  setTimeout(() => {
    stopRecording();
    console.log("Stop recording");
  }, 5000);
  navigator.mediaDevices

    .getUserMedia({ audio: true, video: false })
    .then(async (stream) => {
      const audioContext = new AudioContext();
      const sampleRate = audioContext.sampleRate;
      // creates a gain node
      const volume = audioContext.createGain();
      const audioInput = audioContext.createMediaStreamSource(stream);
      
      const bufferSize = 2048;
      recorder = 
        audioContext.createScriptProcessor(bufferSize, 1, 1);
        

      let tracks = [];
      let tracksSize = 0;

      recorder.onaudioprocess = function (event) {
        const samples = event.inputBuffer.getChannelData(0);
        // we clone the samples
        tracks.push(new Float32Array(samples));

        tracksSize += bufferSize;
      };

      volume.connect(recorder);
      recorder.connect(audioContext.destination);

       console.log(JSON.stringify(mergeBuffers(tracks, tracks)));
    })

    .catch((err) => console.log("CAUTH: " + err));
}
