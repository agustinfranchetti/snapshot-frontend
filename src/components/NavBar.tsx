import { BsFillPeopleFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { Flex, IconButton, Text } from "@chakra-ui/react";

/**
 * Component that displays the navigation bar at the top of the screen,
 * with the options to go to the profile or the friends list
 * @returns {JSX.Element}
 */
export const NavBar = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="white"
      boxShadow="md"
      zIndex="1"
      justify="space-between"
      align="center"
      p="4"
      height={"10vh"}
    >
      <IconButton
        aria-label="Home"
        icon={<BsFillPeopleFill size={"1.7rem"} />}
        isRound
        variant="ghost"
        onClick={() => {
          console.log("Friends");
        }}
      />
      <Text fontSize="xl" fontWeight="extrabold">
        SnapShot
      </Text>
      <IconButton
        aria-label="Profile"
        icon={<MdAccountCircle size={"2rem"} />}
        isRound
        variant="ghost"
        onClick={() => {
          console.log("Profile");
        }}
      />
    </Flex>
  );
};
