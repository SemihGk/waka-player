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

  }

  play () {
    console.log('played');
  }

  stop () {
    console.log('stoped');
  }

}
