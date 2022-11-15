var audio = document.createElement('audio');
var source = document.createElement('source');
var media = document.getElementById('media');
media.appendChild(audio);
audio.appendChild(source);
source.setAttribute('src', './assets/sounds/Come-Play-with-Me.mp3');
source.setAttribute('type', 'audio/mpeg');
audio.setAttribute('controls', 'controls');