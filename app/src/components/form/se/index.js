import React, {useState, useEffect} from 'react';

import Start from './Start'
import Salary from './Salary'
import Rent from './Rent'
import Company from './Company'
import Result from './Result'
import Steps from '../Steps'
import {Form, Button} from 'semantic-ui-react'
import Cafe from "../../../public/svg/cafe.svg";
import Sports from "../../../public/svg/sports.svg";
import Celebrate from "../../../public/svg/celebrate.svg";
import Hardware from "../../../public/svg/hardware.svg";

const steps = {
    start: {
        title: 'Start',
        form: props => <Start {...props}/>,
        next: () => 'company'
    },
    company: {
        title: 'Company',
        form: props => <Company {...props}/>,
        next: () => 'rent',
        illustration: <Cafe />,
        step: 1
    },
    rent: {
        title: 'Rent',
        form: props => <Rent {...props}/>,
        next: () => 'salary',
        illustration: <Sports />,
        step: 2
    },
    salary: {
        title: 'Salary',
        form: props => <Salary {...props}/>,
        next: () => 'result',
        illustration: <Hardware />,
        step: 3
    },
    result: {
        title: 'Result',
        form: props => <Result {...props}/>,
        next: () => 'result',
        illustration: <Celebrate />,
        step: 4
    }
};


export default function SwedenForm(props) {
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
    const [currentStep, setCurrentStep] = useState('start');

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
        setCurrentStep(steps[currentStep].next());
        window.scrollTo(0, 0);
    };

    const changeStep = (newStep, post = true) => {
        const setStep = () => {
            props.history.push(`/form/${newStep}`);
        };
    };

    return (
        <Form onSubmit={handleNext} style={{marginBottom: "40px"}}>
            {currentStep !== 'start' &&
            <>
                <div className="illustration">
                    {steps[currentStep].illustration}
                </div>

                <Steps steps={4} active={steps[currentStep].step}/>
            </>
            }

            {steps[currentStep].form({
                data: data,
                handleChange: handleChange,
                setData: setData,
                t: props.t
            })}
            {currentStep != 'result' &&
            <div style={{textAlign: 'center', marginTop: '30px'}}>
                <Button content={currentStep == 'start' ? props.t('See what help you can get') : 'Fortsätt'} primary size="huge"
                        type="submit"/>
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


    );
}
