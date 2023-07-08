import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      black: "rgb(15,18,22)",
      yellow: colors.yellow,
      transparent: "transparent",
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
    },
  },
} as Options;
