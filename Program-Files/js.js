
var audio=document.getElementById("audio");

function show(code){
document.addEventListener('keydown', function(e) {
if (e.keyCode ==9 ||  audio.duration >0 && !audio.paused){
audio.setAttribute('src', 'Program Files/change.wav');
audio.play();
}else if (e.keyCode == 17) {
switch(code){
case 'text':
audio.setAttribute('src', 'Program Files/sound.wav');
break;
case 'combo':
audio.setAttribute('src', 'Program Files/music.wav');
break;
default:
}
audio.play();
}
});

}

