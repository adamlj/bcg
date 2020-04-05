import React, {useState, useEffect} from 'react';
import {Form} from 'semantic-ui-react'
import BooleanRadio from "../BooleanRadio";
import {Slider} from "react-semantic-ui-range";
import {Divider, Grid, Input} from "semantic-ui-react";
import colors from "../../../colors"

const SalarySlider = ({updateEmployee, ...props}) => {
    const [value, setValue] = useState(25000);

    useEffect(() => {
        updateEmployee({salary: value});
    }, [value]);

    const settings = {
        start: 25000,
        min: 0,
        max: 75000,
        step: 1,
        onChange: value => {
            setValue(value);
        }
    };
    return (
        <>
            {props.index > 0 && <Divider style={{margin: "40px 0"}}/>}
            <Grid verticalAlign='middle'>
                <Grid.Column computer={3} tablet={4} mobile={16}>
                    {props.index === 0 ? 'Du själv/ägare' : `Anställd ${props.index}`}
                </Grid.Column>
                <Grid.Column computer={6} tablet={4} mobile={16}>
                    <Input placeholder="Enter Value"
                           value={value}
                           label={{basic: true, content: 'SEK / månad'}}
                           labelPosition='right'
                           onChange={(e) => {
                               const val = parseInt(e.target.value);
                               if (val && val <= settings.max) {
                                   setValue(parseInt(e.target.value));
                               } else {
                                   setValue(0);
                               }
                           }}/>
                </Grid.Column>
                <Grid.Column computer={7} tablet={8} mobile={16}>
                    <Slider value={value} color="red" settings={settings}
                            style={{trackFill: {backgroundColor: colors.teal}}}/>
                </Grid.Column>
            </Grid>
        </>
    )
}


export default function Salary({data, handleChange, setData, ...props}) {

    const changeEmployees = (e, {value}) => {
        let employees_count = parseInt(value);
        if (!employees_count) {
            employees_count = 0;
        }

        if (employees_count > 100) {
            employees_count = 100;
        }

        let employees = data.employees;

        const addEmployees = (amount) => {
            let i, tmp = [];

            for (i = 0; i < amount; i++) {
                employees.push({salary: 25000});
            }
        };

        if (data.employees.length) {
            if (value > data.employees.length) {
                addEmployees(parseInt(value) - data.employees.length)
            } else if (value < data.employees.length) {
                employees = data.employees.slice(0, value);
            }
        } else {
            addEmployees(parseInt(value));
        }
        setData({...data, employees_count: employees_count, employees: employees});
    };

    return (
        <>
            <Form.Field>
                <label>{props.t('Hur många anställda har ditt företag?')}</label>
                <Form.Input placeholder={props.t('Ange antal anställda (0-100st)')} name='employees_count'
                            value={data.employees_count}
                            onChange={changeEmployees}/>
            </Form.Field>
            {data.company_type == 'ef' &&
            <>
                <BooleanRadio
                    label={props.t('Anställda förutom ägare?')}
                    data={data}
                    name='employees_outside_owners'
                    handleChange={handleChange}
                />

            </>
            }

            {data.employees_count > 0 &&
            <Form.Field>
                <label style={{marginBottom: "20px"}}>{props.t('Ange genomsnittlig bruttolön per anställd')}</label>

                {data.employees.map((employee, index) => {
                    return (
                        <SalarySlider key={`employee-${index}`} index={index} updateEmployee={(employee) => {
                            let employees = data.employees;
                            data.employees[index] = employee;
                            handleChange(null, {name: 'employees', value: employees});
                        }
                        }/>
                    )
                })}
            </Form.Field>
            }
        </>
    );
}