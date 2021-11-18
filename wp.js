var daily = document.createElement("script");
daily.src = 'https://unpkg.com/@daily-co/daily-js';
daily.crossOrigin = '';
daily.addEventListener("load", function(){
    callFrame = window.DailyIframe.createFrame();
    callFrame.join({ url: 'https://goteborgfilmfestival.daily.co/3PVWLU1HeQA3vOzUCAWM' });
    callFrame.on("app-message", function(ev){
        if( ev && ev.data && ev.data.cmd ) {
            switch( ev.data.cmd ){
                case "toggle":
                    draken.toggleMine()
                    break;
                default:
                    break;
            }
        }
    });
});
document.body.appendChild(daily);

var btn = document.createElement("button");

var draken = {
    isPlaying: false,
    toggle: function(){
        callFrame.sendAppMessage( { cmd: 'toggle' }, '*' );
        draken.toggleMine();
    },
    
    toggleMine: function(){
        if( document.querySelector('#hp-controls > div > div:first-child') ){
            document.querySelector('#hp-controls > div > div:first-child').click()
        } else {
            document.querySelector('main.jss1 .MuiButtonBase-root.MuiIconButton-root[type="button"]').click()
        }
        
        draken.isPlaying = !draken.isPlaying;

        callFrame.setLocalVideo(!draken.isPlaying);
        callFrame.setLocalAudio(!draken.isPlaying);
        
        if(draken.isPlaying){
            btn.innerHTML = 'Stoppa';
        } else {
            btn.innerHTML = 'Starta';
        }

    }
};

btn.innerHTML = "Starta";
btn.style.position = 'fixed';
btn.style.bottom = '10px';
btn.style.right = '400px';
btn.style.backgroundColor = 'red';
btn.style.color = 'white';
btn.style.fontWeight = '700';
btn.style.border = 'none';
btn.style.padding = '10px';

btn.addEventListener('click', draken.toggle);
document.body.appendChild(btn);
