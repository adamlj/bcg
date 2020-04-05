import Layout from '../components/Layout';

import React from 'react'
import {
    Header,
} from 'semantic-ui-react'
import Head from "next/head";
import Link from 'next/link';
import { withTranslation } from '../i18n'
import SwedenForm from '../components/form/se'

const Index = (props) => (
    <>
        <Head>
            <title>Business Crisis Guide</title>
        </Head>

        <Layout>
            <SwedenForm t={props.t} />
        </Layout>
    </>
);
export default withTranslation('common')(Index)



