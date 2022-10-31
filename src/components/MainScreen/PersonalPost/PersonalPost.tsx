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
  const frontCameraImage =
    "https://source.unsplash.com/user/simonmigaj/400x450";

  const [description, setDescription] = useState("");

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      textAlign="center"
      alignItems={"center"}
    >
      <CameraPhotos
        backCameraImage={backCameraImage}
        setBackCameraImage={setBackCameraImage}
      />
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
  );
};
