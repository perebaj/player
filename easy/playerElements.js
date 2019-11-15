export default {
    get() {
      this.cover = document.querySelector(".card-image");
      this.title = document.querySelector(".card-content h5");
      this.artist = document.querySelector(".artist");
      this.playPause = document.querySelector("#play-pause");
      this.vol = document.querySelector("#vol");
      this.volControl = document.querySelector("#vol-control");
      this.seekbar = document.querySelector("#seekbar");
      this.currentDuration = document.querySelector("current-durantion");
      this.totalDuration = document.querySelector("total-durantion");

    },

    createdAudioelement(audioFile){
        this.audio = new Audio(audioFile); //objeto que carrega a caminho de onde estã os dados dos audios


    },

    actions(){
      this.playPause.onclick = () => this.togglePlayPause();
      this.vol.onclick = () => this.toggleMute();
      //barra de volume
      this.volControl.oninput = () => this.setVolume(this.volControl.value);
      this.volControl.onchange = () => this.setVolume(this.volControl.value);
      //barra de tempo 
      
      this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
      this.seekbar.onchange = () => this.setSeek(this.seekbar.value);

      // this.totalDuration.innerTexyt = this.audio.duration;
    },
 
};