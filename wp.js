/*    
var lnk = document.createElement("A");
lnk.href = "https://goteborgfilmfestival.daily.co/3PVWLU1HeQA3vOzUCAWM";
lnk.target = "_blank";
lnk.innerHTML = "Chat";
lnk.classList.add("thisisthelink");
document.body.appendChild(lnk);
*/
var scr = document.createElement("script");
scr.src="https://js.pusher.com/7.0/pusher.min.js";

scr.addEventListener("load", function(){
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('5e67b5683b7ec9f398b4', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('play', function(data) {
      document.querySelector('main.jss1 .MuiButtonBase-root.MuiIconButton-root[type="button"]').click()
    });
    
    channel.bind('pause', function(data) {
        document.querySelector('#hp-controls > div > div:first-child').click()
    });
    channel.bind('chat', function(data) {
        document.querySelector('.thisisthelink').click()
    });
});
document.body.appendChild(scr);

var daily = document.createElement("script");
daily.src = 'https://unpkg.com/@daily-co/daily-js';
daily.crossOrigin = '';
daily.addEventListener("load", function(){
    callFrame = window.DailyIframe.createFrame();
    callFrame.join({ url: 'https://goteborgfilmfestival.daily.co/3PVWLU1HeQA3vOzUCAWM' });
});
document.body.appendChild(daily);
