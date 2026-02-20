window.addEventListener('load', () => {
    // Sunucu Bilgileri
    document.getElementById('server-title').innerText = Config.ServerName;
    document.getElementById('server-slogan').innerText = Config.Slogan;

    // Random Background
    const randomBG = Config.Backgrounds[Math.floor(Math.random() * Config.Backgrounds.length)];
    document.querySelector('.background').style.backgroundImage = `url('${randomBG}')`;

    // Random Şarkı
    const randomSong = Config.Playlist[Math.floor(Math.random() * Config.Playlist.length)];
    const music = new Audio(randomSong.file);
    music.volume = Config.DefaultVolume;
    music.loop = true;

    document.getElementById('song-name').innerText = randomSong.name;
    document.getElementById('artist-name').innerText = randomSong.artist;

    if (Config.AutoPlay) {
        music.play().catch(() => console.log("Müzik için etkileşim gerekiyor."));
    }

    // Müzik Kontrolleri
    const playBtn = document.getElementById('play-pause');
    const volSlider = document.getElementById('volume-slider');
    const muteBtn = document.getElementById('mute-btn');

    volSlider.value = Config.DefaultVolume;

    playBtn.addEventListener('click', () => {
        if (music.paused) { music.play(); playBtn.innerText = '⏸'; }
        else { music.pause(); playBtn.innerText = '▶'; }
    });

    volSlider.addEventListener('input', (e) => {
        music.volume = e.target.value;
        muteBtn.innerText = music.volume == 0 ? '🔇' : '🔊';
    });

    muteBtn.addEventListener('click', () => {
        music.muted = !music.muted;
        muteBtn.innerText = music.muted ? '🔇' : '🔊';
    });
});

// FiveM
window.addEventListener('message', function(e) {
    if (e.data.eventName === 'loadProgress') {
        let progress = Math.round(e.data.loadFraction * 100);
        document.getElementById('progress-bar').style.width = progress + '%';
        document.getElementById('progress-percent').innerText = progress + '%';
    }
});