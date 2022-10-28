import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Box,
} from "@chakra-ui/react";
import { PostImage } from "../PostImage";

interface PersonalPostDrawerProps {
  onClose: () => void;
  isOpen: boolean;
  backCameraImage: string;
  frontCameraImage: string;
}
export const PersonalPostDrawer = ({
  onClose,
  isOpen,
  backCameraImage,
  frontCameraImage,
}: PersonalPostDrawerProps) => {
  return (
    <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen} size={"xl"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign="center"
            alignItems={"center"}
          >
            <PostImage
              backCameraImage={backCameraImage}
              frontCameraImage={frontCameraImage}
              isLarge={true}
            />
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
