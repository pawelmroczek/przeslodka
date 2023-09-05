import Logo from "./common/Logo";

import { TiktokIcon } from "./common/Icons/TiktokIcon";
import { FacebookIcon } from "./common/Icons/FacebookIcon";
import { InstagramIcon } from "./common/Icons/InstagramIcon";

export const BAZA = {
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

