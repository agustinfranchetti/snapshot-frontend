import React from "react";
import Webcam from "react-webcam";
import {
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const backVideoConstraints = {
  width: 720,
  height: 1280,
  facingMode: "environment",
};
const frontVideoConstraints = {
  width: 720,
  height: 1280,
  facingMode: "user",
};

interface CameraPhotosProps {
  setFrontCameraImage: (frontCameraImage: string) => void;
  setBackCameraImage: (backCameraImage: string) => void;
}

export const CameraPhotos = ({
  setFrontCameraImage,
  setBackCameraImage,
}: CameraPhotosProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const webcamRef = React.useRef(null);
  const [videoConstraints, setVideoConstraints] =
    React.useState(backVideoConstraints);

  const capture = () => {
    setVideoConstraints(backVideoConstraints);
    setBackCameraImage(webcamRef.current.getScreenshot());
    setVideoConstraints(frontVideoConstraints);
    setFrontCameraImage(webcamRef.current.getScreenshot());
    onClose();
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Take a photo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={1280}
              videoConstraints={backVideoConstraints}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={capture}>
              Capture photo
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
    </Box>
  );
};
