import React from 'react';
import {Form, Input} from 'semantic-ui-react'
import BooleanRadio from "../BooleanRadio";
import municipalityObjects from './municipalities'

export default function Rent({data, handleChange, ...props}) {
    return (
        <>
            <Form.Field>
                <label>{props.t('I vilken kommun är företaget verksamt?')}</label>
                <Form.Dropdown
                    clearable
                    fluid
                    search
                    selection
                    options={municipalityObjects}
                    placeholder='Välj den kommun du är verksam i'
                    name='municipality'
                    value={data.municipality}
                    onChange={handleChange}
                />
            </Form.Field>

            <BooleanRadio
                label={props.t('Bedriver företaget verksamhet inom hotell, restaurang, butik, frisör, kroppsvård eller snarlik verksamhet?')}
                data={data}
                name='exposed_business'
                handleChange={handleChange}
            />

            {data.exposed_business &&
            <>
                <BooleanRadio
                    label={props.t('Hyr du en lokal?')}
                    data={data}
                    name='is_renter'
                    handleChange={handleChange}
                />
            </>
            }

            {data.is_renter &&
            <Form.Field>
                <label>{props.t('Ange månadshyra för lokalen')}</label>

                <Input placeholder={props.t('Ange månadshyra')} name='monthly_rent'
                            value={data.monthly_rent}
                            onChange={handleChange}
                            label={{basic: true, content: 'SEK / månad'}}
                            labelPosition='right'
                />
            </Form.Field>
            }

            <BooleanRadio
                label={props.t('Är företaget äldre än 6 månader?')}
                data={data}
                name='company_is_old'
                handleChange={handleChange}
            />

            {data.company_is_old === false &&
            <>
                <Form.Field>
                    <label>{props.t('När startade företaget?')}</label>
                    <Form.Select placeholder={props.t('Hur många månader sedan startade du?')}
                                 name='company_age_months' value={data.company_age_months}
                                 onChange={handleChange} options={[
                        {text: '1 Månad sedan', key: 1, value: 1},
                        {text: '2 Månader sedan', key: 2, value: 2},
                        {text: '3 Månader sedan', key: 3, value: 3},
                        {text: '4 Månader sedan', key: 4, value: 4},
                        {text: '5 Månader sedan', key: 5, value: 5},
                        {text: '6 Månader sedan', key: 6, value: 6},
                    ]}/>
                </Form.Field>

                <BooleanRadio
                    label={props.t('Har du fått starta eget bidrag från Arbetsförmedlingen?')}
                    data={data}
                    name='company_received_seb'
                    handleChange={handleChange}
                />

            </>
            }

        </>
    );
}