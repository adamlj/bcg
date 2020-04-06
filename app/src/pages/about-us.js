import Layout from '../components/Layout';

import React from 'react'
import {Header, Card, Image, Grid} from 'semantic-ui-react'
import Head from "next/head";

const AboutUs = () => (
    <>
        <Head>
            <title>Om oss - Business Crisis Guide</title>
        </Head>

        <Layout>
            <Header as='h1'>About us</Header>
            <p>This service was built during a weekend as a submission to <a href="https://www.hackthecrisis.se/">Hack
                the
                Crisis Sweden</a>.</p>
            <Card.Group>
                {[
                    {
                        image: '/static/images/cat-elinor.png',
                        name: 'Elinor Hägg',
                        title: 'UI & Illustration Hacker',
                        description: 'Elinor creates our great UI and all our Illustrations'
                    },
                    {
                        image: '/static/images/cat-dan.png',
                        name: 'Dan Egerstad',
                        title: 'Legal Hacker',
                        description: 'Dan understands and summarizes all Legal info'
                    },
                    {
                        image: '/static/images/cat-adam.png',
                        name: 'Adam Ljungrell',
                        title: 'Fullstack Developer Hacker',
                        description: 'Adam codes the frontend and the backend of the app'
                    },
                ].map((member, index) => {
                    return (
                        <Card key={index} fluid>
                            <Card.Content>
                                <Grid>
                                    <Grid.Column computer={8} mobile={8}>
                                        <Card.Header>{member.name}</Card.Header>
                                        <Card.Meta>{member.title}</Card.Meta>
                                        <Card.Description floated='left'>
                                            {member.description}
                                        </Card.Description>
                                    </Grid.Column>
                                    <Grid.Column computer={8} mobile={8} style={{textAlign:"center"}}>
                                        <img src={member.image}
                                             style={{maxHeight: "200px", maxWidth: "100%"}}/></Grid.Column>
                                </Grid>
                            </Card.Content>
                        </Card>
                    )
                })
                }

            </Card.Group>

        </Layout>
    </>
);

export default AboutUs;


