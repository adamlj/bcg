import React from 'react';
import {Form} from 'semantic-ui-react'
import BooleanRadio from "../BooleanRadio";

export default function Company({data, handleChange, ...props}) {
    const companyOptions = [
        {key: 'ef', value: 'ef', text: props.t('Sole Proprietor (Enskild Firma)')},
        {key: 'ab', value: 'ab', text: props.t('Limited Company (Aktiebolag)')}
    ];

    return (
        <>
            <Form.Field>
                <label>{props.t('Select your Company type')}</label>
                <Form.Select placeholder={props.t('Company Type')} name='company_type' value={data.company_type}
                             onChange={handleChange} options={companyOptions}/>
            </Form.Field>

            <BooleanRadio
                label={props.t('Har företaget kollektivavtal eller hängavtal?')}
                data={data}
                name='union_agreement'
                handleChange={handleChange}
            />

            {data.company_type == 'ab' &&
            <>
                <BooleanRadio
                    label={props.t('Gjorde företaget vinst 2019?')}
                    data={data}
                    name='made_profit_2019'
                    handleChange={handleChange}
                />

                <BooleanRadio
                    label={props.t('Har det gjorts eller planeras det för utdelning under 2019 eller 2020?')}
                    data={data}
                    name='dividend'
                    handleChange={handleChange}
                />
            </>
            }

            <BooleanRadio
                label={props.t('Har företaget obetalda skatteskulder eller ärende hos Kronofogden?')}
                data={data}
                name='insolvent'
                handleChange={handleChange}
            />
        </>
    );
}