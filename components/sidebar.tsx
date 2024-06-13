import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import NextImage from "next/image";
import NextLink from "next/link"; // Add this line to import NextLink
import { Link } from "@chakra-ui/react";

const menuItems = [
  {
    icon: MdHome,
    label: "Home",
    route: "/",
  },
  {
    icon: MdSearch,
    label: "Search",
    route: "/search",
  },
  {
    icon: MdLibraryMusic,
    label: "Your Library",
    route: "/library",
  },
  {
    icon: MdPlaylistAdd,
    label: "Create Playlist",
    route: "/create-playlist",
  },
  {
    icon: MdFavorite,
    label: "Liked Songs",
    route: "/liked-songs",
  },
];

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="grey"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} alt={""} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={3}>
            {menuItems.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.label}>
                <LinkBox>
                  <Link as={NextLink} href={menu.route}>
                    <ListIcon
                      as={menu.icon as React.ElementType}
                      color="white"
                      marginRight="20px"
                    />
                    {menu.label}
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
export default Sidebar;
