import { Avatar, Text, Flex, IconButton } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

/**
 * Component that displays the header of a friend's post
 * containing the friend's name and profile picture
 * @returns {JSX.Element}
 */
export const FriendPostHeader = () => {
  return (
    <Flex w={"90vw"} justifyContent={"space-between"} mt={2}>
      <Flex gap={2} alignItems={"center"}>
        <Avatar
          size={"sm"}
          name={"Dan Abrahmov"}
          src={"https://bit.ly/dan-abramov"}
        />
        <Flex flexDir={"column"}>
          <Text fontWeight={"bold"}>dan_abrahmov</Text>
          <Text fontSize={"xs"} color={"gray.500"}>
            1h ago
          </Text>
        </Flex>
      </Flex>
      <IconButton
        aria-label="Options"
        icon={<BsThreeDots size={"1.7rem"} />}
        isRound
        variant="ghost"
        onClick={() => {
          console.log("Options");
        }}
      />
    </Flex>
  );
};
