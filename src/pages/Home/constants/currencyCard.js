import bovespa from "@assets/icons/bovespa.svg";
import ifix from "@assets/icons/ifix.svg";
import dollar from "@assets/icons/dollar.svg";
import peso from "@assets/icons/peso.svg";
import canadianDollar from "@assets/icons/canadian-dollar.svg";
import yen from "@assets/icons/yen.svg";
import australianDollar from "@assets/icons/australian-dollar.svg";
import yuan from "@assets/icons/yuan.svg";
import euro from "@assets/icons/euro.svg";
import bitcoin from "@assets/icons/bitcoin.svg";
import libra from "@assets/icons/libra.svg";

export const STOCKS_CARD_DATA = [
  {
    imgPath: bovespa,
    title: "Bovespa Index",
    rateValue: "0.15%",
  },
  {
    imgPath: ifix,
    title: "IFIX",
    rateValue: "0.15%",
  },
];

export const QUOTES_CARD_DATA = [
  {
    id: "USD",
    imgPath: dollar,
    title: "Commercial Dollar",
    rateValue: "R$ 5,13",
  },
  { id: "ARS", imgPath: peso, title: "Argentine Peso", rateValue: "R$ 0,02" },
  {
    id: "CAD",
    imgPath: canadianDollar,
    title: "Canadian Dollar",
    rateValue: "R$ 3,78",
  },
  { id: "JPY", imgPath: yen, title: "Yen", rateValue: "R$ 0,03" },
  {
    id: "AUD",
    imgPath: australianDollar,
    title: "Australian Dollar",
    rateValue: "R$ 3,48",
  },
  { id: "CNY", imgPath: yuan, title: "Yuan", rateValue: "R$ 0,74" },
  { id: "EUR", imgPath: euro, title: "Euro", rateValue: "R$ 5,43" },
  { id: "BTC", imgPath: bitcoin, title: "Bitcoin", rateValue: "R$ 122.148,71" },
  { id: "LBP", imgPath: libra, title: "Libra", rateValue: "R$ 6,16" },
];
