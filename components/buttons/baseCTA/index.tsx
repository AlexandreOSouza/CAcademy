import { Button } from "@chakra-ui/react";

type BaseCTAProps = {
  onClick?: () => void;
  children?: any;
};

const BaseCTA = ({ children, onClick }: BaseCTAProps) => {
  return (
    <Button
      width={"200px"}
      variant={"outline"}
      borderColor={"secondary"}
      borderRadius={"20px"}
      color={"secondary"}
      fontWeight={"400"}
      mt={"20px"}
      _hover={{
        backgroundColor: "secondary",
        color: "lightGray",
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default BaseCTA;
