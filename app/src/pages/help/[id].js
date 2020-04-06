import React, {useState, useEffect} from 'react';
import Router, {useRouter} from 'next/router';

import Steps from '../../components/Steps'
import Salary from '../../components/se/Salary'
import Rent from '../../components/se/Rent'
import Company from '../../components/se/Company'
import Result from '../../components/se/Result'
import {Form, Button} from 'semantic-ui-react'
import Cafe from "../../public/svg/cafe.svg";
import Sports from "../../public/svg/sports.svg";
import Celebrate from "../../public/svg/celebrate.svg";
import Hardware from "../../public/svg/hardware.svg";
import {withTranslation} from "../../i18n";
import Layout from "../../components/Layout";
import Head from "next/head";

const steps = {
    company: {
        title: 'Company',
        form: props => <Company {...props}/>,
        next: () => 'rent',
        illustration: <Cafe/>,
        step: 1
    },
    rent: {
        title: 'Rent',
        form: props => <Rent {...props}/>,
        next: () => 'salary',
        illustration: <Sports/>,
        step: 2
    },
    salary: {
        title: 'Salary',
        form: props => <Salary {...props}/>,
        next: () => 'result',
        illustration: <Hardware/>,
        step: 3
    },
    result: {
        title: 'Result',
        form: props => <Result {...props}/>,
        next: () => 'result',
        illustration: <Celebrate/>,
        step: 4
    }
};


const Help = (props) => {
    const [data, setData] = useState({
        company_type: null,
        employees_count: 1,
        employees: [{salary: 25000}],
        union_agreement: null,
        made_profit_2019: null,
        monthly_rent: 10000,
        dividend: null,
        exposed_business: null,
        is_renter: null,
        insolvent: null,
        employees_outside_owners: null,
        municipality: '',
        company_is_old: null,
        company_age_months: null,
        company_received_seb: null,
        email: ''
    });

    const [currentStep, setCurrentStep] = useState('company');
    const router = useRouter();

    useEffect(() => {
        window.onpopstate = (e) => {
            if (e.state && e.state.as) {
                setCurrentStep(e.state.as.replace('/help/', ''));
            }
        };

        if (router.query.id) {
            setCurrentStep(router.query.id);
        }
    }, []);

    const handleChange = (e, {name, value}) => {
        /* Radio component doesn't like getting true/false as Value */
        if (value == 'radio-yes') {
            value = true;
        } else if (value == 'radio-no') {
            value = false;
        }
        setData({...data, [name]: value});
    };

    const handleNext = (e) => {
        let nextStep = steps[currentStep].next();
        router.push('/help/[id]', `/help/${nextStep}`);
        setCurrentStep(nextStep);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Head>
                <title>{props.t('Business Crisis Guide')}</title>
            </Head>

            <Layout>
                <Form onSubmit={handleNext} style={{marginBottom: "40px"}}>
                    <div className="illustration">
                        {steps[currentStep].illustration}
                    </div>

                    <Steps steps={4} active={steps[currentStep].step}/>

                    {steps[currentStep].form({
                        data: data,
                        handleChange: handleChange,
                        setData: setData,
                        t: props.t
                    })}
                    {currentStep != 'result' &&
                    <div style={{textAlign: 'center', marginTop: '30px'}}>
                        <Button content={props.t('Continue')} primary size="huge" type="submit"/>
                    </div>
                    }
                    <style jsx global>
                        {`
.illustration {
    margin-bottom:10px;
}
.illustration svg {
    max-height:180px;
}
`}
                    </style>
                </Form>
            </Layout>
        </>
    );
}
export default withTranslation('common')(Help)

