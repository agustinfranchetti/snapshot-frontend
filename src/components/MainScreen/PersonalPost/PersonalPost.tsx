import { useState, useRef } from "react";
import { FriendsReactions } from "./FriendsReactions";
import { Box, useDisclosure } from "@chakra-ui/react";
import { PostImage } from "../PostImage";
import { PersonalPostDrawer } from "./PersonalPostDrawer";
import { PersonalPostCommentModal } from "./PersonalPostCommentModal";
import { CameraPhotos } from "./CameraPhotos";
/**
 * Component that displays the user's personal post for the day
 * @returns {JSX.Element}
 */
export const PersonalPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backCameraImage, setBackCameraImage] = useState("");
  const [frontCameraImage, setFrontCameraImage] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      textAlign="center"
      alignItems={"center"}
      borderRadius="10"
      boxSize={"150px"}
      w={"100%"}
    >
      {backCameraImage === "" && frontCameraImage === "" ? (
        <CameraPhotos
          setFrontCameraImage={setFrontCameraImage}
          setBackCameraImage={setBackCameraImage}
          frontCameraImage={frontCameraImage}
          backCameraImage={backCameraImage}
        />
      ) : (
        <Box>
          <PostImage
            backCameraImage={backCameraImage}
            frontCameraImage={frontCameraImage}
            isLarge={false}
            onClick={onOpen}
          />
          <FriendsReactions />
          <PersonalPostCommentModal
            description={description}
            setDescription={setDescription}
          />
          <PersonalPostDrawer
            onClose={onClose}
            isOpen={isOpen}
            backCameraImage={backCameraImage}
            frontCameraImage={frontCameraImage}
            description={description}
          />
        </Box>
      )}
    </Box>
  );
};
