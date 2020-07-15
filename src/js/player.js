const btnPlay = document.querySelector('.btn-play');
const videoPlayer = document.querySelector('.video__player');


// Плей-Пауза

const togglePlay = () => {
    if (videoPlayer.paused || videoPlayer.ended) {
        videoPlayer.play(); 
        $('.btn-play__icon').css('display', 'none');
        $('.btn-pause__icon').css('display', 'block');
    } else {
        videoPlayer.pause();
       $('.btn-play__icon').css('display', 'block');
        $('.btn-pause__icon').css('display', 'none');
    }
};

$(videoPlayer).on('click', togglePlay);
$(btnPlay).on('click', togglePlay);
$('.btn-play--big').on('click', togglePlay);

// Управление воспромзведением видео

  $(".video__cursor").on("click", e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newPlaybackPositionSec = videoPlayer.duration * clickedPosition / bar.width();

    videoPlayer.currentTime = newPlaybackPositionSec;
  });

  videoPlayer.ontimeupdate = function () {
    const durationSec = videoPlayer.duration;
    const completedSec = videoPlayer.currentTime;
    const completedPercent = (completedSec / durationSec) * 100;

    $(".video__cursor-btn").css({
      left: `${completedPercent}%`
    });
  };

// Управление громкостью звука

  $(".video__volume").on("click", e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;

    videoPlayer.volume = clickedPosition / bar.width();
  });

  videoPlayer.onvolumechange = () => {
    const currentVolume = videoPlayer.volume;
    const newButtonPositionPercent = currentVolume * 100;

    $(".video__volume-button").css({
      left: `${newButtonPositionPercent}%`
    });
  };

// Без звука 

  $('.btn-volume').on('click', function () {

    if (videoPlayer.volume > 0) {
        videoPlayer.volume = 0;
        $('.btn-volume__line').css('display', 'block');
    } else {
        videoPlayer.volume = 1;
       $('.btn-volume__line').css('display', 'none');
  }
});