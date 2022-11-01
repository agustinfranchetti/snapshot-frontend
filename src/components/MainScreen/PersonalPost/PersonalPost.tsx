import { useState } from "react";
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

  return backCameraImage !== "" && frontCameraImage !== "" ? (
    <Box
      display={"flex"}
      flexDirection={"column"}
      textAlign="center"
      alignItems={"center"}
    >
      <PostImage
        backCameraImage={backCameraImage}
        frontCameraImage={frontCameraImage}
        isLarge={false}
        onClick={onOpen}
      />
      <FriendsReactions />
      <PersonalPostDrawer
        onClose={onClose}
        isOpen={isOpen}
        backCameraImage={backCameraImage}
        frontCameraImage={frontCameraImage}
        description={description}
      />
      <PersonalPostCommentModal
        description={description}
        setDescription={setDescription}
      />
    </Box>
  ) : (
    <CameraPhotos
      setFrontCameraImage={setFrontCameraImage}
      setBackCameraImage={setBackCameraImage}
      frontCameraImage={frontCameraImage}
      backCameraImage={backCameraImage}
    />
  );
};
