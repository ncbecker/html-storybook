import "./track.css";
import playActionSrc from "../../assets/playactionbutton.svg";
import pauseActionSrc from "../../assets/pauseactionbutton.svg";
import { createElement } from "../../utils/elements";

export function createTrackElement(track) {
  const playAudio = new Audio(track.audioSrc);
  const actionIcon = createElement("img", {
    className: "track__action-button",
    src: playActionSrc,
    alt: "Play Icon",
  });

  const showPauseIcon = (pauseactionicon) => {
    pauseactionicon.src = pauseActionSrc;
    pauseactionicon.alt = "Pause Icon";
  };

  const showPlayIcon = (playactionicon) => {
    playactionicon.src = playActionSrc;
    playactionicon.alt = "Play Icon";
  };

  const trackElement = createElement("div", {
    className: "track",
    children: [
      createElement("div", {
        className: "track--avatar-box",
        children: [
          createElement("img", {
            className: "track__artist-avatar",
            src: track.avatarSrc,
            alt: `Artist Avatar ${track.artist}`,
          }),
        ],
      }),
      createElement("div", {
        className: "track--description-box",
        children: [
          createElement("h3", {
            className: "track__name",
            innerText: track.title,
          }),
          createElement("span", {
            className: "track__artist",
            innerText: track.artist,
          }),
        ],
      }),
      createElement("div", {
        className: "track--button-box",
        children: [
          createElement("button", {
            children: [actionIcon],
            onclick: () => {
              if (playAudio.paused) {
                playAudio.play();
                showPauseIcon(actionIcon);
              } else {
                playAudio.pause();
                showPlayIcon(actionIcon);
              }
            },
          }),
        ],
      }),
      createElement("div", {
        className: "track--border",
      }),
    ],
  });
  return trackElement;
}

// export function createTrackElement(track) {
//   const divTrack = document.createElement("div");
//   divTrack.className = "track";

//   const divAvatarBox = document.createElement("div");
//   divAvatarBox.className = "track--avatar-box";

//   const divDescriptionBox = document.createElement("div");
//   divDescriptionBox.className = "track--description-box";

//   const divButtonBox = document.createElement("div");
//   divButtonBox.className = "track--button-box";

//   const divTrackBorder = document.createElement("div");
//   divTrackBorder.className = "track--border";

//   const artistAvatar = document.createElement("img");
//   artistAvatar.src = track.avatarSrc;
//   artistAvatar.alt = `Artist Avatar ${track.artist}`;
//   artistAvatar.className = "track__artist-avatar";

//   const trackName = document.createElement("h3");
//   trackName.innerText = track.title;
//   trackName.className = "track__name";

//   const trackArtist = document.createElement("span");
//   trackArtist.innerText = track.artist;
//   trackArtist.className = "track__artist";

//   const playActionButton = document.createElement("button");

//   const actionIcon = document.createElement("img");
//   actionIcon.src = playActionSrc;
//   actionIcon.alt = "Play Icon";
//   actionIcon.className = "track__action-button";

//   // let isPlaying = false;

//   const playAudio = new Audio(track.audioSrc);

//   playActionButton.onclick = () => {
//     if (playAudio.paused) {
//       playAudio.play();
//       showPauseIcon(actionIcon);
//     } else {
//       playAudio.pause();
//       showPlayIcon(actionIcon);
//     }

//     // isPlaying = !isPlaying;
//   };

//   divTrack.append(
//     divAvatarBox,
//     divDescriptionBox,
//     divButtonBox,
//     divTrackBorder
//   );
//   divAvatarBox.append(artistAvatar);
//   divDescriptionBox.append(trackName, trackArtist);
//   divButtonBox.append(playActionButton);
//   playActionButton.append(actionIcon);

//   return divTrack;
// }

// const showPauseIcon = (pauseactionicon) => {
//   pauseactionicon.src = pauseActionSrc;
//   pauseactionicon.alt = "Pause Icon";
// };

// const showPlayIcon = (playactionicon) => {
//   playactionicon.src = playActionSrc;
//   playactionicon.alt = "Play Icon";
// };
