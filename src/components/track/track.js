import "./track.css";
import artistAvatarSrc from "../../assets/michaeljackson.png";
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
  artistAvatar.src = artistAvatarSrc;
  artistAvatar.alt = `Artist Avatar ${track.artist}`;
  artistAvatar.className = "track__artist-avatar";

  const trackName = document.createElement("h3");
  trackName.innerText = track.title;
  trackName.className = "track__name";

  const trackArtist = document.createElement("span");
  trackArtist.innerText = track.artist;
  trackArtist.className = "track__artist";

  const playActionButton = document.createElement("button");

  const playActionIcon = document.createElement("img");
  playActionIcon.src = playActionSrc;
  playActionIcon.alt = "Play Action Icon";
  playActionIcon.className = "track__action-button";

  let isPlaying = false;

  const playAudio = new Audio(track.audioSrc);
  playActionButton.onclick = function () {
    if (isPlaying === false) {
      playAudio.play();
      playActionIcon.src = pauseActionSrc;
      isPlaying = true;
    } else {
      playAudio.pause();
      playActionIcon.src = playActionSrc;
      isPlaying = false;
    }
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
  playActionButton.append(playActionIcon);

  return divTrack;
}
