import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const savedTimeUpdate = localStorage.getItem('videoplayer-current-time');

function onTimeUpdate({ seconds }) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));
player.setCurrentTime(savedTimeUpdate);
