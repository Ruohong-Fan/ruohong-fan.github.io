const audio = document.getElementById('audio');
const playPauseBtn = document.querySelector('.play-pause-btn');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');

function playAudio() {
    audio.play();
    playPauseBtn.innerHTML = '&#10074;&#10074;';
}

function pauseAudio() {
    audio.pause();
    playPauseBtn.innerHTML = '&#9658;';
}

function togglePlayPause() {
    if (audio.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

playPauseBtn.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', () => {
    playPauseBtn.innerHTML = '&#9658;';
});
