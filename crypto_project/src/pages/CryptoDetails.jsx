import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/templates/MainLayout/MainLayout";
import CryptoDetailsCard from "../components/organisms/CryptoDetailsCard/CryptoDetailsCard";
import { useCryptoDetails } from "../hooks/useCryptoDetails";

export default function CryptoDetails() {
  const { id } = useParams();
  const { coin, isLoading } = useCryptoDetails(id);

  return (
    <MainLayout>
      <CryptoDetailsCard coin={coin} isLoading={isLoading} />
    </MainLayout>
  );
}
