import React from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import { Button, Flex, Text } from "@chakra-ui/react";

/**
 * Component thet displays login buttons for metamask and wallet
 * connect if the user is not connected
 * @returns {JSX.Element}
 */
export const Login = () => {
  const { isConnected } = useAccount();
  const { chain: network } = useNetwork();
  const { disconnect } = useDisconnect();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const networkSwitch = useSwitchNetwork();

  //TODO: add a way to switch networks
  // if (isLoading && network?.id !== 137) {
  //   if (networkSwitch?.switchNetwork) {
  //     //call only once to avoid infinite loop
  //     networkSwitch.switchNetwork(137);
  //   }
  // }

  return !isConnected ? (
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
  ) : null;
};
