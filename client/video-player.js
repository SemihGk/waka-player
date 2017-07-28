
let instance = null;

class VideoPlayer {
  constructor () {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

}

const videoPlayer = new VideoPlayer();
export default videoPlayer;
