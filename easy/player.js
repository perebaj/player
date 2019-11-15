import audios from "./data.js";
import elements from "./playerElements.js";

/*HTML Audio/Video DOM Reference
The HTML5 DOM has methods, properties, and events for the <audio> and <video> elements.
These methods, properties, and events allow you to manipulate <audio> and <video> elements using JavaScript.

methods used:
play()
pause()
onended()

Property used:
muted
currentTime
volume
duration

*/
 export default  { // config play 
    audioList: audios, // lista de todos os audio no data base
    currentAudio: {}, // Conjunto de dados do audio que está sendo tocado
    currentPlaying: 0,
    lastTrack: audios.length,
    playing:false,
  
    //this.audio é um objeto criado em playerElements
    play() {
      this.audio.play(); 
      this.playing = true;
      this.playPause.innerText = "pause";
    },
    pause() {
      this.audio.pause();
      this.playing = false;
      this.playPause.innerText = "play_arrow";

    },
    setVolume(value){
      this.audio.volume = value/100;
    },
    setSeek(value){
      this.audio.currentTime = value;
    },
    togglePlayPause() {
      this.playing ? this.pause() : this.play();
    },
    toggleMute(){
      // console.log("teste");
      this.audio.muted = !this.audio.muted;
      if(this.audio.muted){
        this.vol.innerText = "volume_down";
        this.volControl.value = 0;
      }
      else{
        this.vol.innerText = "volume_down";
        this.volControl.value = 100;
        
      }
  
    },

    start() { //start : function ()
      elements.get.call(this);
      elements.actions.call(this);

      this.updateTrack();
      this.audio.onended = () => this.nextTrack();
     
    },
    nextTrack() {
      this.currentPlaying ++;
      if(this.currentPlaying == this.lastTrack)
        this.restart();
      this.updateTrack();
    },
    updateTrack() {
      this.currentAudio = this.audioList[this.currentPlaying];
      this.cover.style.background = `url("${this.currentAudio.cover}") no-repeat center center / cover`;
      this.title.innerText = this.currentAudio.title;
      this.artist.innerText = this.currentAudio.artist;

      //carregando o this de audio em playerElements
      elements.createdAudioelement.call(this, this.currentAudio.file)
      // this.seekbar.max = this.audio.duration;
      this.audio.onloadedate = () => {
        console.log(this.audio.duration);
      }

     
    },
    
    restart() {
      this.currentPlaying = 0;
      this.updateTrack;
    }
  };


