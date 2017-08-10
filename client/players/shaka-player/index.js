/**
 * Import shaka player libraries
 *
 */
if (process.env.NODE_ENV === 'development') {
  require('!script-loader!shaka-player/third_party/closure/goog/base');
  require('!script-loader!shaka-player/dist/deps');
  require('!script-loader!shaka-player/shaka-player.uncompiled');
} else {
  require('!script-loader!shaka-player/dist/shaka-player.compiled');
}

import VideoPlayer from 'core/video-player';

export default class ShakaPlayer extends VideoPlayer {
  constructor () {
    super();
    this.initPlayer();
  }

  initPlayer () {
    setTimeout(() => {
      const shaka = window.shaka;
      shaka.polyfill.installAll();

      if (!shaka.Player.isBrowserSupported()) {
        return this.getErrorMessage('Browser is not supported!');
      }

      // construct player
      const videoTag = document.getElementById('video');
      console.log(shaka);
      const player = new shaka.Player(videoTag);

      // set error function
      player.addEventListener('error', this.getErrorMessage);

      // Load source
      const manifestUri = '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
      player.load(manifestUri).then(function () {
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
      })
        .catch(this.getErrorMessage);

      this._player = shaka;
    }, 100, this);
  }

  play () {
    console.log('played');
  }

  stop () {
    console.log('stoped');
  }

}
