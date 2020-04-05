import Layout from '../components/Layout';

import React from 'react'
import {
    Header,
} from 'semantic-ui-react'

import Head from "next/head";

const AboutUs = () => (
    <>
        <Head>
            <title>Om oss - Business Crisis Guide</title>
        </Head>

        <Layout>
            <Header as='h1'>Om oss</Header>
            <p>We have the best brains, ask anyone.</p>
        </Layout>
    </>
);

export default AboutUs;


