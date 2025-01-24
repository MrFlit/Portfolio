var btn, bgMusic, state, musicName;

btn     = document.getElementById('music-toggle');
bgMusic = document.getElementById('bg-music');
musicName = document.getElementById('music-name');
state   = false;

function toggleMusic(e) {
  var target = e.target;

  if(state) {
    bgMusic.pause();
    state = false;

    console.log('pause');
    document.body.classList.remove('playing');
  } else {
    bgMusic.play();
    state = true;
    document.body.classList.add('playing');
  }
}

btn.addEventListener('click', toggleMusic);