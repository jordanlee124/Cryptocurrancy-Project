import React from "react";
import MainLayout from "../components/templates/MainLayout/MainLayout";
import CryptoTable from "../components/organisms/CryptoTable/CryptoTable";

export default function Home() {
  return (
    <MainLayout>
      <CryptoTable />
    </MainLayout>
  );
}
