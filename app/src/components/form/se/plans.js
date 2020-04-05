import React, {useState} from "react";
import {Accordion, Icon, Header, List, Table} from 'semantic-ui-react'

function SjuklonAB() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const newIndex = activeIndex === index ? -1 : index;
        setActiveIndex(newIndex)
    };
    return (
        <>
            <Header as='h2'>Gäller dig</Header>
            <ul>
                <li>Bedriver Aktiebolag eller Handelsbolag</li>
                <li>Har anställda som fått lön, gäller även ägare själv eller familj</li>
            </ul>
            <Header as='h2'>Vad är det</Header>
            <p>Under tiden 1 april 2020 till 31 maj 2020 så tar Försäkringskassan alla sjuklönekostnader. Detta gäller även ägare och familj, oavsett sjukdom.</p>
            <p>Ägare och familj i mindre företag brukar sällan göra sjukanmälningar då det bara flyttar kostnader från företaget över till privatekonomi. Detta paket gör att 80% lön som vanligtvis betalas av företaget för sjukdag 2-14 kommer i efterhand att ersättas av Försäkringskassan.</p>
            <p>Du bör som företagare under krisperioden använda sjukanmälan fullt ut vid sjukdom då det endast belastar företaget tillfälligt. Sjuklön betalas som vanligt av företaget till sjuk anställd men ersätts i efterhand av Försäkringskassan direkt till företaget.</p>
            <p>Från den 27 mars är krav på läkarintyg ändrat från 8 dagar till 21 dagar och lämnas då till Försäkringsskassan.</p>

            <Accordion styled fluid>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={handleClick}
                >
                    <Icon name='dropdown'/>
                    Läs mer & hur du räknar
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>

                </Accordion.Content>
            </Accordion>


            <Header as='h2'>Detta ska du göra</Header>

            <Header as='h3'>Företaget</Header>
            <p>Detta behöver företaget göra för att få ersättning:</p>
            <ol>
                <li>Anmäl sjuklön som vanligt till Skatteverket</li>
                <li>Ersättning sker genom Skattekontot, tidsuppskattning saknas</li>
            </ol>

            <Header as='h3'>Den anställde</Header>
            <p>Som anställd behöver du inte göra något.</p>

            <Header as='h2'>Ansvarig myndighet och lagrum</Header>
            <p>Ansvarig myndighet: Försäkringskassan</p>

            <Header as='h3'>Lagrum</Header>
            <p><a href="https://www.regeringen.se/496683/contentassets/fc6e1722fd2d493baedfac2e460a906e/vissa-sjukpenningformaner-och-ersattning-till-arbetsgivare-for-kostnader-for-sjuklon.pdf">prop. 2019/20:132</a></p>
            <p><a href="https://www.regeringen.se/remisser/2020/03/remiss-av-vissa-sjukpenningformaner-och-ersattning-till-arbetsgivare-for-kostnader-for-sjuklon/">Remissvar</a></p>
        </>
    )
}


function KarensAvdragAB() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const newIndex = activeIndex === index ? -1 : index;
        setActiveIndex(newIndex)
    };
    return (
        <>
            <Header as='h2'>Gäller dig</Header>
            <ul>
                <li>Bedriver Aktiebolag eller Handelsbolag</li>
                <li>Har anställda som fått lön, gäller även ägare själv eller familj</li>
            </ul>
            <Header as='h2'>Vad är det</Header>
            <p>Under tiden 11 mars 2020 till 31 maj 2020 så är karensavdraget slopad för alla anställda oavsett
                anledning man är sjuk. Företaget betalar ingenting och den anställda söker ersättning om 700 kr från
                Försäkringskassan för varje första sjukdag inom denna period. Detta gäller även ägare och familj.</p>
            <p>Ägare och familj i mindre företag brukar sällan göra sjukanmälningar då det bara flyttar kostnader från
                företaget över till privatekonomi.</p>
            <p>Du bör som företagare under krisperioden använda karensavdraget fullt ut vid sjukdom då det inte belastar
                företaget men ger ersättning privat.</p>

            <Accordion styled fluid>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={handleClick}
                >
                    <Icon name='dropdown'/>
                    Läs mer & hur du räknar
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <p>700kr i ersättning är en schablon som ges oavsett lön och kan sägas motsvara en månadslön innan
                        skatt om ca. 27.000kr med 80% sjuklön.</p>
                    <p>Den tidigare så kallade karensdagen innebär att den första sjukdagen i en sjukperiod inte är
                        betalt. Sedan 2019 1 januari så har det bytt namn till karensavdrag och motsvarar då att du inte
                        får betalt den första 1/5 av din normala veckolön, ett mer rättvist system för de som jobbar
                        olika mycket olika dagar.</p>
                    <p>En ny sjukperiod och nytt karensavdrag uppstår när man varit frisk fem dagar efter sin första
                        jobbdag. Detta är inget annorlunda än normalt men det som i vanliga fall drabbar den anställda
                        extra hårt kan nu istället lindras.</p>
                    <p>Exempel nedan för det minsta möjliga antalet friska dagar innan nytt karensavdrag och möjlighet
                        till 700kr schablonersättning till den anställda kan ges.</p>

                    <Table celled>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>11 mars</Table.Cell>
                                <Table.Cell>Sjuk, karensavdrag</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>12 mars</Table.Cell>
                                <Table.Cell>Jobbar</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>13 mars</Table.Cell>
                                <Table.Cell>Jobbar</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>14 mars</Table.Cell>
                                <Table.Cell>Helg</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>15 mars</Table.Cell>
                                <Table.Cell>Helg</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>16 mars</Table.Cell>
                                <Table.Cell>Jobbar</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>17 mars</Table.Cell>
                                <Table.Cell>Jobbar</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>18 mars</Table.Cell>
                                <Table.Cell>Sjuk, karensavdrag</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <p>Skulle samma mönster fortsätta under hela undantagsperioden så får vi fram det maximala
                        teoretiska stödet om totalt 12 karensavdrag, ca 40% av total månadskostnad för anställd.
                        Företaget får sänkt lönekostnad motsvarande 12 dagars lön och den anställde söker ersättning om
                        8400 kr (12 x 700kr).</p>
                </Accordion.Content>
            </Accordion>


            <Header as='h2'>Detta ska du göra</Header>

            <Header as='h3'>Företaget</Header>
            <p>Företaget gör ingenting utöver det normala, karensavdrag som normalt för första sjukdagen i varje
                sjukperiod.</p>
            <Header as='h3'>Den anställde</Header>
            <p>Har du fått karensavdrag under 11 mars 2020 till 31 maj 2020 så gör du följande för att få 700kr per
                sjukdag:</p>
            <ol>
                <li>Ansökan öppnar 7 april 2020</li>
                <li>Logga in Mina Sidor på <a href="https://www.forsakringskassan.se/">Försäkringskassan</a></li>
                <li>Anmäl vilka dagar du fått karensavdrag</li>
                <li>Ersättning betalas ut inom 3-5 arbetsdagar</li>
            </ol>
            <Header as='h2'>Ansvarig myndighet och lagrum</Header>
            <p>Ansvarig myndighet: Försäkringskassan</p>
            <Header as='h3'>Myndighetsinformation</Header>
            <p>
                <a href="https://www.forsakringskassan.se/privatpers/coronaviruset-det-har-galler">Försäkringskassan</a><br />
                <a href="https://www.regeringen.se/regeringens-politik/socialforsakringar/atgarder-inom-sjukforsakringen-med-anledning-av-corona/">Regeringen</a>
            </p>
            <Header as='h3'>Lagrum</Header>
            <p><a href="https://data.riksdagen.se/fil/A22AC29A-E1C4-48FE-81B5-90019CC37A5F">Finansutskottets betänkande
                2019/20:FiU5</a></p>

        </>
    )
}

/*
isEligible have 4 levels:
1 - Yes
2 - Maybe
3 - No
4 - Hide
data:
company_type: 'ab', 'ef', 'hb',
employees_count: 1,
employees: [],
union_agreement: true/false,
made_profit_2019: true/false,
monthly_rent: 10000,
dividend: true/false,
exposed_business: true/false,
is_renter: true/false,
insolvent: true/false,
employees_outside_owners: null,
*/
const plans = [
    {
        isLoan: false,
        title: 'Korttidsarbete',
        description: 'Beskrivning här',
        isEligible: (data) => {
            if (data.employees_outside_owners && data.employees_count >= 1 && !data.dividend && !data.insolvent == false) {
                return 1;
            } else if (data.employees_outside_owners && data.employees_count >= 1 && data.dividend && !data.insolvent) {
                return 2;
            } else {
                return 3;
            }
        }
    },
    {
        isLoan: false,
        title: 'Karensavdrag',
        description: <KarensAvdragAB/>,
        isEligible: (data) => {
            if (data.company_type == 'ef') {
                return 4;
            } else if (data.employees_count >= 1) {
                return 1;
            } else {
                return 3;
            }
        }
    },
    {
        isLoan: false,
        title: 'Karensavdrag',
        description: 'Beskrivning här',
        isEligible: (data) => {
            if (data.company_type == 'ef' && data.employees_count >= 1) {
                return 1;
            } else if (data.company_type == 'ef' && data.employees_count < 1) {
                return 2;
            } else {
                return 4;
            }
        }
    },
    {
        isLoan: false,
        title: 'Sjuklön',
        description: 'Beskrivning här',
        isEligible: (data) => {
            if (data.company_type == 'ef' && data.employees_count >= 1) {
                return 1;
            } else if (data.company_type == 'ef' && data.employees_count < 1) {
                return 2;
            } else {
                return 4;
            }
        }
    },
    {
        isLoan: false,
        title: 'Sjuklön',
        description: <SjuklonAB />,
        isEligible: (data) => {
            if (data.company_type == 'ef') {
                return 4;
            } else if (data.employees_count >= 1) {
                return 1;
            } else {
                return 3;
            }
        }
    },
    {
        isLoan: false,
        title: 'Sänkt hyra',
        description: 'Beskrivning här',
        isEligible: (data) => {
            if (data.exposed_business && data.is_renter) {
                return 1;
            } else {
                return 2;
            }
        }
    },
    {
        isLoan: false,
        title: 'Sänkt arbetsgivaravgift',
        description: 'Beskrivning här',
        isEligible: (data) => {
            if (data.company_type == 'ef') {
                return 4;
            } else if (data.employees_count >= 1) {
                return 1;
            } else {
                return 3;
            }
        }
    },
    {
        isLoan: false,
        title: 'Sänkt Egenavgift',
        description: 'Beskrivning här',
        isEligible: (data) => {
            if (data.company_type == 'ef') {
                return 1;
            } else {
                return 4;
            }
        }
    },
    {
        isLoan: true,
        title: 'Anstånd arbetsgivaravgift och inkomstskatt',
        description: 'Beskrivning här',
        isEligible: (data) => {
            if (data.employees_count >= 1 && data.employees_outside_owners) {
                return 1;
            } else {
                return 3;
            }
        }
    },
    {
        isLoan: true,
        title: 'Lån från Almi',
        description: 'Beskrivning här',
        isEligible: (data) => {
            return 2;
        }
    },
    {
        isLoan: true,
        title: 'Banklån med statlig borgen',
        description: 'Beskrivning här',
        isEligible: (data) => {
            return 2;
        }
    },
    {
        isLoan: true,
        title: 'Preliminärskatt 2019 och 2020',
        description: 'Beskrivning här',
        isEligible: (data) => {
            return 1;
        }
    },
    {
        isLoan: true,
        title: 'Anstånd moms',
        description: 'Beskrivning här',
        isEligible: (data) => {
            if (data.company_type == 'ef') {
                return 1;
            } else {
                return 4;
            }
        }
    }
];

export default plans;