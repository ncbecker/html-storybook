import "./mainplayer.css";
import mainplayerPlaySrc from "../../assets/mainplayer-play.svg";
import mainplayerBackSrc from "../../assets/mainplayer-back.svg";
import mainplayerForwardSrc from "../../assets/mainplayer-forward.svg";
import mainplayerPlaylistSrc from "../../assets/mainplayer-playlist.svg";
import mainplayerShuffleSrc from "../../assets/mainplayer-shuffle.svg";
import mainplayerRepeatSrc from "../../assets/mainplayer-repeat.svg";
import mainplayerEqSrc from "../../assets/mainplayer-eq.svg";
import mainplayerFavoritestSrc from "../../assets/mainplayer-heart.svg";
import { createElement } from "../../utils/elements";

export function createMainPlayerElement() {
  const mainPlayerElement = createElement("div", {
    className: "mainplayer",
    children: [
      createElement("div", {
        className: "mainplayer--controls-box",
        children: [
          createElement("button", {
            onclick: () => {
              alert("Backward");
            },
            children: [
              createElement("img", {
                src: mainplayerBackSrc,
                alt: "Backward",
              }),
            ],
          }),
          createElement("button", {
            onclick: () => {
              alert("Play");
            },
            children: [
              createElement("img", {
                src: mainplayerPlaySrc,
                alt: "Play",
              }),
            ],
          }),
          createElement("button", {
            onclick: () => {
              alert("Forward");
            },
            children: [
              createElement("img", {
                src: mainplayerForwardSrc,
                alt: "Forward",
              }),
            ],
          }),
        ],
      }),

      createElement("div", {
        className: "mainplayer--toolbar-box",
        children: [
          createElement("button", {
            onclick: () => {
              alert("Playlist");
            },
            children: [
              createElement("img", {
                src: mainplayerPlaylistSrc,
                alt: "Playlist",
              }),
            ],
          }),
          createElement("span", {
            innerText: "Playlist",
          }),
          createElement("button", {
            onclick: () => {
              alert("Shuffle");
            },
            children: [
              createElement("img", {
                src: mainplayerShuffleSrc,
                alt: "Shuffle",
              }),
            ],
          }),
          createElement("span", {
            innerText: "Shuffle",
          }),
          createElement("button", {
            onclick: () => {
              alert("Repeat");
            },
            children: [
              createElement("img", {
                src: mainplayerRepeatSrc,
                alt: "Repeat",
              }),
            ],
          }),
          createElement("span", {
            innerText: "Repeat",
          }),
          createElement("button", {
            onclick: () => {
              alert("EQ");
            },
            children: [
              createElement("img", {
                src: mainplayerEqSrc,
                alt: "EQ",
              }),
            ],
          }),
          createElement("span", {
            innerText: "EQ",
          }),
          createElement("button", {
            onclick: () => {
              alert("Favorites");
            },
            children: [
              createElement("img", {
                src: mainplayerFavoritestSrc,
                alt: "Favorites",
              }),
            ],
          }),
          createElement("span", {
            innerText: "Favorites",
          }),
        ],
      }),
    ],
  });
  return mainPlayerElement;
}
