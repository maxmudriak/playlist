;(function(){
    var request = new XMLHttpRequest(),
    url,
    data;

url = 'https://itunes.apple.com/search?term=system+of+a+down+&limit=1';

request.open('GET', url, true);

request.onreadystatechange = function () {
    data = JSON.parse(this.response);
    // console.log(data.results);

    data.results.forEach(function(tune){
        console.log(tune);
        var audio = "<audio controls src='"+ tune.previewUrl +"'>";

        document.querySelector('.ba-tune').innerHTML += audio;
    });
};
request.send();
})();
;(function () {
    "use strict";
    var playList = [{
            author: "Led zeppelin",
            song: "stairway to heaven",
            duration: "1:03"
        },
        {
            author: "Muse",
            song: "dead inside",
            duration: "3:99"
        },
        {
            author: "lynyrd skynyrd",
            song: "free bird",
            duration: "1:56"
        },
        {
            author: "deep purple",
            song: "smoke on the water",
            duration: "3:03"
        },
        {
            author: "jimi hendrix",
            song: "all along the watchtower",
            duration: "2:53"
        },
        {
            author: "AC/DC",
            song: "back in black",
            duration: "2:43"
        },
        {
            author: "queen",
            song: "we will rock you",
            duration: "2:13"
        },
        {
            author: "metallica",
            song: "enter sandman",
            duration: "3:03"
        },
        {
            author: "SOAD",
            song: "Arials",
            duration: "3:03"
        }
    ];


    // var playListEl = document.getElementById('playlist'),
    //     playListTmpl = document.getElementById('playlist-li').innerHTML,
    //     playListHTML = '';
    //     console.log(playListTmpl);
    // console.log(playListTmpl);

    playList.forEach(function (item) {

        var tune = document.createElement('li');
            tune.className = "ba-tune";

        document.querySelector('.ba-playlist__list').appendChild(tune);

        var tuneTop = document.createElement('div');
            tuneTop.className = "ba-tune__top";

        tune.appendChild(tuneTop);

        var tuneDuration = document.createElement('span');
            tuneDuration.className = "ba-tune__duration";

        tuneTop.appendChild(tuneDuration);
        tuneDuration.innerHTML = item.duration;

        var tuneAuthor = document.createElement('span');
            tuneAuthor.className = "ba-tune__author";

        tuneTop.appendChild(tuneAuthor);
        tuneAuthor.innerHTML = item.author;

        var tuneSong = document.createElement('div');
            tuneSong.className = "ba-tune__song";

        tune.appendChild(tuneSong);
        tuneSong.innerHTML = item.song;


        // console.log();
        // playListHTML += playListTmpl
        //     .replace(/{{author}}/ig, item.author)
        //     .replace(/{{duration}}/ig, item.duration)
        //     .replace(/{{song}}/ig, item.song);
        //playListEl.innerHTML = playListHTML;
    });
})();
