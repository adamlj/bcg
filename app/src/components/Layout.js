import React, {useEffect} from 'react';
import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {initGA, logPageView} from '../utils/ga'


import {
    Container,
    Dropdown,
    Header,
    Menu,
    Flag
} from 'semantic-ui-react'

import {i18n, withTranslation} from '../i18n'

import colors from '../colors';

const Layout = ({t, ...props}) => {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    });


    return (
        <>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"/>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800" rel="stylesheet"/>
            </Head>

            <Menu fixed='top'>
                <Container>
                    <Link href="/">
                        <Menu.Item as='a' header>
                            {t('Business Crisis Guide')}
                        </Menu.Item>
                    </Link>
                    <Menu.Menu position='right'>
                        <Link href="/about-us">
                            <Menu.Item as='a'>{t('About us')}</Menu.Item>
                        </Link>
                        {
                            /*
                        <Dropdown item simple text={t('Language')}>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => i18n.changeLanguage('sv')}>
                                    <Flag name="se"/> Svenska
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => i18n.changeLanguage('en')}>
                                    <Flag name="gb"/> English
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                             */
                        }
                    </Menu.Menu>
                </Container>
            </Menu>

            <Container className='form-container'>
                {props.children}
            </Container>


            <style jsx global>
                {`
body {
    color:${colors.black};
    font-family:'Montserrat';
    font-size:18px;
    font-weight:400;
    line-height:28px;
    height:auto;
}

p {
    line-height:28px;
}

.ui.container.form-container {
    margin-top:4.3em;
    max-width:833px!important;
}

.ui.menu {
    font-family:'Montserrat';
    font-size:18px;
    border:0;
    box-shadow:none;
}
.menu a.header {
    border:0!important;
}

.menu .item:before {
    background:none!important;
}
.ui.header {
    font-family:'Montserrat';
}

.ui.button {
    font-family:'Montserrat';
}

.ui.primary.button, .ui.primary.button:focus  {
    background:${colors.teal}
}

.ui.primary.button:hover {
    background:${colors.lighterTeal}
}

.ui.form .field>label {
    font-family:'Montserrat';
    font-size:16px;
}

.ui.form > .field {
    margin-bottom:30px;
}

.ui.message .header {
    font-family:'Montserrat';
}

@media only screen and (min-width:767px) {
    .ui.container.form-container {
        margin-top:5.5em;
    }
}
`}

            </style>

        </>
    )
};

Layout.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Layout.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Layout)
