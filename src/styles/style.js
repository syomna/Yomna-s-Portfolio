import { extendTheme } from "@chakra-ui/react";
import "@fontsource/ubuntu";

const style = extendTheme({
  colors: {
    transparent: "transparent",
    current: "currentColor",
    white: "#ffffff",
    black: "#000000",
    purple: "#3f3cbb",
    amber: "#feaf00",
    teal: "009CAE",
    pinkish: "#fe4f6f",
    midnight: "#121063",
    metal: "#565584",
    tahiti: "#3ab7bf",
    silver: "#ecebff",
    "bubble-gum": "#ff77e9",
    bermuda: "#78dcca",
    pink: "#f7d2ef",
  },
  fonts: {
    heading: "Ubuntu",
    body: "Ubuntu",
  },
});

const onHover = {
  textDecoration: "none",
  transform: "translateY(-5px)",
  transitionDuration: "0.2s",
  transitionTimingFunction: "ease-in-out",
  backgroundColor: "amber",
};
const layoutGradient = [`linear(to-tl, pink, white)`];
const navBarGradient = [`linear(to-bl, pink, white)`];

const mainPx = { base: "4", md: "20" };

const containerAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export {
  onHover,
  layoutGradient,
  navBarGradient,
  mainPx,
  containerAnimation,
  itemAnimation,
};

export default style;
