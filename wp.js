    
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
});
document.body.appendChild(scr);
