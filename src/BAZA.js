import Logo from "./common/Logo";

import { TiktokIcon } from "./common/Icons/TiktokIcon";
import { FacebookIcon } from "./common/Icons/FacebookIcon";
import { InstagramIcon } from "./common/Icons/InstagramIcon";

export const BAZA = {
  kategorie: [
    "torty dziecięce",
    "torty urodzinowe",
    "torty weselne",
    "torty piętrowe",
    "chleby i bułki",
    "torty kobiece",
    "torty na chrzciny",
    "torty na rocznicę",
    "torty na roczek",
    "torty męskie",
    "torty komunijne",
    "torty na imprezy firmowe",
    "ciasta i ciasteczka",
  ],
  torty: [{ plik: "IMG_8702.jpg" },{ plik: "IMG_8702.jpg" },{ plik: "IMG_8702.jpg" },{ plik: "IMG_8702.jpg" },{ plik: "IMG_8702.jpg" },{ plik: "IMG_8702.jpg" },{ plik: "babeczki1.jpg" },{ plik: "IMG_8702.jpg" }],
  strona: {
    nawigacja: {
      logo: <Logo />,
      linki: [
        { content: "torty", href:"torty" },
        { content: "słodki stół", href:"slodki-stol"},
        { content: "cennik" , href:"/cennik"},
      ],
      ikonki: [
        {
          href: "https://www.tiktok.com/@przeslodka_torty",
          content: <TiktokIcon />,
        },
        {
          href: "https://www.instagram.com/przeslodka_torty/",
          content: <InstagramIcon />,
        },
        {
          href: "https://www.facebook.com/przeslodkatorty",
          content: <FacebookIcon />,
        },
      ],
    },
    stronaGłowna: {},
  },
};
