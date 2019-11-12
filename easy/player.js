
//Objeto com elementos da minha página HTML e dados da pagina

window.player = {
    cover : document.querySelector(".card-image"),
    title : document.querySelector(".card-content h5"), 
    artist:  document.querySelector(".artist"),  
    audio : document.querySelector("audio"),
    audioList: audios, // lista de todos os audio no data base
    currentAudio: {}, // Conjunto de dados do audio que está sendo tocado
    currentPlaying: 1,
    lastTrack: audios.length,

    start() { //start : function ()
  
      this.updateTrack();
      this.audio.onended = () => this.nextTrack();
     
    },
    nextTrack() {
      this.currentPlaying ++;
      if(this.currentPlaying == this.lastTrack)
        this.currentPlaying = 0;
      this.updateTrack();
      this.audio.play();
    },
    updateTrack() {
      this.currentAudio = this.audioList[this.currentPlaying];
      this.cover.style.background = `url("${this.currentAudio.cover}") no-repeat center center / cover`;
      this.title.innerText = this.currentAudio.title;
      this.artist.innerText = this.currentAudio.artist;
      this.audio.src = this.currentAudio.file;
    }
  };

