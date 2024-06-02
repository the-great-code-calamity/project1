/** trying a different way to get some data via port message
 *  still doesn't bloody work
 */
class EDRAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputList, outputList, parameters) {
    console.log("processor : " + inputList.length)

    this.port.onmessage = (e) => {
        console.log("processormsg")
        return false
    }
    this.port.postMessage(inputList[0][0] > 0 ? inputList[0][0] : []);
    return true;
  }
}

registerProcessor("edr-audio-processor", EDRAudioProcessor);
