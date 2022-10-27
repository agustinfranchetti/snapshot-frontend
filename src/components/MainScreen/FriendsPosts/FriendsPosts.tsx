import { Box, Image, Text } from "@chakra-ui/react";
import { FriendPostHeader } from "./FriendPostHeader";
export const FriendsPosts = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} textAlign="left" mb={10}>
      <FriendPostHeader />
      <Image
        src="https://source.unsplash.com/user/c_v_r/300x200"
        alt="sample_image"
        borderRadius="15"
        boxSize="65vh"
        w={"90vw"}
      />
      <Text color={"gray.500"}>Add a comment...</Text>
    </Box>
  );
};
