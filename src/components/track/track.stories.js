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
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Pavillon36/Syndrm__Kendall_WA/Another_One_EP/Syndrm__Kendall_WA_-_02_-_Tetris.mp3",
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

// Test:

// export const playlist = () => createTrackElement(trackInfos);

// const createPlaylist = () => {
//   const divPlaylist = document.createElement("div");
//   divPlaylist.className = "playlist";
//   divPlaylist.append(playlist);
//   return divPlaylist;
// };

// export const createPlaylist = () => createPlaylist()

//Leons Lösung:

// export const songs = () => {
//   const christmasAdventureTrack = {
//     title: "A Christmas adventure",
//     artist: "TRG Banks",
//     imgSrc:
//       "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290",
//   };
//   const beatItTrack = {
//     title: "Beat It",
//     artist: "Michael Jackson",
//     imgSrc:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e73ZzgeVfHsS-kcyVn5ZSQHaMp%26pid%3DApi&f=1",
//   };
//   const thrillerTrack = {
//     title: "Thriller",
//     artist: "Michael Jackson",
//     imgSrc:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e73ZzgeVfHsS-kcyVn5ZSQHaMp%26pid%3DApi&f=1",
//     audioSrc:
//       "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/none_given/TRG_Banks/TRG_Banks_-_Singles/TRG_Banks_-_Grandpas_great_escape.mp3",
//   };

//   const playlist = [christmasAdventureTrack, beatItTrack, thrillerTrack];

//   const container = document.createElement("section");

//   playlist.forEach((track) => {
//     const trackElement = createTrackElement(track);
//     container.append(trackElement);
//   });
//   // for (let index = 0; index < playlist.length; index++) {
//   //   const track = playlist[index];
//   //   const trackElement = createTrackElement(track);
//   //   container.append(trackElement);
//   // }

//   return container;
// };

export const songs = () => {
  const playlist = [
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
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Pavillon36/Syndrm__Kendall_WA/Another_One_EP/Syndrm__Kendall_WA_-_02_-_Tetris.mp3",
    },
    {
      title: "Billie Jean",
      artist: "Michael Jackson",
      avatarSrc: avatar2,
      audioSrc:
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Pavillon36/Syndrm__Kendall_WA/Another_One_EP/Syndrm__Kendall_WA_-_02_-_Tetris.mp3",
    },
  ];

  const container = document.createElement("section");

  playlist.forEach((track) => {
    const trackElement = createTrackElement(track);
    container.append(trackElement);
  });

  // for (let index = 0; index < playlist.length; index++) {
  //   const track = playlist[index];
  //   const trackElement = createTrackElement(track);
  //   container.append(trackElement);
  // }

  return container;
};
