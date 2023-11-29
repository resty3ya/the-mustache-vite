import { barberAdult, barberChild, otherServices } from "../assets/images";

export const navlinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const services = [
  {
    imgURL: barberAdult,
    label: "For Adults",
    sublabel: "See pricing",
  },
  {
    imgURL: barberChild,
    label: "For Kids",
    sublabel: "See pricing",
  },
  {
    imgURL: otherServices,
    label: "Other Services",
    sublabel: "See pricing",
  },
];
