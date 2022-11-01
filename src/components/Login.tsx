import React from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import { Button, Flex, Text, Box } from "@chakra-ui/react";

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

  connectors.forEach((connector) => {
    console.log(connector);
  });

  return !isConnected ? (
    <Flex
      flexDir={"column"}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      h={"80vh"}
    >
      <Text fontSize="6xl" fontWeight="extrabold" mb={5}>
        SnapShot
      </Text>
      <Text fontSize={"xl"} mb={10} fontWeight="semibold">Connect your wallet to continue</Text>
      {connectors.map((connector, index) => (
        <Box>
        <Button key={connector.id} onClick={() => connect({ connector })} w={"80vw"} color="white" bgColor="black">
          Connect with {connector.name}
        </Button>
        {index === 0 && <Text fontSize={"xl"} my={1}>- or -</Text>}
      </Box>
      ))}

      {error && <Text color="red">{error.message}</Text>}
    </Flex>
  ) : null;
};
