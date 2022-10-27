import React from "react";
import { PersonalPost } from "./PersonalPost/PersonalPost";
import { FriendsPosts } from "./FriendsPosts/FriendsPosts";
import { Box } from "@chakra-ui/react";

//Temporary for fetching random images
const getRandomImageSig = () => Math.floor(Math.random() * 1000);

/**
 * Component that displays the main screen
 * This contains the user's personal post and the posts of the user's friends
 * @returns {JSX.Element}
 */
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
