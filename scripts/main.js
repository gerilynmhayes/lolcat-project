var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();

var updateClock = function() {

var message = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FPrASdleOrnZ9C%2Fgiphy.gif&f=1&nofb=1";

if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
	  image = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fteresainfortworth.files.wordpress.com%2F2013%2F03%2Fcat-party.jpg&f=1&nofb=1";
} else if (time == napTime) {
    messageText = "IZ NAP TIME...";
		image = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.catsvscancer.org%2Fwp-content%2Fuploads%2F2014%2F08%2Fcats_purrfect-cat-nap_technology-kitten-lazy.jpg&f=1&nofb=1";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnph.upi.com%2Fsvc%2Fsv%2Fi%2F6341491227290%2F2017%2F1%2F14912285505923%2FHungry-cats-ring-bells-for-treats.jpg&f=1&nofb=1";
} else if (time == wakeupTime) {
    messageText = "WAKEY, WAKEY! MEOW MIX 'N' BAKEY!.";
	image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FPrASdleOrnZ9C%2Fgiphy.gif&f=1&nofb=1";
} else if (time < noon) {
    messageText = "Good morning!";
	  image = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffrontpagemeews.com%2Fwp-content%2Fuploads%2F2016%2F07%2Fcatnip-cover-photo-1.jpg&f=1&nofb=1";
} else if (time > evening) {
    messageText = "Good Evening!";
	  image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thehappycatsite.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fdo-cats-smile.jpg&f=1&nofb=1";
} else {
    messageText = "Good afternoon!";
	  image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frutheh.files.wordpress.com%2F2010%2F12%2Ffredsmellsflowers.jpg&f=1&nofb=1";
}

message.innerText = messageText;
lolcat.src = image;

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

showCurrentTime(); 
	
};

updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);