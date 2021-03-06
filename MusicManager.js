function MusicManager(){
    this.music = document.createElement('audio');
    this.loaded = false;
    var that = this;
    this.music.addEventListener("ended", function(){
        this.currentTime=0;
        this.play();
    }, false);
    this.music.addEventListener("loadeddata", function(){that.loaded; that.loaded = true;this.play()});
    this.music.addEventListener("canplay", function(){that.loaded; that.loaded = true;this.play()});
    this.music.volume = 1;
    if(this.music.canPlayType("mp3")){
        this.music.src = "resources/music/windwillmusic.mp3";
    }else{
        this.music.src = "resources/music/windwillmusic.ogg";
    }

    this.music.setAttribute('style', 'display:none;');
    document.body.appendChild(this.music);
}

window.addEventListener('keydown', function(e) {
    if (e.keyCode == 77) { // m
        music.music.muted = !music.music.muted;
    }
});
