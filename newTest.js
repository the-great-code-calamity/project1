let audioContext = null;
let wnode;
let soundSource;
let mediaRecorder;
const chunks = [];
let link = document.createElement('a');

async function createBitProcessor() {
    if (!audioContext) {
      try {
        audioContext = new AudioContext();
      } catch (e) {
        console.log("** Error: Unable to create audio context");
        return null;
      }
    }
  
    let processorNode;
  
    try {
      processorNode = new AudioWorkletNode(audioContext, "bitcrusher");
    } catch (e) {
      try {
        console.log("adding...");
        await audioContext.audioWorklet.addModule("audio.js");
        processorNode = new AudioWorkletNode(audioContext, "bitcrusher");
      } catch (e) {
        console.log(`** Error: Unable to create worklet node: ${e}`);
        return null;
      }
    }
  
    await audioContext.resume();
    return processorNode;
  }

  window.addEventListener("load", (event) => {
    document.getElementById("boop").addEventListener("click", toggleSound);
  });

  async function toggleSound(event) {
    if (!audioContext) {
      audioDemoStart();

    } else {
      await audioContext.close();
      audioContext = null;
      soundSource.disconnect();
      soundSource = null;
      mediaRecorder.stop();
    }
  }

  async function audioDemoStart() {
    navigator.mediaDevices
    .getUserMedia({audio: true})
    .then(
        async (stream) => {
            wnode = await createBitProcessor();
            if (!wnode) {
              console.log("** Error: unable to create bit processor");
              return;
            }
            soundSource = audioContext.createMediaStreamSource(stream);
            const dest = audioContext.createMediaStreamDestination();
            mediaRecorder = new MediaRecorder(dest.stream, {numberChannels:1, audioBitsPerSecond:44100});
            soundSource.connect(wnode).connect(dest);
            mediaRecorder.start();
            mediaRecorder.ondataavailable = (evt) => {
                // Push each chunk (blobs) in an array
        
                
                chunks.push(evt.data);
                console.log(`Size ${chunks.length}  data: ${(chunks[chunks.length -1]).slice(0).slice(0)}`)
                let reader = new FileReader();
                reader.readAsDataURL((chunks[chunks.length -1])); // converts the blob to base64 and calls onload
                
                reader.onload = function() {
                    console.log(reader.result); //.replace(`data:audio/webm;codecs=opus;base64,`, ""))
                  link.href = reader.result; // data url
                  link.click();
                };
              };
        }



    ).catch(err => console.error(err));
  }