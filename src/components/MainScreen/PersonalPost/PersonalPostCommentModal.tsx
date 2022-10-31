import { useState, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Button,
  Input,
  Container,
} from "@chakra-ui/react";

/**
 * Modal that displays the user's personal post description
 * @returns {JSX.Element} - Modal that displays the user's personal post description
 */
export const PersonalPostCommentModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [description, setDescription] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  return (
    <Container>
      <Text onClick={onOpen}>
        {description === "" ? "Add a description..." : description}
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"90vw"}>
          <ModalHeader>Add a description</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Type a description here..."
              value={inputDescription}
              onChange={(e) => setInputDescription(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                onClose();
                setDescription(description);
                setInputDescription(description);
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                onClose();
                setDescription(inputDescription);
              }}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
