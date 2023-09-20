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

export const CURRENCY_DEFAULT = {
  id: "USD",
  imgPath: dollar,
};

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
  },
  { id: "ARS", imgPath: peso, title: "Argentine Peso" },
  {
    id: "CAD",
    imgPath: canadianDollar,
    title: "Canadian Dollar",
  },
  { id: "JPY", imgPath: yen, title: "Yen" },
  {
    id: "AUD",
    imgPath: australianDollar,
    title: "Australian Dollar",
  },
  { id: "CNY", imgPath: yuan, title: "Yuan" },
  { id: "EUR", imgPath: euro, title: "Euro" },
  { id: "BTC", imgPath: bitcoin, title: "Bitcoin" },
  { id: "LBP", imgPath: libra, title: "Libra" },
];
