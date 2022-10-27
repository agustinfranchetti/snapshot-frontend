import React from "react";
import { Flex } from "@chakra-ui/react";
import { useAccount } from "wagmi";

import { Login } from "../Login";
import { MainScreen } from "./MainScreen";

export const MainScreenContainer = () => {
  const { isConnected } = useAccount();
  return (
    <Flex flexDir="column" alignItems="center" mt={2}>
      {isConnected ? <MainScreen /> : <Login />}
    </Flex>
  );
};
