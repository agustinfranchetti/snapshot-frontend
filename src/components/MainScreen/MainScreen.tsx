import React from "react";
import { PersonalPost } from "./PersonalPost/PersonalPost";
import { FriendsPosts } from "./FriendsPosts/FriendsPosts";
import { Box } from "@chakra-ui/react";
export const MainScreen = () => {
  return (
    <Box>
      <PersonalPost />
      <FriendsPosts />
      <FriendsPosts />
      <FriendsPosts />
    </Box>
  );
};
