const player = Symbol('player');

export default class VideoPlayer {
  constructor () {
    const Class = this.constructor;

    if (!Class[player]) {
      Class[player] = this;
    }

    return Class[player];
  }

  get player () {
    return this._player;
  }

  set player (_player) {
    if (_player) {
      this._player = _player;
    }
  }

  getErrorMessage (message) {
    console.log(message);
  }
}
