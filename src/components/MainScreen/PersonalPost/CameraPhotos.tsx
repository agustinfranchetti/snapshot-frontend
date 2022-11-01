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
  facingMode: "environment",
};
const frontVideoConstraints = {
  facingMode: "user",
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

  const capture = async() => {
    await setBackCameraImage(backCameraRef.current.getScreenshot() as string);
    backCameraRef.current.componentWillUnmount();
    await setIsFrontCamera(true);
    await setFrontCameraImage(frontCameraRef.current.getScreenshot() as string);
    frontCameraRef.current.componentWillUnmount();
    // setBackCameraImage(backCameraRef.current.getScreenshot() as string);
    // setFrontCameraImage(frontCameraRef.current.getScreenshot() as string);
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
            {isFrontCamera ? (
              <FrontCamera cameraRef={frontCameraRef} />
            ) : (
              <BackCamera cameraRef={backCameraRef} />
            )}
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
      {frontCameraImage === "" && backCameraImage === "" && (
        <Button onClick={onOpen}>Open Modal</Button>
      )}
    </Box>
  );
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
