import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import GoogleAds from "@/components/sections/GoogleAds";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="google ads" />
                < GoogleAds/>
            </Layout>
        </>
    )
}