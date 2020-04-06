import Layout from '../components/Layout';

import React from 'react'
import Head from "next/head";
import { withTranslation } from '../i18n'
import Start from '../components/Start'

const Index = (props) => (
    <>
        <Head>
            <title>{props.t('Business Crisis Guide')}</title>
        </Head>

        <Layout>
            <Start t={props.t} />
        </Layout>
    </>
);
export default withTranslation('common')(Index)



