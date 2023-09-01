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
    "torty kobiece",
    "torty na chrzciny",
    "torty na rocznicę",
    "torty na roczek",
    "torty męskie",
    "torty komunijne",
    "torty na imprezy firmowe",
  ],
  torty: [
    {
      plik: "IMG_8702.jpg",
      tytuł: "Tort z kwiatami",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
      kategorie:["torty weselne"],
      id:"1"
    },
    {
      plik: "IMG_8702.jpg",
      tytuł: "Tort z kwiatami",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
      kategorie:["torty na roczek"],
      id:"2"
    },
    {
      plik: "IMG_8702.jpg",
      tytuł: "Tort z kwiatami",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
      kategorie: ["torty na imprezy firmowe"],
      id:"3"
    },
    {
      plik: "IMG_8702.jpg",
      tytuł: "Tort z kwiatami",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
      kategorie:["torty na roczek"],
      id:"4"
    },
    {
      plik: "IMG_8702.jpg",
      tytuł: "Tort z kwiatami",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
      kategorie:["torty na roczek"],
      id:"5"
    },
    {
      plik: "IMG_8702.jpg",
      tytuł: "Tort z kwiatami",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
      kategorie:["torty na roczek"],
      id:"6"
    },
    {
      plik: "babeczki1.jpg",
      tytuł: "Tort z kwiatami",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
      kategorie:["torty weselne"],
      id:"7"
    },
    {
      plik: "IMG_8702.jpg",
      tytuł: "Tort z kwiatami",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
      kategorie:["torty weselne"],
      id:"8"
    },
  ],
  strona: {
    nawigacja: {
      logo: <Logo />,
      linki: [
        { content: "torty", href: "/torty" },
        { content: "słodki stół", href: "/slodki-stol" },
        { content: "cennik", href: "/cennik" },
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
