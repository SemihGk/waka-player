import ShakaPlayer from 'players/shaka-player';
// import HlsPlayer from 'players/hls-player';

class App {
  constructor (props) {
    this.shaka = new ShakaPlayer();
    // this.hls = new HlsPlayer();

    this.shaka.play();
    console.log(this.shaka);
    this[props] = props;
  }

}

const app = new App();

export default app;
