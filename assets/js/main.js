/* The main logic controller for the application which
   imports from additional modules/libraries as needed
*/

/* make use of the record start/stop from the audio library */
import { recordStart, recordStop } from "./audio.js";

import { getCount } from "./swears.js";

// console.log(getCount(`(Originally recorded by Anti Nowhere League)
// <br>So fucking what!
// <br>Well, I've been to Hastings and I've been to Brighton,
// <br>I've been to Eastbourne too.
// <br>So what, so what.<br>And I've been here, I've been there,<br>I've been every fucking where.<br>So what, 
// so what.<br>So what, so what, you boring little cunt.<br>Well, who cares, who cares what you do.<br>Yeah, who cares, 
// who cares about you, you, you, you, you.<br>Well, I fucked a queen, I fucked fuck,<br>I've even sucked an old man's 
// cock.<br>So what, so what.<br>And I fucked a sheep, I fucked a goat,<br>I rammed my cock right down its throat.<br>So 
// what, so what.<br>So what, so what, you boring little fuck.<br>Well, who cares, who cares what you do.<br>And, who cares, 
// who cares about you, you, you, you, you.<br>And I've drunk that, I've drunk this,<br>I've spewed up on a pint of piss.<br>So 
// what, so what.<br>I've had scank, I've had speed,<br>I've jacked up until I bleed.<br>So what, so what.<br>So what, so what, you 
// boring little cunt.<br>Well, who cares, who cares what you do.<br>Yeah, who cares, who cares about you, you, you, you, you, you.
// <br>I've had crabs, I've had lice,<br>I've had the clap and that ain't nice.<br>So what, so what.<br>I fucked this, I fucked that,
// <br>I've even fucked a school girl's twat.<br>So what, so what.<br>So what, so what, you boring little fuck.<br>Well, who cares, who 
// cares what you do.<br>And, who cares, who cares about you, you, you, you, you, you.<br>So fucking what! Yeah!`));

let x = `(Originally recorded by Anti Nowhere League)
<br>So ****** what!
<br>Well, I've been to Hastings and I've been to Brighton,
<br>I've been to Eastbourne too.
<br>So what, so what.<br>And I've been here, I've been there,<br>I've been every ****** where.<br>So what, 
so what.<br>So what, so what, you boring little ****** .<br>Well, who cares, who cares what you do.<br>Yeah, who cares, 
who cares about you, you, you, you, you.<br>Well, I ****** a queen, I ******  ****** ,<br>I've even sucked an old man's ****** .<br>So what, so what.<br>And I ****** a sheep, I ****** a goat,<br>I rammed my ****** right down its throat.<br>So 
what, so what.<br>So what, so what, you boring little ****** .<br>Well, who cares, who cares what you do.<br>And, who cares, 
who cares about you, you, you, you, you.<br>And I've drunk that, I've drunk this,<br>I've spewed up on a pint of ****** .<br>So 
what, so what.<br>I've had scank, I've had speed,<br>I've jacked up until I bleed.<br>So what, so what.<br>So what, so what, you 
boring little ****** .<br>Well, who cares, who cares what you do.<br>Yeah, who cares, who cares about you, you, you, you, you, you.
<br>I've had crabs, I've had lice,<br>I've had the clap and that ain't nice.<br>So what, so what.<br>I ****** this, I ****** that,
<br>I've even ****** a school girl's ****** .<br>So what, so what.<br>So what, so what, you boring little ****** .<br>Well, who cares, who 
cares what you do.<br>And, who cares, who cares about you, you, you, you, you, you.<br>So ****** ing what! Yeah!`;
