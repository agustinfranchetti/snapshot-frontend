import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { FriendPostHeader } from "./FriendPostHeader";

/**
 * Component that displays a friend's post
 * @param {any} randomImageSig - this is a temporary prop to force the images to be different
 * @returns {JSX.Element}
 */
export const FriendsPosts = ({ randomImageSig }) => {
  const backCameraImage = "https://source.unsplash.com/user/c_v_r/300x200";
  const frontCameraImage =
    "https://source.unsplash.com/user/samuelzeller/300x200";

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
          style={{ objectFit: "cover" }}
          onClick={handleImageChange}
          mt={2}
          ml={2}
        />
      </Box>
      <Text color={"gray.500"}>Add a comment...</Text>
    </Box>
  );
};
