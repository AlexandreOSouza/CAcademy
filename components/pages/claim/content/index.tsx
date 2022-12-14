import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { shortAddress } from "../../../../utils/strings";
import { LineWave, MagnifyingGlass, Puff } from "react-loader-spinner";
import BaseCTA from "../../../buttons/baseCTA";
import Spline from "@splinetool/react-spline";
import { useWallet } from "../../../../hooks/useWallet";

const ClaimContent = () => {
  const { address, connect, isLoading } = useWallet();
  const handleClick = () => {
    connect();
  };

  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      overflow={"hidden"}
      pt={"70px"}
      px={"50px"}
      background={"primary"}
    >
      <Flex flexDirection={"column"} pt={"5%"}>
        <Text
          color={"secondary"}
          fontSize={"15em"}
          fontWeight={300}
          lineHeight={"80%"}
          px={"0px"}
        >
          Claim
        </Text>
        <Text color={"yellow"} fontSize={"4em"} fontWeight={200} mt={"10px"}>
          Your new degree
        </Text>
        {address ? (
          <>
            <Text
              color={"secondary"}
              fontWeight={400}
              mt={"50px"}
              fontSize={"20px"}
            >
              Welcome {shortAddress(address)}
            </Text>
            <BaseCTA>Claim Your Degree</BaseCTA>
          </>
        ) : (
          <>
            {isLoading ? (
              <LineWave width="100" color="yellow" />
            ) : (
              <BaseCTA onClick={handleClick}>Connect You Wallet</BaseCTA>
            )}
          </>
        )}
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent={"center"}>
        <Spline scene="https://prod.spline.design/B7yUw139NMa0Ab9A/scene.splinecode" />
      </Flex>
    </Flex>
  );
};

export default ClaimContent;
