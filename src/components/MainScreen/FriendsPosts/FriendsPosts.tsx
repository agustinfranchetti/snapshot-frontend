import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { FriendPostHeader } from "./FriendPostHeader";

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
      <Box
        key="mainImage"
        backgroundImage={mainImage}
        borderRadius="10"
        boxSize="65vh"
        w={"90vw"}
        backgroundSize="cover"
      >
        <Image
          src={secondaryImage}
          alt="secondaryImage"
          borderRadius="10"
          boxSize="20vh"
          w={"30vw"}
          fit="cover"
          onClick={handleImageChange}
          mt={2}
          ml={2}
          sx={{
            "border-style": "solid",
            "border-width": "2px",
            "border-color": "black",
          }}
        />
      </Box>
      <Text color={"gray.500"}>Add a comment...</Text>
    </Box>
  );
};
