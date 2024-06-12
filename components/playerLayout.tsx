import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface PlayerLayoutProps {
  children: ReactNode;
}

const PlayerLayout = ({ children }: PlayerLayoutProps) => {
  return (
    <Box width="100vh" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        Sidebar
      </Box>

      <Box marginLeft="250px">{children}</Box>
      <Box position="absolute" left="0" bottom="0">
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
