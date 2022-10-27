import React from "react";
import { useAccount, useDisconnect, useEnsName, useNetwork } from "wagmi";
import { Button, Flex, Text } from "@chakra-ui/react";

export const Login = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({
    // uncomment to test with ENS, this is vitalik.eth's address
    // address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    address,
    chainId: 1,
  });
  const { chain: network } = useNetwork();
  const { disconnect } = useDisconnect();

  return isConnected ? (
    <Flex flexDir={"column"} textAlign="center" alignItems="center">
      <Text>Connected to {network?.name}</Text>
      <Text>Address: {address}</Text>
      <Text>ENS Name: {ensName || "no ENS domain"}</Text>
      <Button colorScheme={"pink"} width={"52"} onClick={() => disconnect()}>
        Disconnect
      </Button>
    </Flex>
  ) : null;
};
