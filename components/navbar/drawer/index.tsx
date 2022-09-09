import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { LegacyRef, RefObject } from "react";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MenuDrawer = ({ isOpen, onClose }: DrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Logo</DrawerHeader>

        <DrawerBody pt={"40px"}>
          <Flex flexDirection={"column"} gap={10}>
            <Link href={"/claim"}>
              <Button>Claim</Button>
            </Link>
            <Link href={"/my-collection"}>
              <Button>My Collection</Button>
            </Link>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
