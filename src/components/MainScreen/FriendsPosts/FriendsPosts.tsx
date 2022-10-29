import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { FriendPostHeader } from "./FriendPostHeader";
import { PostImage } from "../PostImage";
import { friendsPostsMock, IPost } from "./friendsPostsMock";

/**
 * Component that displays a friend's post
 * @returns {JSX.Element}
 */
export const FriendsPosts = () => {
  const [posts, setPosts] = useState<IPost[]>(friendsPostsMock);

  return (
    <Box>
      {posts.map((post) => (
        <Box
          key={`friend ${post.friendName}`}
          display={"flex"}
          flexDirection={"column"}
          textAlign="left"
          mb={10}
        >
          <FriendPostHeader
            name={post.friendName}
            profilePicture={post.friendAvatar}
          />
          <PostImage
            backCameraImage={post.backCameraImage}
            frontCameraImage={post.frontCameraImage}
            isLarge={true}
          />
          <Text ml={2} color={"gray.500"}>
            Add a comment...
          </Text>
        </Box>
      ))}
    </Box>
  );
};
