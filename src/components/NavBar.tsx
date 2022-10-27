import { BsFillPeopleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Flex, IconButton, Text } from "@chakra-ui/react";
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
      />
      <Text fontSize="xl" fontWeight="bold">
        SnapShot
      </Text>
      <IconButton
        aria-label="Profile"
        icon={<CgProfile size={"1.7rem"} />}
        isRound
        variant="ghost"
      />
    </Flex>
  );
};
