import { extendTheme } from "@chakra-ui/react";

const mainConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    white: "#FFFFFF",
  },
};

const mainTheme = extendTheme({
  mainConfig,
  fonts: {
    heading: "JetBrains Mono, sans-serif",
    body: "JetBrains Mono, sans-serif",
  },
  components: {
    Text: {
      sizes: {
        xxl: {
          fontSize: "3xl",
          fontWeight: "semibold",
        },
        minixl: {
          fontSize: "20px",
          fontWeight: "regular",
        },
      },
    },
  },
});

export default mainTheme;
