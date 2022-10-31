import { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";

interface IFallbackImageProps {
  isLarge?: boolean;
}

const FallbackLoadingAnimation = ({ isLarge }: IFallbackImageProps) => {
  return (
    <Box
      key="imagesContainer"
      borderRadius="10"
      boxSize={isLarge ? "450px" : "150px"}
      w={isLarge ? "90vw" : "130px"}
      animate={{
        scale: [1, 2, 2, 1, 1],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
    />
  );
};

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

  useEffect(() => {
    setMainImage(backCameraImage);
  }, [backCameraImage]);

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
        // fallback={<FallbackLoadingAnimation isLarge={isLarge} />}
        animation="fadeIn 1s"
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
        animation="fadeIn 1s"
      />
    </Box>
  );
};
