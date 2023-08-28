import Logo from "./common/Logo";

import { TiktokIcon } from "./common/Icons/TiktokIcon";
import { FacebookIcon } from "./common/Icons/FacebookIcon";
import { InstagramIcon } from "./common/Icons/InstagramIcon";

export const BAZA = {
  torty: [],
  strona: {
    nawigacja: {
      logo: <Logo />,
      linki: [
        { content: "torty" },
        { content: "słodki stół" },
        { content: "cennik" },
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
