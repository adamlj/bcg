import {Form} from 'semantic-ui-react'
import React from "react";


export default function BooleanRadio(props) {
    return (
        <Form.Field>
            <label>{props.label}</label>
            <Form.Radio
                label='Ja'
                name={props.name}
                value='radio-yes'
                checked={props.data[props.name] === true}
                onChange={props.handleChange}
            />
            <Form.Radio
                label='Nej'
                name={props.name}
                value='radio-no'
                checked={props.data[props.name] === false}
                onChange={props.handleChange}
            />
        </Form.Field>
    );

};
