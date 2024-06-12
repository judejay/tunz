import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay,
  } from '@chakra-ui/layout';
  import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite,
  } from 'react-icons/md'

  import NextImage from 'next/image';
const Sidebar = () => {
  return (
    <Box  width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="grey">
      
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
        <NextImage src="/logo.svg" height={60} width={120} alt={''} />
        </Box>
      </Box>
    </Box>
  );
};
export default Sidebar;