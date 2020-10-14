import "./track.css";
import playActionSrc from "../../assets/playactionbutton.svg";
import pauseActionSrc from "../../assets/pauseactionbutton.svg";

export function createTrackElement(track) {
  const divTrack = document.createElement("div");
  divTrack.className = "track";

  const divAvatarBox = document.createElement("div");
  divAvatarBox.className = "track--avatar-box";

  const divDescriptionBox = document.createElement("div");
  divDescriptionBox.className = "track--description-box";

  const divButtonBox = document.createElement("div");
  divButtonBox.className = "track--button-box";

  const divTrackBorder = document.createElement("div");
  divTrackBorder.className = "track--border";

  const artistAvatar = document.createElement("img");
  artistAvatar.src = track.avatarSrc;
  artistAvatar.alt = `Artist Avatar ${track.artist}`;
  artistAvatar.className = "track__artist-avatar";

  const trackName = document.createElement("h3");
  trackName.innerText = track.title;
  trackName.className = "track__name";

  const trackArtist = document.createElement("span");
  trackArtist.innerText = track.artist;
  trackArtist.className = "track__artist";

  const playActionButton = document.createElement("button");

  const actionIcon = document.createElement("img");
  actionIcon.src = playActionSrc;
  actionIcon.alt = "Play Icon";
  actionIcon.className = "track__action-button";

  let isPlaying = false;

  const playAudio = new Audio(track.audioSrc);

  playActionButton.onclick = () => {
    if (isPlaying === false) {
      playAudio.play();
      showPauseIcon(actionIcon);
    } else {
      playAudio.pause();
      showPlayIcon(actionIcon);
    }
    isPlaying = !isPlaying;
  };

  divTrack.append(
    divAvatarBox,
    divDescriptionBox,
    divButtonBox,
    divTrackBorder
  );
  divAvatarBox.append(artistAvatar);
  divDescriptionBox.append(trackName, trackArtist);
  divButtonBox.append(playActionButton);
  playActionButton.append(actionIcon);

  return divTrack;
}

const showPauseIcon = (pauseactionicon) => {
  pauseactionicon.src = pauseActionSrc;
  pauseactionicon.alt = "Pause Icon";
};

const showPlayIcon = (playactionicon) => {
  playactionicon.src = playActionSrc;
  playactionicon.alt = "Play Icon";
};
