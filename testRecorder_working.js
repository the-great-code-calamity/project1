const downloadLink = document.getElementById('download');
const stopButton = document.getElementById('stop');

let rec = null;

const handleSuccess = function(stream) {
  const options = {mimeType: "audio/webm", numChannels: 1};
  const recordedChunks = [];
  const rec = new MediaRecorder(stream, options);

  rec.addEventListener('dataavailable', function(e) {
    
    if (e.data.size > 0){ 
        console.log(e.data);
        recordedChunks.push(e.data);
    }
  });
  // data:audio/webm;codecs=opus;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChY
  
  rec.addEventListener('stop', function() {
    let reader = new FileReader();
    console.log("******SIZE: " + recordedChunks.length);
    reader.readAsDataURL(new Blob(recordedChunks));
    reader.onload = function() {
      console.log(reader.result)
      downloadLink.href = reader.result; // data url
      downloadLink.download = 'test.audio'
    };
    // downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
    // downloadLink.download = 'acetest.wav';
  });

  stopButton.addEventListener('click', function() {
    rec.stop();
  });

  rec.start();
};

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(handleSuccess);