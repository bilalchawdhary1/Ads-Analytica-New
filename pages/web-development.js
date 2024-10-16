import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import WebService from "@/components/sections/WebService";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="one">
        <PageTitle
          pageName="web design and development"/>
        <WebService />
      </Layout>
    </>
  );
}
