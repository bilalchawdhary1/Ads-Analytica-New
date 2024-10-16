import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import Home1_Section6 from '@/components/sections/Home1/Home1_Section6_testimonial1';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
              <PageTitle pageName="Testimonials" />
              <Home1_Section6 />
            </Layout>
        </>
    )
}
