const b = document.getElementById("start");
const stop = document.getElementById("stop");
const boop = document.getElementById("boop").addEventListener("click", ()=> {
  clicked = true;
  record();
})

let clicked = false;
let isErr = false;
const chunks = [];
let ac = null; 
let wnode;
let mediaRecorder;


// new AudioContext(); 
// ac.suspend();

function record(){
  navigator.mediaDevices
  .getUserMedia({audio: true})
  .then(
    async (stream) => {
      if(!ac) ac = new AudioContext();

      await ac.audioWorklet.addModule("audio.js").then(()=> console.log("done")).catch((err) => {
        console.log(err);
        isErr = true;
      });

      wnode = new AudioWorkletNode(ac, "bitcrusher");
      const audioInput = ac.createMediaStreamSource(stream);
      const dest = ac.createMediaStreamDestination();
      mediaRecorder = new MediaRecorder(dest.stream);
      audioInput.connect(wnode).connect(ac.destination); //.connect(dest);
      mediaRecorder.start();
      stop.addEventListener("click", (e) => {
        console.log("STOP")
        wnode.disconnect();
        mediaRecorder.stop();
        //audioInput.stop();
        ac.suspend();
      })

      // b.addEventListener("click", (e) => {
      //   console.log("*****")
      //   if (isErr) {
      //     // wnode.stop(0);
      //     wnode.disconnect();
      //     //ac.suspend();
      //     return
      //   }
      
      //   if (!clicked) {
      //     console.log("11111")
      //     mediaRecorder.start();
      //     //ac.resume();
      //     // wnode.start(0);
      
      //     e.target.textContent = "Stop recording";
      //     clicked = true;
      //   } else {
      //     console.log("0000")
      //     mediaRecorder.stop();
      //     wnode.disconnect();
      //     // osc.stop(0);
      //     e.target.disabled = true;
      //   }
      // });

      mediaRecorder.ondataavailable = (evt) => {
        // Push each chunk (blobs) in an array

        console.log(`data: ${evt.data}`)
        chunks.push(evt.data);

      };
      
      mediaRecorder.onstop = (evt) => {
        // Make blob out of our blobs, and open it.
        // const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        // document.querySelector("audio").src = URL.createObjectURL(blob);
        console.log("STOPPED: " + JSON.stringify(chunks));
      };
    }
  )
}










