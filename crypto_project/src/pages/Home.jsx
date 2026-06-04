import React from "react";
import { Divider } from "@mui/material";
import MainLayout from "../components/templates/MainLayout/MainLayout";
import MarketOverview from "../components/organisms/MarketOverview/MarketOverview";
import CryptoTable from "../components/organisms/CryptoTable/CryptoTable";

export default function Home() {
  return (
    <MainLayout>
      <MarketOverview />
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', width: '90vw', margin: '24px auto' }} />
      <CryptoTable />
    </MainLayout>
  );
}
