import React from "react";
import { Flex } from "@chakra-ui/react";
import { useAccount } from "wagmi";

import { Login } from "../Login";
import { MainScreen } from "./MainScreen";

/**
 * Component that either displays the login screen or the main screen
 * @returns {JSX.Element} either the login screen or the main screen
 */
export const MainScreenContainer = () => {
  const { isConnected } = useAccount();
  return (
    <Flex flexDir="column" alignItems="center" mt={2}>
      {isConnected ? <MainScreen /> : <Login />}
       {/* <MainScreen />  */}
    </Flex>
  );
};
