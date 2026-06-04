import React from "react";
import MainLayout from "../components/templates/MainLayout/MainLayout";
import MarketOverview from "../components/organisms/MarketOverview/MarketOverview";
import CryptoTable from "../components/organisms/CryptoTable/CryptoTable";

export default function Home() {
  return (
    <MainLayout>
      <MarketOverview />
      <CryptoTable />
    </MainLayout>
  );
}
