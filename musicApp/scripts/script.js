window.onload = () => {
    (localStorage.length !== 0) ? hideLoginPage() : ($(".nav").hide(), $(".content").hide(),
        $(".content-menu").hide());
};
$(function () {
    let step = '',
        text = $('#loading').text();

    function changeStep() {
        $('#loading').text(text + step);
        if (step === '...') {
            step = ''
        } else {
            step += '.'
        }
    }

    let interval = setInterval(changeStep, 500);
    $(document).ready(function () {
        setTimeout(function () {
            clearInterval(interval);
            $('#preloader').addClass('hide')

        }, 2000);
    });
});

let login = document.getElementById('input_login'),
    welcomePage = document.querySelector('.contain'),
    navBar = document.querySelector('.nav'),
    btnOut = document.querySelector('.nav__out'),
    playlistHeader = document.querySelector('.playlist-info__track'),
    playListImg,
    arrJSONimg = [],
    arrJSONsingers = [],
    PlayListImgAuthor = document.querySelector('.playlist-song-img'),
    currentTrack = document.getElementById('myAudio'),
    play = document.querySelector('.player');

$(".nav__name").text(localStorage.key(localStorage.length - 1));

currentTrack.addEventListener('timeupdate', showCurrentTime);
let volume = document.getElementById('start');
volume.addEventListener("change", changeVolume);

function hideLoginPage() {
    $(".contain").hide("slow");
    $(".nav").show("slow");
    $(".content").show("slow");
}

welcomePage.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        localStorage.setItem(`${login.value}`, "1");
        $(".nav__name").text(`${login.value}`);
        hideLoginPage();
    }
});

btnOut.addEventListener('click', () => {
    $(".nav").hide("slow");
    $(".contain").show("slow");
    $(".content").hide("slow");
    localStorage.removeItem($(".nav__name").text());
});


$.getJSON('scripts/only_genres.json', function (data) {
    let template = $('#genre__tpl').html();
    let info = Mustache.render(template, data);
    $('#for_genres').html(info)
});
	
$.getJSON('scripts/eminem.json', function (data) {
	arrJSONimg = data.img;
    arrJSONsingers = data.singers;
    let template = $('#song__tpl').html();
    let info = Mustache.render(template, data);
    $('#for_song-container').html(info);
    playlistHeader.innerText = document.querySelector('.playlist-songs-name').innerText;
    let arrStrSong = playlistHeader.innerText.split('-');
    document.querySelector('.song').classList.add("track_active");
	loadTrack();
});

$('.carousel-inner').on('click', function (e) {
    let x = e.target;
    alert(x.innerText);
    $(".genre_container").hide("slow");
});

$('.playlist-songs').on('click', function (e) {
    let x = e.target;
    $(".song").click(function () {
        $(".song").removeClass("track_active");
        $(this).addClass("track_active");
    });
    loadTrack();
	playTrack();
});

function loadTrack() {
    playlistHeader.innerText = $('.track_active').children().text();
    let arrStrSong = playlistHeader.innerText.split('-');
    playListImg = arrStrSong[arrStrSong.length - 1];
    PlayListImgAuthor.src = arrJSONimg[playListImg];
    currentTrack.src = $('.track_active').children().attr('data-value');
}

$('#forward').on('click', function() {
    forwardToNextTrack ()
});
    function forwardToNextTrack () {
    let parentSong = $('.track_active').removeClass("track_active");
    let nextTrack = $(parentSong).next().addClass("track_active");
    loadTrack();
	playTrack();
};

$('#back').on('click', function () {
    let parentSong = $('.track_active').removeClass("track_active");
    let prevTrack = $(parentSong).prev().addClass("track_active");
    loadTrack();
	playTrack();
});

function changeVolume() {
    currentTrack.volume = (+volume.value);
}

function showCurrentTime() {
    var currentTimeSong = currentTrack.currentTime;
    var time = document.querySelector('.time');
    var progBar = document.querySelector('.progressBar');
    var curMin = Math.floor(currentTimeSong / 60);
    var curSec = Math.floor(currentTimeSong % 60);
    time.innerText = curMin + ':' + ('0' + curSec).slice(-2);
	progBar.style.backgroundColor = 'blue';
    if (progBar.style.width != 100) {
        progBar.style.width = (currentTimeSong / currentTrack.duration * 100) + '%'
    }
}

$('.genres-btn').on('click', function () {
    $(".genre_container").toggle("slow");
});

$('#pause').on('click', function () {
    currentTrack.pause();
    $('#pause').hide();
    $('#play').show();
});

$('#play').on('click', function () {
    playTrack();
});

function playTrack() {
	currentTrack.play();
    $('#play').hide();
    $('#pause').show();
}


$(currentTrack).on('ended',  function() {
    forwardToNextTrack()});












 




