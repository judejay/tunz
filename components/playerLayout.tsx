import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";
//import Sidebar from "./sidebar";
import dynamic from 'next/dynamic'
interface PlayerLayoutProps {
  children: ReactNode;
}
const NoSSRSidebar = dynamic(() => import('./sidebar'), { ssr: false })

const PlayerLayout = ({ children }: PlayerLayoutProps) => {
  return (
    <Box width="100vw" height="100vh">
    <Box position="absolute" top="0" width="250px" left="0">
    <NoSSRSidebar />
    </Box>
    <Box marginLeft="250px" marginBottom="100px">
      <Box height="calc(100vh - 100px)">{children}</Box>
    </Box>
    <Box position="absolute" left="0" bottom="0">
      Player
    </Box>
  </Box>
  );
};

export default PlayerLayout;
