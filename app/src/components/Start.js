import React from 'react';
import {Header, Button} from 'semantic-ui-react'
import Hero from '../public/svg/hero.svg'
import Link from 'next/link';

export default function Start({data, handleChange, ...props}) {
    return (
        <>
            <div className="hero">
                <Hero/>
                <Header as='h1'>
                    {props.t('The complete guide to helping your business survive the corona crisis')}
                </Header>
                <p>
                    {props.t('heroParagraph')}
                </p>
            </div>

            <div style={{textAlign: 'center', marginTop: '30px'}}>
                <Link href='/help/[id]' as='/help/company'>
                    <Button content={props.t('See what help you can get')} primary size="huge" type="submit"/>
                </Link>
            </div>

            <style jsx global>
                {`

.hero {
    text-align:center;
    font-size:18px;
    line-height:18px;
}

.hero h1 {
    font-size:28px!important;
    font-weight:700!important;
    margin: 20px 0;
}

@media only screen and (min-width:767px) {
     .hero {
        padding-top:60px;     
     }
     .hero h1 {
        font-size:42px!important;
        font-weight:400!important;
    }
}

`}
            </style>

        </>
    );
}