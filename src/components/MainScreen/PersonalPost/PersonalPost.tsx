import { useState } from "react";
import { FriendsReactions } from "./FriendsReactions";
import { Image, Box, Text, useDisclosure } from "@chakra-ui/react";
import { PostImage } from "../PostImage";
import { PersonalPostDrawer } from "./PersonalPostDrawer";
/**
 * Component that displays the user's personal post for the day
 * @returns {JSX.Element}
 */
export const PersonalPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const backCameraImage =
    "https://source.unsplash.com/collection/190727/400x450";
  const frontCameraImage =
    "https://source.unsplash.com/user/simonmigaj/400x450";

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      textAlign="center"
      alignItems={"center"}
    >
      <PostImage
        backCameraImage={backCameraImage}
        frontCameraImage={frontCameraImage}
        isLarge={false}
        onClick={onOpen}
      />
      <FriendsReactions />
      <PersonalPostDrawer
        isOpen={isOpen}
        onClose={onClose}
        backCameraImage={backCameraImage}
        frontCameraImage={frontCameraImage}
      />
      <Text>Sample Description</Text>
    </Box>
  );
};
