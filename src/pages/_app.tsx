
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "reset-css";
import PlayerLayout from "../../components/playerLayout";

const theme = extendTheme({
  colors: {
    gray: {
      50: "#f9fafb",
      100: "#f4f5f7",
      200: "#e5e7eb",
      300: "#d2d6dc",
      400: "#9fa6b2",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            boxShadow: "none",
            outline: "none",
          },
        },
      },

      baseStyle: {
        borderRadius: "xl",
      },
      sizes: {
        md: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
    },
  },
} as any);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout >
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  );
}
