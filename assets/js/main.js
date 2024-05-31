/* The main logic controller for the application which
   imports from additional modules/libraries as needed
*/

import { getCount } from "./swears.js";



const t = `
[I. Introduction – Instrumental]
[II. Never Pass Away]
With the slip of hand and a boombox
I am the man with a plan and the drum drops
Going off to a place that I never knew
I don't mind doin' time goin' solo
All I know is there's so much I don’t know
I’m just lookin' for something to fall into

I’m in control of having no control
Drudgery days I had to let them go
And seek to find
Some peace in my mind
And not look behind

But there’s a road in the blazing sun
There's a flow that I can’t outrun
I’ve got to find my life my way
To a world that will never pass away

In the heat of the day pushin’ midnight
I got nothing to say that’s a sound byte
Life's too short for a bottom line
I don't want a cliché or a peep show
Say what you gotta say and then let's go
The world is waiting on the other side

There was a way I lived in humble pride
Everyday in spiritual genocide
The desert sand
The days of the damned
Left holes in my hand

But there’s a road in the blazing sun
There's a flow that I can’t outrun
I’ve got to find my life my way
To a world that will never pass away

But there's a road in the blazing sun
There's a flow that I can't outrun
I've got to find the truth my way
To a world that will never pass away
Never pass away

The bottom drops out and you're nowhere
Nowhere to be found
Lost in the tide of the other side
In the city of the sound
It didn't take long to change you
Promised son to a re-run
But truth never dies so lift your eyes
Forward to the... forward to the sun

[III. Losing Your Soul]
Live like a face card hangin’ in the window
You’re a big band blastin’ on the 4th of July
You got the babe Nazi - got the paparazzi
You can tell them all to wait 'cause their rules don’t apply…let’s fly!

Jesus you loved him once when you were little
But you can't play second fiddle for some pie in the sky
Now the nice kid’s cigar is gettin’ fatter
But it doesn’t really matter cause we're all gonna die
And you lie - while gain the world's control
You might be losing your soul

The Calendar kid and the thin Mad Hatter
They all keep getting fatter from the seeds that you sow
It's really all you; you tell them you’re a family
You’re a racer-embracer but it's all just a show
So you lie - you might hit the highest goal
But you’re still losing your soul
So you lie - while you gain the world's control
You might be losing your soul
You might be losing your soul

[IV. The Mystery]
Looking back you're reminded of the numerous losses
The losses that you knew from a previous plague
In spite of the knowing and rather than growing
You come up with excuses intentionally vague

With obvious lack of heartfelt care
Stripped of all feeling emotionally bare
You find yourself just standing there
Trying to explain the mystery

Stagnant love of former generations
Built on pretense and conditional love
Your selfish soul feeds on past revelation
Holding the mystery in history’s glove

With obvious lack of heartfelt care
Stripped of all feeling emotionally bare
You find yourself just standing there
Trying to explain the mystery

[V. Some Kind Of Yesterday]
Timeline
Leaves you blind
No sense of depth or height
Beyond you
You step into
The raining rays of light

Some kind of yesterday
Is calling you from worlds away
And I've come to let you know
You can’t get in without letting go
Let this other life
Have
Control

Sunshine
Pours like wine
You’re standing at the door
A silhouette
It’s like you’ve met
But never known before

Some kind of yesterday
Is calling you from worlds away
And I've come to let you know
You can’t get in without letting go

And some kind of yesterday
Is calling you from worlds away
The one you believed in then
Whose love for you will never end
He's calling you to rise
Rise Again!

[VI. Never Pass Away (Reprise)]
So the days in the desert sand
Makes the way for the happy man
By the blood of his greatest friend
Comes the one who has life again

'Cause there's a road in the blazing sun
There's a truth that I can't outrun
He led me out from the smoke and ash
With His love that'll never pass away

There's not much more I have to say
But that this place isn't far away
For all the ones lookin' for a place to stand
For everyone stranded in the cold dry land

There's a road in the blazing sun
There's a truth that I can’t outrun
He’ll raise us up from the smoke and ash
There’s a love that'll never pass away

There's a day that'll surely come
When we’ll rise like the blazing sun
And we'll stand glorious at last
In a world that'll never pass
It'll never pass
It'll never pass away`;

const v = `(Originally recorded by Anti Nowhere League)
<br>So fucking what!
<br>Well, I've been to Hastings and I've been to Brighton,
<br>I've been to Eastbourne too.
<br>So what, so what.<br>And I've been here, I've been there,<br>I've been every fucking where.<br>So what, 
so what.<br>So what, so what, you boring little cunt.<br>Well, who cares, who cares what you do.<br>Yeah, who cares, 
who cares about you, you, you, you, you.<br>Well, I fucked a queen, I fucked fuck,<br>I've even sucked an old man's 
cock.<br>So what, so what.<br>And I fucked a sheep, I fucked a goat,<br>I rammed my cock right down its throat.<br>So 
what, so what.<br>So what, so what, you boring little fuck.<br>Well, who cares, who cares what you do.<br>And, who cares, 
who cares about you, you, you, you, you.<br>And I've drunk that, I've drunk this,<br>I've spewed up on a pint of piss.<br>So 
what, so what.<br>I've had scank, I've had speed,<br>I've jacked up until I bleed.<br>So what, so what.<br>So what, so what, you 
boring little cunt.<br>Well, who cares, who cares what you do.<br>Yeah, who cares, who cares about you, you, you, you, you, you.
<br>I've had crabs, I've had lice,<br>I've had the clap and that ain't nice.<br>So what, so what.<br>I fucked this, I fucked that,
<br>I've even fucked a school girl's twat.<br>So what, so what.<br>So what, so what, you boring little fuck.<br>Well, who cares, who 
cares what you do.<br>And, who cares, who cares about you, you, you, you, you, you.<br>So fucking what! Yeah!`

console.log(getCount(v).then((s)=> console.log("Swears Count: " + s)));
import { billboard, getTop10 } from "./billboard.js";
import { displayArtistInfo, getLyrics } from "./lyrics.js";

//hard coded in for testing

// getLyrics(artist, songTitle)
// displayArtistInfo(artist, songTitle)
billboard()
// console.log(billboard())
// console.log(rank)

billboard()
$( `.billboardArtist` ).on( "click", function(event) {
   console.log(event.target)
   // console.log(event.target.id.replace(/rank/, ''))
   let rank = Number(event.target.id.replace(/rank/, ''))
   const top10songs = JSON.parse(localStorage.getItem('billboardObj'))
   // console.log(top10songs[(rank - 1)].artist.split("&"))
   // console.log(top10songs[(rank - 1)].title)
   let artist = top10songs[(rank - 1)].artist.split('&')
   let songTitle =  top10songs[(rank - 1)].title
   getLyrics(artist[0], songTitle)
   displayArtistInfo(artist, songTitle)
} );


document.getElementById("searchBtn").addEventListener("click", function (event) {
  event.preventDefault();
  let artistName = document.getElementById("artistNameInput").value;
  let songName = document.getElementById("songNameInput").value;
 
  //const artistSong = document.getElementById("artist-song");
//  const button = document.createElement("button");
//   button.textConte nt = `${artistName} - ${songName}`;
//   button.classList.add("btn", "btn-ghost");
//   artistSong.appendChild(button);
console.log(artistName, songName);
  getLyrics(artistName, songName);
  displayArtistInfo(artistName, songName)
  const modal = document.getElementById("my_modal_3");
  modal.close();
});



 
