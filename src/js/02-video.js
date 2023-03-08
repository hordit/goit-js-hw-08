import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
let savedTimeUpdate;

player.on('timeupdate', throttle(onTimeUpdate, 1000));

try {
    savedTimeUpdate = JSON.parse(localStorage.getItem('videoplayer-current-time'));
} catch (error) {
    console.log(error);
};

function onTimeUpdate({ seconds }) {
    try {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    } catch (error) {
        console.log(error);
    }
}

try {
    if (savedTimeUpdate) {
        player.setCurrentTime(savedTimeUpdate);
    }
} catch (error) {
    console.log(error);
}

