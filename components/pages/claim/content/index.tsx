import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { shortAddress } from "../../../../utils/strings";
import { LineWave, MagnifyingGlass, Puff } from "react-loader-spinner";
import BaseCTA from "../../../buttons/baseCTA";

const ClaimContent = () => {
  const [address, setAddress] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    setAddress("0x89795cC75Bab93b562A673b8FbD9c32E2eaD2BdD");
    setIsLoading(false);
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
      <Flex flex={1} flexDirection={"column"} pt={"5%"}>
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
            <BaseCTA>Claim your degree</BaseCTA>
          </>
        ) : (
          <>
            {isLoading ? (
              <LineWave width="100" color="yellow" />
            ) : (
              <BaseCTA onClick={handleClick}>Connect you wallet</BaseCTA>
            )}
          </>
        )}
      </Flex>
      <Flex flex={1}>
        {/* TODO - Add some 3d object here related to the site  */}
      </Flex>
    </Flex>
  );
};

export default ClaimContent;
