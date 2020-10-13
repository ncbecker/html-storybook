import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const thriller = () =>
  createTrackElement({
    title: "Thriller",
    artist: "Michael Jackson",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Planet_Terror_Records/Kingstux/The_Illusion_is_Worth_Fighting_For/Kingstux_-_04_-_Tetris_Trance.mp3",
  });

export const beatIt = () =>
  createTrackElement({
    title: "Beat It",
    artist: "Michael Jackson",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Planet_Terror_Records/Kingstux/The_Illusion_is_Worth_Fighting_For/Kingstux_-_04_-_Tetris_Trance.mp3",
  });

export const billieJean = () =>
  createTrackElement({
    title: "Billie Jean",
    artist: "Michael Jackson",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Planet_Terror_Records/Kingstux/The_Illusion_is_Worth_Fighting_For/Kingstux_-_04_-_Tetris_Trance.mp3",
  });
