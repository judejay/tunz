import { Box } from '@chakra-ui/layout';
import { ReactNode } from 'react';

interface PlayerLayoutProps {
  children: ReactNode;
}

const PlayerLayout = ({ children }: PlayerLayoutProps) => {
  return (
    <Box>
        Layout
      {children}
    </Box>
  );
};

export default PlayerLayout;