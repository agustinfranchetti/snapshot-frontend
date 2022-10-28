import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

//postImage attributes
interface PostImageProps {
  backCameraImage: string;
  frontCameraImage: string;
  isLarge: boolean;
}
/**
 * Component that displays a friend's post
 * @returns {JSX.Element}
 */
export const PostImage = ({
  backCameraImage,
  frontCameraImage,
  isLarge,
}: PostImageProps) => {
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
    <Box key="imagesContainer" borderRadius="10" boxSize="60vh" w={"90vw"}>
      <Image
        alt="mainImage"
        src={mainImage}
        borderRadius="10"
        boxSize="60vh"
        w={"90vw"}
        display={mainImage ? "block" : "none"}
        position="absolute"
      />
      <Image
        src={secondaryImage}
        alt="secondaryImage"
        borderRadius="10"
        sx={{
          "border-style": "solid",
          "border-width": "2px",
          "border-color": "white",
        }}
        mt={2}
        ml={2}
        fit="cover"
        position="absolute"
        onClick={isLarge ? handleImageChange : () => {}}
        boxSize="20vh"
        w={"30vw"}
      />
    </Box>
  );
};
