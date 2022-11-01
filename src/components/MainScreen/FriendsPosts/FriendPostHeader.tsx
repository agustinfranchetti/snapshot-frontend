import { Avatar, Text, Flex } from "@chakra-ui/react";
import { FriendPostOptions } from "./FriendPostOptions";

interface FriendPostHeaderProps {
  name: string;
  profilePicture: string;
}
/**
 * Component that displays the header of a friend's post
 * containing the friend's name and profile picture
 * @returns {JSX.Element}
 */
export const FriendPostHeader = ({
  name,
  profilePicture,
}: FriendPostHeaderProps) => {
  return (
    <Flex w={"90vw"} justifyContent={"space-between"} mt={2}>
      <Flex gap={2} alignItems={"center"} mx={2}>
        <Avatar size={"sm"} name={`profile-pic-${name}`} src={profilePicture} />
        <Flex flexDir={"column"}>
          <Text fontWeight={"bold"}>{name}</Text>
          <Text fontSize={"xs"} color={"gray.500"}>
            1h ago
          </Text>
        </Flex>
      </Flex>
      <FriendPostOptions />
    </Flex>
  );
};
