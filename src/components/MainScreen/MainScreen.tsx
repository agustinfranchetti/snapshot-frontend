import React from "react";
import { PersonalPost } from "./PersonalPost/PersonalPost";
import { FriendsPosts } from "./FriendsPosts/FriendsPosts";
import { Box } from "@chakra-ui/react";
const getRandomImageSig = () => Math.floor(Math.random() * 1000);
export const MainScreen = () => {
  return (
    <Box>
      <PersonalPost />
      <FriendsPosts randomImageSig={getRandomImageSig()} />
      <FriendsPosts randomImageSig={getRandomImageSig()} />
      <FriendsPosts randomImageSig={getRandomImageSig()} />
    </Box>
  );
};
