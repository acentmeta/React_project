import React, { FC, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Main from "./main";
import { mintAnimalTokenContract } from "./web3Config";

const MarketApp: FC = () => {
  const [account, setAccount] = useState<string>("");

  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAccount();
  }, [account]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/market/main" element={<Main account={account} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default MarketApp;