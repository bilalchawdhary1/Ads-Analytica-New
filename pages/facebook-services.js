import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import FacebookServices from '@/components/sections/FacebookServices';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Meta facebook ads" />
                <FacebookServices/>
            </Layout>
        </>
    )
}
