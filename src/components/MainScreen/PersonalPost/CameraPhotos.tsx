import React from "react";
import Webcam from "react-webcam";
import {
  Button,
  IconButton,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import { MdOutlineAddAPhoto } from "react-icons/md";
import { RiCameraLensLine } from "react-icons/ri";

const backVideoConstraints = {
  facingMode: "environment",
};
const frontVideoConstraints = {
  facingMode: "user",
};

interface CameraProps {
  cameraRef: React.MutableRefObject<Webcam>;
}

const FrontCamera = ({ cameraRef }: CameraProps) => {
  return (
    <Webcam
      audio={false}
      height={1920}
      ref={cameraRef}
      screenshotFormat="image/jpeg"
      width={1080}
      videoConstraints={frontVideoConstraints}
    />
  );
};
const BackCamera = ({ cameraRef }: CameraProps) => {
  return (
    <Webcam
      audio={false}
      height={1920}
      ref={cameraRef}
      screenshotFormat="image/jpeg"
      width={1080}
      videoConstraints={backVideoConstraints}
    />
  );
};

interface CameraPhotosProps {
  setFrontCameraImage: (frontCameraImage: string) => void;
  setBackCameraImage: (backCameraImage: string) => void;
  frontCameraImage: string;
  backCameraImage: string;
}

export const CameraPhotos = ({
  setFrontCameraImage,
  setBackCameraImage,
  frontCameraImage,
  backCameraImage,
}: CameraPhotosProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const backCameraRef = React.useRef() as React.MutableRefObject<Webcam>;
  const frontCameraRef = React.useRef() as React.MutableRefObject<Webcam>;
  const [isFrontCamera, setIsFrontCamera] = React.useState(false);

  const capture = () => {
    setBackCameraImage(backCameraRef.current.getScreenshot() as string);
    backCameraRef.current.componentWillUnmount();
    setIsFrontCamera(true);
    //wait for 2 seconds to allow campera change before taking picture
    setTimeout(() => {
      setFrontCameraImage(frontCameraRef.current.getScreenshot() as string);
      frontCameraRef.current.componentWillUnmount();
      onClose();
    }, 2000);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      textAlign="center"
      alignItems={"center"}
      h={"190px"}
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx="auto" my="auto" maxW="100%" maxH="100%">
          <ModalHeader>Take a photo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isFrontCamera ? (
              <FrontCamera cameraRef={frontCameraRef} />
            ) : (
              <BackCamera cameraRef={backCameraRef} />
            )}
            <Box display="flex" justifyContent="center" width="100%" mt={-15}>
              <IconButton
                size="3.5em"
                onClick={capture}
                icon={<RiCameraLensLine size={"3em"} />}
                aria-label={"camera-shutter-btn"}
                isRound={true}
                backgroundColor={"white"}
              />
            </Box>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
      {frontCameraImage === "" && backCameraImage === "" && (
        <Button
          w={"130px"}
          h={"150px"}
          onClick={onOpen}
          backgroundColor={"white"}
          border={"2px solid black"}
          borderRadius={"10px"}
          marginTop={"20px"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign="center"
            alignItems={"center"}
            gap={2}
          >
            <Text fontSize={"lg"}>Snap</Text>
            <MdOutlineAddAPhoto size={"30%"} />
          </Box>
        </Button>
      )}
    </Box>
  );
};
