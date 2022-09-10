import React, { createContext, useContext, useState } from "react";
import Web3Modal from "web3modal";
import { ethers, Contract } from "ethers";

type WalletProps = {
  connect: () => void;
  address: string;
  isLoading: boolean;
};

interface ProviderProps {
  children: React.ReactNode;
}

const WalletContext = createContext({
  connect: () => {},
  address: "",
  isLoading: false,
});

export const WalletContextProvider = ({ children }: ProviderProps) => {
  const [address, setAddress] = useState("");
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>();
  const [contract, setContract] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const connect = async () => {
    setIsLoading(true);
    const accountList = await window?.ethereum?.request({
      method: "eth_requestAccounts",
    });
    const hasSomeAccountConnected = accountList?.length > 0;
    if (hasSomeAccountConnected) {
      setAddress(accountList[0]);
      const web3Provider = new ethers.providers.Web3Provider(window?.ethereum);
      setSigner(web3Provider?.getSigner());
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
  };

  return (
    <WalletContext.Provider
      value={{
        connect,
        address,
        isLoading,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);

  return context;
};
