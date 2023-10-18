import logotype from "@assets/icons/logotype.svg";
import { IMAGE_SIZE } from "@constants/styles/image";

export const HEADER_DATA = {
  title: "Modsen Currency Tracker",
  quote: "Quotes for the dollar and other international currencies.",
};

export const IMAGE_CONFIG = {
  alt: "Application logotype",
  src: logotype,
  ...IMAGE_SIZE.XXL,
};
