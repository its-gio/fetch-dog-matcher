import { Barlow_Condensed, Montserrat } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
});

const montserratRegular = Montserrat({
  weight: "400",
  variable: "--font-montserrat",
});

const fonts = `${barlowCondensed.variable} ${montserratRegular.variable}`;

export default fonts;
