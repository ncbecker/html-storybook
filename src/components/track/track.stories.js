import { createTrackElement } from "./track";

// import IMG source and add as property to object

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

const trackThriller = {
  title: "Thriller",
  artist: "Michael Jackson",
  audioSrc:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Planet_Terror_Records/Kingstux/The_Illusion_is_Worth_Fighting_For/Kingstux_-_04_-_Tetris_Trance.mp3",
};

const trackBeatIt = {
  title: "Beat It",
  artist: "Michael Jackson",
  audioSrc:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Planet_Terror_Records/Kingstux/The_Illusion_is_Worth_Fighting_For/Kingstux_-_04_-_Tetris_Trance.mp3",
};

const trackBillieJean = {
  title: "Billie Jean",
  artist: "Michael Jackson",
  audioSrc:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Planet_Terror_Records/Kingstux/The_Illusion_is_Worth_Fighting_For/Kingstux_-_04_-_Tetris_Trance.mp3",
};

export const thriller = () => createTrackElement(trackThriller);

export const beatIt = () => createTrackElement(trackBeatIt);

export const billieJean = () => createTrackElement(trackBillieJean);
