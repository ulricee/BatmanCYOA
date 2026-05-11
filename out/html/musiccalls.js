let music_vinyl = 0;

mixtape_vinyl = function () {
    if (music_vinyl == 0) {
        document.getElementById("mixtape").src = "audio/vinyl.mp3";
        document.getElementById("mixtape").play();
        music_vinyl = 1;
    }
}