import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import SeoServices from '@/components/sections/SeoServices';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Search Engine Optimization" />
                <SeoServices/>
            </Layout>
        </>
    )
}
