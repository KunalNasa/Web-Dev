console.log("Hello");
let currentSong = new Audio();
let songs;
let currentFolder;
let autoFlag = false;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0'); // padding at the start of string with 0
    // if seconds less than 10 then padstart(2,'0') will show 0 and then remaining seconds
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

function setAutoPlay() {
    if (autoFlag == true) {
        autoFlag = false;
        document.querySelector(".autobtn").style.backgroundColor = "rgb(38, 38, 38)";
    } else {
        autoFlag = true;
        document.querySelector(".autobtn").style.backgroundColor = "#2dd32d";
        document.querySelector(".autobtn").style.color = "white";
    }
}
const playMusic = (track, pause = false) => {
    // track -> complete name of song, eg-> case diljit.mp3
    // let audio = new Audio("assets/songs/" + track);
    currentSong.src = `/Spotify/${currentFolder}/` + track;
    if (!pause) {
        currentSong.play();
        play.src = "assets/images/pause.svg"; // pause -> ||
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track); //name of song
    // decodeURI removes special char such as %20 used for space
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
    // song time set to 00:00 in beginning
}

async function getSongs(folder) {
    currentFolder = folder;
    // fetching songs folder from our current website folders
    let a = await fetch(`http://127.0.0.1:5500/Spotify/${folder}/`);
    let response = await a.text(); // gives text of every folder of our site
    // whether html, css , js or other folders 

    let div = document.createElement("div");
    div.innerHTML = response;
    // getting url of all anchor tags
    let as = div.getElementsByTagName("a");
    songs = []; // empty list to add songs
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            // pushing path to songs in songs string
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }

    // show all the songs in the library
    //adding songs in library songlist as we have done in dynamic website exercise
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
        <img src="./assets/images/music.svg" alt="">
        <div class="info">
          <div>${song.replaceAll("%20", " ")}</div>
        </div>
        <div class="playnow">
          <span>Play Now</span>
          <img src="./assets/images/play.svg" alt="">
        </div>
      </li>`;
    }

    // attach event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
            // trim() removes whitespaces from starting and ending positions only
        });
    })
    return songs;
}



async function displayAlbums() {
    let a = await fetch("http://127.0.0.1:5500/Spotify/assets/songs");
    let response = await a.text();
    let cardContainer = document.querySelector(".cardContainer");

    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let array = Array.from(anchors);
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (e.href.includes("/songs/")) {
            // getting name of the folder 
            let folder = e.href.split("/").slice(-1)[0];
            // get metadata of the folder
            let a = await fetch(`http://127.0.0.1:5500/Spotify/assets/songs/${folder}/info.json`);
            let response = await a.json();

            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
            <div class="play"><img class="invert" src="./assets/images/play.svg" alt="Play Button"></div>
            <img src="./assets/songs/${folder}/cover.jpg" alt="${folder}">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
          </div>`;
        }
    };

    // load the playlist whenever the card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            // event.target refers to the element triggered in that event
            // data set -> data-* tag used in html 
            songs = await getSongs(`assets/songs/${item.currentTarget.dataset.folder}`);
            // here current target will make the whole card act as a playlist

            // play the first song of the playlist whenever that playlist card is clicked
            playMusic(songs[0]);
        })
    });
}

async function main() {
    // setting autoplay feature
    document.querySelector(".autobtn").addEventListener("click", setAutoPlay);
    //get list of all the songs added
    await getSongs("assets/songs/diljit");
    playMusic(songs[0], true);

    // display all the albums on the page
    displayAlbums();

    //attach an event listener to play and pause
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "assets/images/pause.svg";
        } else {
            currentSong.pause();
            play.src = "assets/images/play.svg";
        }
    })

    // listen for time update event
    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime, currentSong.duration);
        // dynamic changing of song time
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        // setting left position of circle by converting curr time to percentage
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    // add an eventlistener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        // offsetX is a property of the MouseEvent object in JavaScript. 
        // It represents the horizontal offset of the mouse pointer between the event 
        // target and the padding edge of the target node.
        // getBoundingClientRect() is a method available on DOM elements in 
        // JavaScript that returns the size of an element and its position 
        // relative to the viewport. It returns a DOMRect object with properties 
        // describing the element's position and dimensions.
        let percentage = (e.offsetX / e.target.getBoundingClientRect().width) * 100 + "%"
        document.querySelector(".circle").style.left = percentage;
        currentSong.currentTime = (currentSong.duration * parseFloat(percentage)) / 100;
    })

    // add an eventListener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    })

    //add an eventlistener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

    // add an event listener for previous 
    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if (index == 0) {
            playMusic(songs[(songs.length) - 1]);
        } else {
            playMusic(songs[index - 1]);
        }
    });
    // add an event listener for next 
    next.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if (index == songs.length - 1) {
            playMusic(songs[0]);
        } else {
            playMusic(songs[index + 1]);
        }
    });

    // Add event listener for song end
    currentSong.addEventListener("ended", () => {
        if (autoFlag) {
            let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
            if (index == songs.length - 1) {
                playMusic(songs[0]);
            } else {
                playMusic(songs[index + 1]);
            }
        }
    });

    // add an event for volume change 
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value);
        // removing mute image if volume is not 0
        if (e.target.value != 0) {
            document.querySelector(".volume img").src = "assets/images/volume.svg";
        }
        currentSong.volume = parseInt(e.target.value) / 100;
    });

    // add mute option
    document.querySelector(".volume img").addEventListener("click", e => {
        if (e.target.src == "http://127.0.0.1:5500/Spotify/assets/images/volume.svg") {
            e.target.src = "assets/images/mute.svg"
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        } else {
            e.target.src = "assets/images/volume.svg"
            currentSong.volume = 0.1;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }
    });
}

main();
