import React from "react";
import colors from '../colors';
import {Icon} from 'semantic-ui-react'

export default function Steps(props) {
    return (
        <ul className="stepper">
            {
                [...Array(props.steps)].map((e, i) => {
                    return (
                        <li key={i} className={(i + 1) == props.active ? 'active' : ''}>
                            {(i+1)<props.active ? <Icon name="check" style={{marginLeft:"2px"}} /> : i+1}
                        </li>)
                })
            }

            <style jsx>
                {`
ul.stepper {
    margin:0 0 30px 0;
    text-align:center;
    padding:0;
}

ul.stepper li {
  width: 2em;
  height: 2em;
  text-align: center;
  line-height: 2em;
  border-radius: 1em;
  background: ${colors.grey};
  margin: 0 1em;
  display: inline-block;
  color: white;
  position: relative;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size:20px;
}

ul.stepper li::before{
  content: '';
  position: absolute;
  top: .9em;
  left: -4em;
  width: 4em;
  height: .2em;
  background: ${colors.grey};
  z-index: -1;
}

ul.stepper li:first-child::before {
  display: none;
}

ul.stepper .active {
  background: ${colors.teal};
}

ul.stepper .active ~ li {
  background: ${colors.grey};
}

ul.stepper .active ~ li::before {
  background: ${colors.grey};
}

@media only screen and (min-width:767px) {
    ul.stepper {
        margin:0 0 40px 0;
    }
}


`}
            </style>

        </ul>

    );

};
