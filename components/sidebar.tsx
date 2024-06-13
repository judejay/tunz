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
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/playlist/create",
  },
  {
    name: "Liked Songs",
    icon: MdFavorite,
    route: "/liked",
  },
];

const playlist = new Array(50)
  .fill(0)
  .map((_, index) => `Playlist ${index + 1}`);

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
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <Link as={NextLink} href={menu.route}>
                    <ListIcon
                      as={menu.icon as React.ElementType}
                      color="white"
                      marginRight="20px"
                    />
                    {menu.name}
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box marginBottom="20px">
          <List spacing={3}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <Link as={NextLink} href={menu.route}>
                    <ListIcon
                      as={menu.icon as React.ElementType}
                      color="white"
                      marginRight="20px"
                    />
                    {menu.name}
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="50%" overflowY="auto" paddingY="20px">
          <List>
            {playlist.map((name) => (
              <ListItem paddingX="20px" key={name}>
                <LinkBox key={name}>
                  <Link as={NextLink} href={`/playlist/${name}`}>
                    <LinkOverlay color="grey">{name}</LinkOverlay>
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
