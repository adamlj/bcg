import React, {useState} from 'react';
import {Accordion, Icon, Header, Form, Message, Grid} from 'semantic-ui-react'
import http from "../../utils/axios";
import plans from "./plans"
import colors from "../../colors"

export default function Result({data, handleChange, ...props}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [saved, setSaved] = useState(false);

    const handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const newIndex = activeIndex === index ? -1 : index;
        setActiveIndex(newIndex)
    };

    const calculateSavings = () => {
        let savings = 0;
        if (data.employees_count > 0) {
            let salarySum = 0;
            data.employees.map((employee, index) => {
                salarySum += employee.salary;
            })
            savings += salarySum * 1, 3142 * 0, 53 * 6;

            if (data.employees_count > 30) {
                savings += 30 * 25000 * 0, 2121;
            } else {
                savings += data.employees_count * 25000 * 0, 2121;
            }
        }

        if (data.monthly_rent && data.exposed_business) {
            savings += data.monthly_rent * 0.5;
        }

        return savings;
    };

    const save = () => {
        if (data.email && data.email.length) {
            const email = data.email;
            delete data.email;

            http.post('/api/business/', {
                email: email,
                details: data
            }).then((response) => {
                setSaved(true);
            });
        }
    };

    return (
        <>

            <div className="heading">
                {calculateSavings() > 0 ?
                    <>
                        <Header>{props.t('Spara upp till')}</Header>
                        <Header className="savings">{calculateSavings()} <span>SEK/månad</span></Header>
                        <p>genom att följa stegen nedan</p>
                    </>
                    :
                    <Header>{props.t('Se vilken hjälp du kan få')}</Header>
                }

            </div>
            <Message positive>
                {!saved &&
                <>
                    <Message.Header>{props.t('Håll koll på förändringar')}</Message.Header>
                    <p>{props.t('Ange din mail så får du ett mail när läget förändras för just ditt specifika företag')}</p>
                    <Form.Group>


                        <Form.Input
                            width={10}
                            placeholder='Email'
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                        />
                        <Form.Button width={6} size="large" fluid content={props.t('Spara')} onClick={save} primary/>
                    </Form.Group>
                </>
                }
                {saved &&
                <>
                    <Message.Header>{props.t('Tack för att du sparar dina uppgifter')}</Message.Header>
                    <p>{props.t('Vi hör av oss så fort vi vet mer!')}</p>
                </>
                }
            </Message>

            {[
                {
                    title: 'Stöd du kan få',
                    icon: 'check circle',
                    eligibleKey: 1,
                    iconColor: "green",
                    color: colors.dropdownGreen
                },
                {
                    title: 'Stöd du kanske kan få',
                    icon: 'question circle',
                    eligibleKey: 2,
                    iconColor: "yellow",
                    color: colors.dropdownYellow
                }, {
                    title: 'Stöd du inte kan få',
                    icon: 'exclamation triangle',
                    eligibleKey: 3,
                    iconColor: "red",
                    color: colors.dropdownGrey
                }].map((support, parentIndex) => {
                return (
                    <React.Fragment key={`accordion-${parentIndex}`}>
                        <Header as='h2'><Icon name={support.icon} color={support.iconColor}/> {support.title}</Header>
                        <Accordion style={{marginBottom: "50px"}}>
                            {
                                plans.filter(function (plan) {
                                    return plan.isEligible(data) == support.eligibleKey;
                                }).map((plan, index) => {
                                    let key = `${parentIndex}-${index}`;
                                    return (
                                        <React.Fragment key={key}>
                                            <Accordion.Title
                                                className="main-title"
                                                active={activeIndex === key}
                                                index={key}
                                                onClick={handleClick}
                                                style={{background: support.color}}
                                            >
                                                <Grid>
                                                    <Grid.Column tablet={15} computer={15}
                                                                 mobile={14}>{plan.title}</Grid.Column>
                                                    <Grid.Column tablet={1} computer={1} mobile={2}>
                                                        <Icon name={activeIndex === key ? 'angle up' : 'angle down'}
                                                              size='large' position="right"/>
                                                    </Grid.Column>
                                                </Grid>
                                            </Accordion.Title>
                                            <Accordion.Content active={activeIndex === key}>
                                                {plan.description}
                                            </Accordion.Content>


                                        </React.Fragment>
                                    );
                                })
                            }

                        </Accordion>
                    </React.Fragment>
                );
            })}
            <style jsx global>
                {`
.heading {
    text-align:center;
    margin-top:-20px;
}
.heading .ui.header {
    font-size:32px;
    font-weight:400;
    margin:0;
}
.heading .savings {
    font-size:46px!important;
    color:${colors.teal};
    font-weight:700!important;
}
.heading .savings span{
    font-size:30px!important;
}
.heading p{
    font-size:20px!important;
}

.ui.positive.message {
    background:${colors.teal};
    border:0;
    box-shadow:none;
    color:white;
    font-size:16px;
    margin:30px 0 50px 0;
    padding:40px;
}

.ui.positive.message .header {
    color:white;
    font-size:18px;
}

.ui.message .primary.button, .ui.primary.button:focus  {
    background:${colors.lighterTeal};
    padding-bottom:14px;
}

h2.ui.header {
    font-size:26px;
}

.ui.accordion .main-title.title:not(.ui) {
    padding:10px 20px;
    font-family:'Montserrat';
    font-size:16px;
    font-weight:700;
    color:white;
    margin-bottom:6px;
}
.ui.accordion .content {
    padding:20px 20px!important;
}

/* For sub accordions */
.ui.accordion .content .content {
    padding:10px 20px!important;
}

.ui.accordion .content h2.ui.header {
    font-size:18px!important;
}

.ui.accordion .content h3.ui.header {
    font-size:16px!important;
}


@media only screen and (min-width:767px) {
    .heading .ui.header {
        font-size:46px;
        line-height:86px;
    }
    .heading .savings {
        font-size:86px!important;
    }
    .heading .savings span{
        font-size:36px!important;
    }
    .heading p{
        font-size:26px!important;
    }
}

`}
            </style>

        </>
    );
}

//Use https://react.semantic-ui.com/modules/accordion/