import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Box,
  Text,
  
} from "@chakra-ui/react";
import { PostImage } from "../PostImage";

interface PersonalPostDrawerProps {
  onClose: () => void;
  isOpen: boolean;
  backCameraImage: string;
  frontCameraImage: string;
  description: string;
}
export const PersonalPostDrawer = ({
  onClose,
  isOpen,
  backCameraImage,
  frontCameraImage,
  description,
}: PersonalPostDrawerProps) => {
  const todaysDate = new Date().toUTCString().split(' ').splice(0, 4).join(' ')
  return (
    <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen} size={"xl"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
        <Text 
            variant="h1" 
            textAlign="center"
            color={"gray.700"}
            mt={1}
            mb={3}
          >
            {todaysDate}
          </Text>
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
          <Text 
            variant="h1" 
            textAlign="center"
            color={"gray.700"}
            mt={3}
            mb={3}
          >
            {description || "No description provided"}
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
