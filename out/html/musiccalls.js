let music_vinyl = 0;

mixtape_vinyl = function () {
    if (music_vinyl == 0) {
        document.getElementById("mixtape").src = "audio/vinyl.mp3";
        document.getElementById("mixtape").play();
        music_vinyl = 1;
    }
}


function mixtape_bar () {

    var audioDuration = document.getElementById("mixtape").duration;
    var currentAudioTime = document.getElementById("mixtape").currentTime; 
    var audio = document.getElementById("mixtape");
    var bar = document.getElementById("musicbar");
    var seeking = false;

    bar.max = audioDuration;
    bar.value = currentAudioTime;

    bar.oninput = () => (seeking = true);
    bar.onchange = () => {
      audio.currentTime = bar.value;
      if (!audio.paused) {
        audio.play();
      }
      seeking = false;
    };

    audio.ontimeupdate = () => {
      if (!seeking) {
        bar.value = currentAudioTime;
      }
    }
    
   
}



activate_mixtape = function () {
  document.getElementById("mixtape").addEventListener('timeupdate', function() {
      mixtape_bar();
  })
}