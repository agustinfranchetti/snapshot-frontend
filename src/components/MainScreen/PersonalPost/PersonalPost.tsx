import { FriendsReactions } from "./FriendsReactions";
import { Image, Box, Text } from "@chakra-ui/react";

/**
 * Component that displays the user's personal post for the day
 * @returns {JSX.Element}
 */
export const PersonalPost = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      textAlign="center"
      alignItems={"center"}
    >
      <Image
        src="https://source.unsplash.com/user/c_v_r/300x200"
        alt="sample_image"
        borderRadius="15"
        boxSize="150px"
        w={130}
      />
      <FriendsReactions />
      <Text>Sample Description</Text>
    </Box>
  );
};
