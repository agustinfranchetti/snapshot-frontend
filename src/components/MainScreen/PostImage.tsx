import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";

//postImage attributes
interface PostImageProps {
  backCameraImage: string;
  frontCameraImage: string;
  isLarge: boolean;
  onClick?: () => void;
}
/**
 * Component that displays a friend's post
 * @returns {JSX.Element}
 */
export const PostImage = ({
  backCameraImage,
  frontCameraImage,
  isLarge,
  onClick,
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
    <Box
      key="imagesContainer"
      borderRadius="10"
      boxSize={isLarge ? "450px" : "150px"}
      w={isLarge ? "90vw" : "130px"}
    >
      <Image
        alt="mainImage"
        src={mainImage}
        borderRadius="10"
        boxSize="inherit"
        w={"inherit"}
        display={mainImage ? "block" : "none"}
        position="absolute"
        onClick={isLarge ? undefined : onClick}
      />
      <Image
        src={secondaryImage}
        alt="secondaryImage"
        borderRadius="10"
        sx={{
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "white",
        }}
        mt={2}
        ml={2}
        fit="cover"
        position="absolute"
        onClick={isLarge ? handleImageChange : onClick}
        boxSize={isLarge ? "150px" : "60px"}
        w={isLarge ? "30vw" : "12vw"}
      />
    </Box>
  );
};
