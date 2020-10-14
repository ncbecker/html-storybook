import { createTrackElement } from "./track";
import michaelJackson from "../../assets/michaeljackson.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

const trackInfos = [
  {
    title: "Thriller",
    artist: "Michael Jackson",
    avatarSrc: michaelJackson,
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Planet_Terror_Records/Kingstux/The_Illusion_is_Worth_Fighting_For/Kingstux_-_14_-_Tetris_Trance_2.mp3",
  },
  {
    title: "Beat It",
    artist: "Michael Jackson",
    avatarSrc: avatar1,
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Planet_Terror_Records/Kingstux/The_Illusion_is_Worth_Fighting_For/Kingstux_-_04_-_Tetris_Trance.mp3",
  },
  {
    title: "Billie Jean",
    artist: "Michael Jackson",
    avatarSrc: avatar2,
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Pavillon36/Syndrm__Kendall_WA/Another_One_EP/Syndrm__Kendall_WA_-_02_-_Tetris.mp3",
  },
];

export const thriller = () => createTrackElement(trackInfos[0]);

export const beatIt = () => createTrackElement(trackInfos[1]);

export const billieJean = () => createTrackElement(trackInfos[2]);
