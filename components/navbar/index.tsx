import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import MenuDrawer from "./drawer";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      position={"fixed"}
      width={"100vw"}
      height={"70px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={"50px"}
    >
      <h1>Logo</h1>
      <IconButton
        icon={<HamburgerIcon />}
        aria-label={"Menu"}
        onClick={onOpen}
        background={"primary"}
      />
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default NavBar;
