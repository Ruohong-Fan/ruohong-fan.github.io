const audio = document.getElementById('audio');
const playPauseBtn = document.querySelector('.play-pause');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '❚❚';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶';
    }
});

audio.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});