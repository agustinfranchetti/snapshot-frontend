import { Box, Image, Text } from "@chakra-ui/react";
import { FriendPostHeader } from "./FriendPostHeader";

/**
 * Component that displays a friend's post
 * @param {any} randomImageSig - this is a temporary prop to force the images to be different
 * @returns {JSX.Element}
 */
export const FriendsPosts = ({ randomImageSig }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} textAlign="left" mb={10}>
      <FriendPostHeader />
      <Image
        src={`https://source.unsplash.com/user/c_v_r/300x200?sig=${randomImageSig}`}
        alt="sample_image"
        borderRadius="15"
        boxSize="65vh"
        w={"90vw"}
      />
      <Text color={"gray.500"}>Add a comment...</Text>
    </Box>
  );
};
