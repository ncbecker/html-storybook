import "./track.css";
import artistAvatarSrc from "../../assets/michaeljackson.png";
import playActionSrc from "../../assets/playactionbutton.svg";

export function createTrackElement(title, artist) {
  // const artistName = "Michael Jackson";
  // const trackTitle = "Billie Jean";

  const divTrack = document.createElement("div");
  divTrack.className = "track";

  const divAvatarBox = document.createElement("div");
  divAvatarBox.className = "track--avatar-box";

  const divDescriptionBox = document.createElement("div");
  divDescriptionBox.className = "track--description-box";

  const divButtonBox = document.createElement("div");
  divButtonBox.className = "track--button-box";

  const artistAvatar = document.createElement("img");
  artistAvatar.src = artistAvatarSrc;
  artistAvatar.alt = `Artist Avatar ${artist}`;
  artistAvatar.className = "track__artist-avatar";

  const trackName = document.createElement("h3");
  trackName.innerText = title;
  trackName.className = "track__name";

  const trackArtist = document.createElement("span");
  trackArtist.innerText = artist;
  trackArtist.className = "track__artist";

  const playActionButton = document.createElement("button");

  const playActionIcon = document.createElement("img");
  playActionIcon.src = playActionSrc;
  playActionIcon.alt = "Play Action Icon";
  playActionIcon.className = "track__action-button";

  divTrack.append(divAvatarBox, divDescriptionBox, divButtonBox);
  divAvatarBox.append(artistAvatar);
  divDescriptionBox.append(trackName, trackArtist);
  divButtonBox.append(playActionButton);
  playActionButton.append(playActionIcon);

  playActionButton.onclick = function () {
    alert("CLICK EVENT");
  };

  return divTrack;
}
