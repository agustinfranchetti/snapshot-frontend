import { Center, Box, Text } from "@chakra-ui/react";
export const DesktopView = () => {
  return (
    <Box
      display={{ base: "none", md: "flex" }}
      w="100vw"
      h="100vh"
      justifyContent={"center"}
    >
      <Center>
        <Text>
          SnapShot is not yet supported on desktop. Please use a mobile device
          :)
        </Text>
      </Center>
    </Box>
  );
};
