import React, { useState } from "react";
import { Box, Image, Text, Spinner } from "@chakra-ui/react";
import { FriendPostHeader } from "./FriendPostHeader";
import { PostImage } from "../PostImage";
/**
 * Component that displays a friend's post
 * @returns {JSX.Element}
 */
export const FriendsPosts = () => {
  const backCameraImage = "https://source.unsplash.com/random/400x450";
  const frontCameraImage = "https://source.unsplash.com/user/erondu/400x450";

  const [mainImage, setMainImage] = useState(backCameraImage);
  const [secondaryImage, setSecondaryImage] = useState(frontCameraImage);

  const handleImageChange = () => {
    if (mainImage === backCameraImage) {
      setMainImage(frontCameraImage);
      setSecondaryImage(backCameraImage);
    } else {
      setMainImage(backCameraImage);
      setSecondaryImage(frontCameraImage);
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} textAlign="left" mb={10}>
      <FriendPostHeader />
      <PostImage
        backCameraImage={backCameraImage}
        frontCameraImage={frontCameraImage}
        isLarge={true}
      />
      <Text color={"gray.500"}>Add a comment...</Text>
    </Box>
  );
};
