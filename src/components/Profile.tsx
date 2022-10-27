import React, { useEffect } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import { Button, Flex, Text } from "@chakra-ui/react";

export const Profile = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({
    // uncomment to test with ENS, this is vitalik.eth's address
    // address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    address,
    chainId: 1,
  });
  const { chain: network } = useNetwork();
  const { disconnect } = useDisconnect();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const networkSwitch = useSwitchNetwork();

  if (isLoading && network?.id !== 137) {
    if (networkSwitch?.switchNetwork) {
      //call only once to avoid infinite loop
      networkSwitch.switchNetwork(137);
    }
  }

  if (isConnected) {
    return (
      <Flex flexDir={"column"} textAlign="center" alignItems="center">
        <Text>Connected to {network?.name}</Text>
        <Text>Address: {address}</Text>
        <Text>ENS Name: {ensName || "no ENS domain"}</Text>
        <Button colorScheme={"pink"} width={"52"} onClick={() => disconnect()}>
          Disconnect
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      flexDir={"column"}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      gap={2}
      mt={2}
    >
      {connectors.map((connector) => (
        <Button key={connector.id} onClick={() => connect({ connector })}>
          Connect with {connector.name}
        </Button>
      ))}
      {error && <Text color="red">{error.message}</Text>}
    </Flex>
  );
};
