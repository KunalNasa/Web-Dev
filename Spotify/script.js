console.log("Hello");
let currentSong = new Audio();

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}
async function getSongs()
{
    let a = await fetch("http://127.0.0.1:5500/Spotify/assets/songs/");
    let response = await a.text();

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3"))
        {
            songs.push(element.href.split("/songs/")[1]);
        }
    }
    return songs;
}

const playMusic = (track, pause = false) => {
    // let audio = new Audio("assets/songs/" + track);
    currentSong.src = "assets/songs/" + track;
    if(!pause)
    {
        currentSong.play();
        play.src = "assets/images/pause.svg";
        
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

}
async function main()
{

    //get list of all the songs added
    let songs = await getSongs();
    playMusic(songs[0], true);


    // show all the songs in the library
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
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
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>
    {
        e.addEventListener("click",element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        });
    })
    
    //attach an event listener to play, next and previous
    play.addEventListener("click", () => {
        if(currentSong.paused)
        {
            currentSong.play();
            play.src = "assets/images/pause.svg";
        }
        else
        {
            currentSong.pause();
            play.src = "assets/images/play.svg";
        }
    })

    // listen for time update event
    currentSong.addEventListener("timeupdate", () =>
    {
        console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    // add an eventlistener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percentage = (e.offsetX/e.target.getBoundingClientRect().width) * 100 + "%"
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
    
}

main();