import { AvatarGroup, Avatar } from "@chakra-ui/react";

/**
 * Component containing the reactions of the user's friends
 * for the user's personal post
 * @returns {JSX.Element}
 */
export const FriendsReactions = () => {
  return (
    <AvatarGroup size="sm" max={2} mt={-5}>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
      <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
    </AvatarGroup>
  );
};
