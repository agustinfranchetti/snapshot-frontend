import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";
import { NavBar } from "./components/NavBar";
import { Flex, Box } from "@chakra-ui/react";
import { DesktopView } from "./components/MainScreen/DesktopView";

import { MainScreenContainer } from "./components/MainScreen/MainScreenContainer";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygon],
  [publicProvider()]
);

const client = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains: [chain.polygon] }),
    new WalletConnectConnector({
      chains: [chain.polygon],
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

// Pass client to React Context Provider
export const App = () => {
  return (
    <WagmiConfig client={client}>
      <Box display={{ base: "block", md: "none" }}>
        <NavBar />
        <Flex flexDir="column" alignItems="center" mt={"10vh"}>
          <MainScreenContainer />
        </Flex>
      </Box>
      <DesktopView />
    </WagmiConfig>
  );
};
