import React, {useState} from "react";
import {Accordion, Icon, Header, List, Table} from 'semantic-ui-react'


function Korttidsarbete() {
    return (
        <>
            <p>Från och med den 16 mars 2020 och tills vidare så kan anställda gå ner i arbetstid med 20%, 40% eller
                60%. Detta utökas (lagförslag) med även möjlighet om 80% under månaderna maj, juni och juli.</p>
            <p>Medan den anställda endast förlorar 4-12% av sin lön så är kostnadsbesparingen för företaget 19-72%. </p>
            <p>Stödet gäller i max sex kalendermånader, med möjlighet till förlängning i ytterligare tre
                kalendermånader.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>

            <p>En hel del krav är kopplat till att kunna använda sig av korttidsarbete, detta kan ses i sin helhet hos
                Tillväxtverket under rubriken <strong>Ansvarig myndighet och officiella källor.</strong> Nedan är i
                korthet de vanligaste och viktigaste punkterna.</p>
            <p>För att vara berättigad så måste verksamheten fått tillfälliga och allvarliga ekonomiska svårigheter som
                varit utanför företagets kontroll, t.ex. Covid-19 utbrottet. Företaget får inte heller vara under
                rekonstruktion eller upprättat kontrollbalansräkning.</p>
            <p>Likaså måste företaget först ha tagit andra åtgärder för att sänka arbetskraftskostnader, främst genom
                att avsluta uppdrag för konsulter eller säga upp tim- och provanställda. Verksamhetskritisk arbetskraft
                är undantagen och kan alltså behållas ändå.</p>
            <p>För arbetsgivare med kollektivavtal så måste man kontrollera sin specifika situation. För arbetsgivare
                utan kollektivavtal så signeras ett avtal med minst 70% av personalen inom den driftenhet som ska
                permitteras – du kan ladda ner ett sådan avtal här. Samtliga anställda permitteras på samma nivå.
                En driftsenhet är en geografisk plats. T.ex. all personal inom en och samma byggnad eller olika
                byggnader på samma inhägnade område.</p>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nivå</Table.HeaderCell>
                        <Table.HeaderCell>Arbetstids­minskning</Table.HeaderCell>
                        <Table.HeaderCell>Löne-minskning</Table.HeaderCell>
                        <Table.HeaderCell>Arbetsgivarens minskade lönekostnad</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                <Table.Body>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>20</Table.Cell>
                        <Table.Cell>4%</Table.Cell>
                        <Table.Cell>19 %</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>40</Table.Cell>
                        <Table.Cell>6%</Table.Cell>
                        <Table.Cell>36 %</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>60</Table.Cell>
                        <Table.Cell>7,5%</Table.Cell>
                        <Table.Cell>53 %</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>4 endast maj-juli</Table.Cell>
                        <Table.Cell>80</Table.Cell>
                        <Table.Cell>12%</Table.Cell>
                        <Table.Cell>72%</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>


            <Header as='h2'>Så gör du - som arbetsgivare</Header>
            <ol>
                <li>Kontrollera med kollektivavtal att korttidsarbete är lämpligt</li>
                <li>Skriv avtal med minst 70% av de anställda.</li>
                <li>Betala ut lön som vanligt till anställda med avdrag på 4-12% (enligt tabellen ovan)</li>
                <li>Gå till https://korttidsarbete.minansokan.se/#/ och följ instruktionerna. Excelfilen är viktig att
                    fylla i korrekt då den måste bifogas i ansökan (inte bara beräkningshjälp som felaktigt anges på
                    sidan)
                </li>
                <li>Besked och utbetalning sker normalt inom 3-5 arbetsdagar</li>
            </ol>
            <Header as='h2'>Så gör du - som anställd</Header>
            <p>Som anställd behöver du inte göra något, avdrag om 4-12% på lönen görs på lönen av arbetsgivaren.</p>

            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>Ansvarig myndighet: Tillväxtverket</p>
            <p>
                <a href="https://tillvaxtverket.se/om-tillvaxtverket/information-och-stod-kring-coronakrisen/korttidsarbete.html">Tillväxtverket</a>
            </p>
            <p>
                <a href="https://www.regeringen.se/artiklar/2020/03/om-forslaget-korttidspermittering/">Regeringen</a>
            </p>
        </>)
}

function KarensAvdragAB() {
    return (
        <>
            <p>Under tiden 11 mars 2020 till 31 maj 2020 så är karensavdraget slopad för alla anställda oavsett
                anledning man är sjuk. Företaget betalar ingenting och den anställda söker ersättning om 700 kr från
                Försäkringskassan för varje första sjukdag inom denna period. Detta gäller även ägare och familj.</p>
            <p>Ägare och familj i mindre företag brukar sällan anmäla sjukdom då karensavdrag som minskar
                företagskostnaden ger lika stort (efter skatter) bortfall i privatekonomin.</p>
            <p>Du bör som småföretagare under krisperioden använda karensavdraget fullt ut vid sjukdom då det inte
                belastar företaget men ger ersättning privat.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>
            <p>700kr i ersättning är en schablon som ges oavsett lön och kan sägas motsvara en månadslön innan skatt om
                ca. 27.000kr med 80% sjuklön</p>
            <p>Den tidigare så kallade karensdagen innebär att den första sjukdagen i en sjukperiod inte är betalt.
                Sedan 2019 1 januari så har det bytt namn till karensavdrag och motsvarar då att du inte får betalt den
                första 1/5 av din normala veckolön, ett mer rättvist system för de som jobbar olika mycket olika
                dagar. </p>
            <p>En ny sjukperiod och nytt karensavdrag uppstår när man varit frisk fem dagar efter sin första jobbdag.
                Detta är inget annorlunda än normalt men det som i vanliga fall drabbar den anställda extra hårt kan nu
                istället lindras</p>
            <p>Exempel nedan för det minsta möjliga antalet friska dagar innan nytt karensavdrag och möjlighet till
                700kr schablonersättning till den anställda kan ges.</p>
            <Header as='h2'>Så gör du - som arbetsgivare</Header>
            <p>Inget, karensavdrag (tidigare kallat karensdag) dras av som normalt.</p>
            <Header as='h2'>Så gör du - som anställd</Header>
            <p>Anmälan görs till Försäkringskassan retroaktivt. Varje karensdag måste anmälas separat enligt nedan.</p>
            <ul>
                <li>Gå till <a href="https://www.forsakringskassan.se/">Försäkringskassan</a></li>
                <li>Logga in som privatperson</li>
                <li>Välj "Ansök om ersättning för karens"</li>
                <li>Fyll i att du är anställd, vilken dag det gäller, uppgifter till din arbetsgivare och bankkonto för
                    utbetalning
                </li>
                <li>Beslut och utbetalning görs normal inom 3-5 arbetsdagar</li>
            </ul>

            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>Ansvarig myndighet: Försäkringskassan</p>
            <p><a
                href="https://www.forsakringskassan.se/privatpers/coronaviruset-det-har-galler">Försäkringskassan</a>
            </p>
            <p><a
                href="https://www.regeringen.se/regeringens-politik/socialforsakringar/atgarder-inom-sjukforsakringen-med-anledning-av-corona/">Regeringen</a>
            </p>
        </>
    )
}

function KarensAvdragEF() {
    return (
        <>
            <p>Under tiden 11 mars 2020 till 31 maj 2020 så är karensavdraget slopad för enskild firma oavsett anledning
                man är sjuk. Schablonersättning görs om 804kr före skatt de första 14 dagarna. Detta gäller utan hänsyn
                till vad din ”normala” lön skulle vara och hur många karensdagar din firma har valt.</p>
            <p>De som driver enskild firma brukar sällan anmäla sjukdom då det ofta är många karensdagar (normalt 7
                dagar men kan vara upp till 90 dagar).</p>
            <p>Du bör som småföretagare under krisperioden använda karensavdraget fullt ut vid sjukdom då det inte
                belastar firma men ger ersättning privat från första dagen.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>
            <p>Anmälan görs till Försäkringskassan retroaktivt.</p>
            <ul>
                <li>Gå till <a href="https://www.forsakringskassan.se/">Försäkringskassan</a></li>
                <li>Logga in som privatperson</li>
                <li>Välj "Ansök om ersättning för karens"</li>
                <li>Fyll i att du är anställd, vilken dag det gäller, uppgifter till din arbetsgivare och bankkonto för
                    utbetalning
                </li>
                <li>Beslut och utbetalning görs normal inom 3-5 arbetsdagar</li>
            </ul>

            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>Ansvarig myndighet: Försäkringskassan</p>
            <p><a
                href="https://www.forsakringskassan.se/privatpers/coronaviruset-det-har-galler">Försäkringskassan</a>
            </p>
            <p><a
                href="https://www.regeringen.se/regeringens-politik/socialforsakringar/atgarder-inom-sjukforsakringen-med-anledning-av-corona/">Regeringen</a>
            </p>
        </>


    )
}


function SjuklonAB() {
    return (
        <>
            <p>Under tiden 1 april 2020 till 31 maj 2020 så tar staten hela kostnaden för sjuklön. Företaget betalar
                sjuklön som normalt dag 2-14 och får efter arbetsgivardeklaration är inskickad en kreditering av
                Försäkringskassan.</p>
            <p>Detta gäller även anställda som är ägare och familj till ägare. Denna grupp anställa anmäler sällan eller
                aldrig sjukdom normalt då kostnadsbesparing i företaget kommer med lika stort inkomstbortfall privat
                (efter skatter).</p>
            <p>Du bör som ägare eller familj till ägare under krisperioden alltid anmäla frånvaro vid sjukdom oavsett
                tidigare praxis. Detta ger en minskad privatinkomst om 20% under sjukdomsperioden medan företagets
                kostnad för den anställde minskar med 100% för samma period.</p>
            <p>Krav på läkarintyg från dag 8 är borttaget och lämnas nu istället dag 21 till Försäkringskassan.</p>
            <Header as='h2'>Så gör du - som arbetsgivare</Header>
            <ul>
                <li>Betala ut sjuklön som normalt.</li>
                <li>Skicka in arbetsgivardeklaration som normalt.</li>
                <li>Ersättning betalas ut automatiskt månaden efter.</li>
            </ul>
            <Header as='h2'>Så gör du - som anställd</Header>
            <ul>
                <li>Som anställd behöver du inte göra något för sjukdag 2-14. Sjuklön betalas ut som vanligt av
                    arbetsgivaren.
                </li>
                <li>Ifall du är sjuk mer än 14 dagar så begärs ersättning hos Försäkringskassan.</li>
                <li>Läkarintyg behöver först lämnas ifall du är sjuk mer än 21 dagar, istället för normala 8 dagar.</li>
            </ul>

            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p><a
                href="https://www.forsakringskassan.se/privatpers/coronaviruset-det-har-galler">Försäkringskassan</a>
            </p>
            <p><a
                href="https://www.regeringen.se/regeringens-politik/socialforsakringar/atgarder-inom-sjukforsakringen-med-anledning-av-corona/">Regeringen</a>
            </p>
        </>
    )
}

function SanktHyra() {
    return (
        <>
            <p>Under tiden 1 april 2020 till och med den 30 juni 2020 så kan stöd sökas av hyresvärdar för att delvis
                kompensera tillfälligt sänkta hyror.</p>
            <p>Ifall en hyresgäst och hyresvärd kan komma överens om tillfälligt sänkt hyra så kan hyresvärden sedan
                söka stöd för upp till halva hyressänkningen, dock aldrig mer än 25% av ursprungliga hyran.</p>
            <p>Gäller endast företag i det som anses vara utsatta branscher så som sällanköpshandel, hotell, restaurang
                och vissa andra verksamheter. Här omfattas exempelvis butikshandel, logiverksamhet, restauranger samt
                arrangemang av kongresser/mässor men även konsumenttjänster så som tandläkare, fysioterapeutisk
                verksamhet, hår- och kroppsvård.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>
            <p>De branscher som omfattas av stödet finns upptagna i förordningen i form av koder för svensk
                näringsgrensindelning (SNI). SNI-koden är den kod som anges till Skatteverket när man registrerar sitt
                företag. Du kan kontrollera ditt företags SNI-kod genom att logga in på verksamt.se och kontrollera mot
                den <a
                    href="https://www.boverket.se/contentassets/2907200575a8449780d8b2df5209395e/sni-koder-for-stod-nar-vissa-lokalhyresgaster-fatt-rabatt-pa-hyran.pdf">officiella
                    listan här</a></p>

            <Header as='h2'>Så gör du - som hyresgäst</Header>
            <ul>
                <li>Kontrollera att hyresgästens företag SNI-kod är upptagen <a
                    href="https://www.boverket.se/contentassets/2907200575a8449780d8b2df5209395e/sni-koder-for-stod-nar-vissa-lokalhyresgaster-fatt-rabatt-pa-hyran.pdf">här</a>.
                </li>
                <li>Kontrollera på länsstyrelsen att övriga detaljer stämmer in på er situation.</li>
                <li>Diskutera fram en rabatt med hyresvärd, påminn om att endast halva hyressänkningen kommer att drabba
                    hyresvärden. En något lägre hyra är bättre än ingen hyra och tom lokal.
                </li>
                <li>Gör en skriftlig överenskommelse om rabatt på lokalhyra mellan hyresvärd och hyresgäst senast 30
                    juni 2020. Rabatten ska gälla under perioden 1 april till och med den 30 juni.
                </li>
            </ul>

            <Header as='h2'>Så gör du - som hyresvärd</Header>
            <ul>
                <li>Kontrollera att hyresgästens företag SNI-kod är upptagen <a
                    href="https://www.boverket.se/contentassets/2907200575a8449780d8b2df5209395e/sni-koder-for-stod-nar-vissa-lokalhyresgaster-fatt-rabatt-pa-hyran.pdf">här</a>.
                </li>
                <li>Kontrollera på länsstyrelsen att övriga detaljer stämmer in på er situation.</li>
                <li>Diskutera fram en rabatt med hyresgäst, kom ihåg att endast halva hyressänkningen kommer att drabba
                    ditt företag. En något lägre hyra är bättre än ingen hyra och tom lokal.
                </li>
                <li>Gör en skriftlig överenskommelse om rabatt på lokalhyra mellan hyresvärd och hyresgäst senast 30
                    juni 2020. Rabatten ska gälla under perioden 1 april till och med den 30 juni.
                </li>
                <li>Ansökan om stöd kan göras hos din länsstyrelse från och med 1 juli 2020 till och med 31 augusti
                    2020. Boverket kommer ansvara för e-tjänsten.
                </li>
            </ul>


            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p><a
                href="https://www.regeringen.se/artiklar/2020/04/regeringen-har-beslutat-om-tillfallig-rabatt-for-fasta-hyreskostnader-i-utsatta-branscher/">Regeringen</a>
            </p>

            <p><a
                href="https://www.lansstyrelsen.se/vastra-gotaland/samhalle/planering-och-byggande/stod-for-sankta-hyror-i-utsatta-branscher.html">Länsstyrelsen</a>
            </p>
            <p><a
                href="https://www.boverket.se/sv/bidrag--garantier/stod-nar-vissa-lokalhyresgaster-fatt-rabatt-pa-hyran/?tab=fragor-svar">Boverket</a>
            </p>
        </>
    )
}


function SanktArbetsgivaravgift() {
    return (
        <>
            <p>Arbetsgivaravgifterna sänks mellan 1 mars och 30 juni 2020. Företagen betalar endast ålderspensionsavgift
                på löner som ges ut under denna period.</p>
            <p>Nedsättningen gäller för upp till 30 anställda per företag och upp till en lönesumma om 25.000 kronor per
                anställd och månad. Det innebär att arbetsgivaren får en lättnad med upp till 5.302,50 kr per anställd
                och månad.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>
            <p>Arbetsgivaravgiften sänks tillfälligt från 31,42% till 10,21% vilket motsvarar endast
                Ålderspensionsavgift. Övrigt avgifter så som Sjukförsäkringsavgift, Föräldraförsäkringsavgift,
                Efterlevnadspensionsavgift, Arbetsmarknadsavgift, Arbetsskadeavgift och Allmän löneavgift om totalt
                21,21% faller bort.</p>
            <p>Maximal besparing skulle vara för ett företag med minst 30 anställda med lön om minst 25.000 kronor per
                anställd. För de fyra månaderna skulle det sänka kostnaderna med totatl 636.300kr.</p>
            <p>Denna sänkta arbetsgivaravgift gäller för alla företag med anställda. Även om företaget inte drabbats av
                Covid-10 eller ifall företaget får andra stöd så som korttidsarbete.</p>

            <Header as='h2'>Så gör du - som anställd</Header>
            <p>Du kommer inte märka något som anställd.</p>

            <Header as='h2'>Så gör du - som arbetsgivare</Header>
            <ul>
                <li>Vid inlämning av arbetsgivardeklaration (AGI) ska ruta 063 kryssas i för de anställda ni önskar
                    nersatt arbetsgivaravgift.
                </li>
                <li>Om ni har mer än 30 anställda så kryssa i ruta 063 på de anställda som har minst 25.000kr i
                    månadslön.
                </li>
            </ul>


            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>
                <a href="https://www.regeringen.se/artiklar/2020/03/om-forslaget-tillfalligt-sankta-socialavgifter-med-anledning-av-coronaviruset/">Regeringen</a>
            </p>

            <p>
                <a href="https://skatteverket.se/omoss/press/nyheter/2020/nyheter/tillfalligtsanktaarbetsgivaravgifterochegenavgifter.5.1c68351d170ce5545271209.html">Skatteverket</a>
            </p>
        </>

    )
}

function SanktEgenavgift() {
    return (
        <>
            <p>Under 2020 sänks egenavgifterna på överskott upp till 100.000kr för dem som idag betalar fulla
                egenavgifter.</p>
            <p>Du har rätt till sänkta egenavgifter om du beräknar ett överskott i en aktiv näringsverksamhet och är
                född 1955 eller senare. Istället för att betala full egenavgift (28,97 procent) betalar du bara
                ålderspensionsavgift (10,21 procent) på överskott upp till 100 000 kronor. Har du ett högre överskott
                betalar du alla avgifter på den del som överstiger 100 000 kronor.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>
            <p>Sänkningen görs automatiskt vid beräkning av din slutliga skatt. Du behöver inte göra något.</p>


            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>Ansvarig myndighet är Skatteverket</p>
            <p>
                <a href="https://skatteverket.se/foretagochorganisationer/drivaforetag/enskildnaringsverksamhet/egenavgifter.4.361dc8c15312eff6fd1f678.html">Skatteverket</a>
            </p>

            <p>
                <a href="https://www.regeringen.se/artiklar/2020/03/om-forslaget-tillfalligt-sankta-socialavgifter-med-anledning-av-coronaviruset/">Regeringen</a>
            </p>

        </>

    )
}

function AnstandArbetsgivaravgiftInkomstskatt() {
    return (
        <>
            <p>De nya reglerna innebär att företag kan få anstånd med betalning av arbetsgivaravgifter, preliminärskatt
                på lön och moms. Företaget betalar en relativt låg ränta motsvarande 1,6-3,1% (läs mer nedan).</p>
            <p>Företagens möjlighet till anstånd omfattar tre månaders skatteinbetalningar och lämnas under längst 12
                månader. När det gäller anstånd för moms som redovisas helårsvis så kan anstånd lämnas för högst ett
                beskattningsår och som längst under 12 månader.</p>
            <p>Anstånd kommer inte beviljas företag som missköter sin ekonomi eller på annat sätt är oseriösa. Anstånd
                får inte heller beviljas företag som har större skatteskulder.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>
            <p>För moms som redovisas helårsvis kan anståndet beviljas retroaktivt från och med den 27 december 2019.
                Det innebär att företag som har betalat in momsen från och med den 27 december 2019 kan få skatten
                återbetald av Skatteverket.</p>
            <p>För företag som redovisar moms månadsvis eller kvartalsvis kan anstånd beviljas retroaktivt för perioder
                från och med januari 2020.</p>
            <p>Företag som redovisar arbetsgivaravgifter och preliminärskatt på lön kommer kunna begära anstånd och
                återbetalning från och med januari 2020.</p>
            <p>Under de första sex månaderna av anståndet kommer endast en ränta på 1,25 procent tas ut. Därefter
                tillkommer en anståndsavgift på 0,2 procent per månad. Det motsvarar en avdragsgill ränta på 3,1 procent
                per år, eller 1,6 procent under det första halvåret uttryckt som årsränta.
                Högre äldre räntor anges felaktigt hos en hel del källor men ovan är gällande ränta enligt Regeringen
                den 17 april 2020. </p>

            <Header as='h2'>Så gör du</Header>
            <ul>
                <li>Ansök hos <a
                    href="https://skatteverket.se/foretagochorganisationer/sjalvservice/allaetjanster/tjanster/ansokomtillfalligtanstandmedskattebetalning.4.1c68351d170ce5545271593.html">Skatteverket</a>
                </li>
                <li>Glöm ej att företaget kommer att detta är ett lån med ränta som inte är avdragsgill. Första 6
                    månaderna har lägst ränta med årsränta på 1,25%
                </li>
            </ul>

            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>Ansvarig myndighet är Skatteverket</p>
            <p>
                <a href="https://www4.skatteverket.se/rattsligvagledning/edition/2020.4/382989.html#update_20200407075948">Skatteverket</a>
            </p>
        </>

    )
}


function AlmiLan() {
    return (
        <>
            <p>Almi har både vanliga företagslån med extra tillskott från regeringen och ett så kallat brygglån.
                Brygglånet är extra relevant om företaget drabbats av Covid-19 utbrottet. </p>
            <p>Lånesumma och ränta sätts individuellt men max 4,95% och en halv miljon för startups. Då villkor och
                möjligheter skiljer sig beroende på företagets förutsättningar är det lättast att prata direkt med Almi
                om lånemöjligheter så fort som möjligt.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>

            <ul>
                <li>Individuell räntesättning med rörlig ränta, som för närvarande är högst 4,95%.</li>
                <li>Möjlighet finns att ansöka om ränte- och amorteringsuppskov upp till 12 månader.</li>
                <li>Löptiden är 12 månader. Efter 12 månader finns, efter dialog med rådgivare, möjlighet att lägga om
                    lånet till nytt lån med då gällande ordinarie villkor.
                </li>
                <li>Startups har möjlighet att låna upp till 500 000 kr.</li>
                <li>Ingen uppläggningsavgift.</li>
                <li>Almi strävar alltid efter medfinansiering. Det kan vara medfinansiering från bank eller i form av
                    ägarkapital. Medfinansiering är ett krav på belopp över 3 miljoner kr.
                </li>
                <li>En rådgivare från Almi kommer att göra en individuell kreditprövning. Den innefattar bland annat en
                    genomgång av nuvarande säkerheter för dig som redan har lån hos Almi, och vilka säkerheter som är
                    aktuella för dig som blir ny lånekund hos Almi. I normala fall handlar det om att ta ut
                    företagsinteckningar och ägarborgen som normalt ligger på 10-20%.
                </li>
            </ul>

            <Header as='h2'>Så gör du</Header>
            <p>Kontakta Almi</p>
            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>Ansvarig myndighet är Almi</p>
            <p>
                <a href="https://www.almi.se/information-med-anledning-av-coronaviruset/">Almi</a>
            </p>
        </>
    )
}

function BanklanBorgen() {
    return (
        <>
            <p>Staten har inrättat något som kallas Företagsakuten. I praktiken så innebär det att Staten garanterar upp
                till 70 procent av lånebeloppet på vissa företagslån. Riksgälden ställer ut garantin till kreditinstitut
                så som banker som i sin tur lånar ut till företagen. Företag kan ansöka om lån inom garantiprogrammet
                genom att vända sig till sin långivare/bank.</p>
            <p>Då majoriteten av risken i lån försvinner med denna garanti så är det avsevärt större sannolikhet att få
                lån som företag och med bättre ränta än normalt.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>

            <p>Med stor sannolikhet är din bank ansluten till garantiprogramet redan, du hittar en <a
                href="https://www.riksgalden.se/sv/var-verksamhet/garantier-och-lan/foretagsakuten-garantiprogram-for-foretag/anslutna-banker-och-institut-inom-foretagsakuten/">komplett
                aktuell lista hos Riksgälden.</a></p>

            <Header as='h2'>Så gör du</Header>
            <p>Kontakta först och främst företagets bank som har en tidigare relation med företaget. </p>
            <p>Prova även diskutera med andra långivare. Tryck på att risken och därmed räntan bör reflekteras i och med
                företagsakuten.</p>
            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>Ansvarig myndighet: Riksgälden</p>
            <p>Företagets motpart: Din bank</p>
            <p>
                <a href="https://www.riksgalden.se/sv/var-verksamhet/garantier-och-lan/foretagsakuten-garantiprogram-for-foretag/">Riksgälden</a>
            </p>
        </>
    )
}

function PrelSkatt() {
    return (
        <>
            <p>Du kan ändra företagets preliminära skatt för år 2020 om du beräknar att få ett sämre resultat eller till
                och med gå med förlust. Det innebär att du får betala in mindre eller ingen skatt under de kommande
                månaderna samt att du kan få tillbaka den skatt du betalat in för januari och februari.</p>
            <p>Du kan lämna in en ny preliminär inkomstdeklaration hur många gånger som helst under året. På så sätt
                slipper du betala in för mycket i preliminärskatt.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>

            <p>Preliminärskatten är 21,4% av din förväntade vinst.</p>
            <p>Som exempel ett företag som tidigare har räknat med en miljon går in i maj månad för att sänka sin
                uppskattning till noll för 2020. Företaget slipper då att ligga ute med 214.000kr under år 2020.
                71.333kr är dessutom redan betalt under månaderna januari till mars och kommer att betalas tillbaks till
                Skattekontot.</p>

            <Header as='h2'>Så gör du</Header>
            <p>Gå till <a
                href="https://www.skatteverket.se/foretagochorganisationer/sjalvservice/allaetjanster/tjanster/preliminarinkomstdeklaration.4.71004e4c133e23bf6db8000109612.html">Skatteverkets
                E-tjänst för Preliminär Inkomstdeklaration</a></p>
            <p>Ange företagets nya mindre uppskattade vinst.</p>
            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>Ansvarig myndighet är Skatteverket</p>
            <p>
                <a href="https://skatteverket.se/foretagochorganisationer/skatter/betalaochfatillbaka/debiteradpreliminarskatt.4.233f91f71260075abe8800010616.html">Skatteverket</a>
            </p>
        </>
    )
}

function AnstandMoms() {
    return (
        <>
            <p>De nya reglerna innebär att företag kan få anstånd med betalning av arbetsgivaravgifter, preliminärskatt
                på lön och moms. Företaget betalar en relativt låg ränta motsvarande 1,6-3,1% (läs mer nedan).</p>
            <p>Företagens möjlighet till anstånd omfattar tre månaders skatteinbetalningar och lämnas under längst 12
                månader. När det gäller anstånd för moms som redovisas helårsvis så kan anstånd lämnas för högst ett
                beskattningsår och som längst under 12 månader.</p>
            <p>Anstånd kommer inte beviljas företag som missköter sin ekonomi eller på annat sätt är oseriösa. Anstånd
                får inte heller beviljas företag som har större skatteskulder.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>

            <p>För moms som redovisas helårsvis kan anståndet beviljas retroaktivt från och med den 27 december 2019.
                Det innebär att företag som har betalat in momsen från och med den 27 december 2019 kan få skatten
                återbetald av Skatteverket.</p>
            <p>För företag som redovisar moms månadsvis eller kvartalsvis kan anstånd beviljas retroaktivt för perioder
                från och med januari 2020.</p>
            <p>Företag som redovisar arbetsgivaravgifter och preliminärskatt på lön kommer kunna begära anstånd och
                återbetalning från och med januari 2020.</p>
            <p>Under de första sex månaderna av anståndet kommer endast en ränta på 1,25 procent tas ut. Därefter
                tillkommer en anståndsavgift på 0,2 procent per månad. Det motsvarar en avdragsgill ränta på 3,1 procent
                per år, eller 1,6 procent under det första halvåret uttryckt som årsränta.
                Högre äldre räntor anges felaktigt hos en hel del källor men ovan är gällande ränta enligt Regeringen
                den 17 april 2020. </p>
            <Header as='h2'>Så gör du</Header>
            <p>Ansök på <a
                href="https://skatteverket.se/foretagochorganisationer/sjalvservice/allaetjanster/tjanster/ansokomtillfalligtanstandmedskattebetalning.4.1c68351d170ce5545271593.html">Skatteverkets
                Skatteverkets E-tjänst</a></p>
            <p>Glöm ej att företaget kommer att detta är ett lån med ränta som inte är avdragsgill. Första 6 månaderna
                har lägst ränta med årsränta på 1,25%</p>
            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>Ansvarig myndighet är Skatteverket</p>
            <p>
                <a href="https://www4.skatteverket.se/rattsligvagledning/edition/2020.4/382989.html#update_20200407075948">Skatteverket</a>
            </p>
        </>

    )
}

function StartaEgetBidrag() {
    return (
        <>
            <p>Har ditt företag fått starta-eget-bidrag av Arbetsförmedlingen så finns det möjlighet att förlänga detta
                ytterligare 6 månader. Egentligen ska bidraget fortfarande vara aktivt men det finns möjligheter även
                ifall det nyligen har löpt ut.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>

            <p>Bra information från officiella källor saknas när detta uppdateras den 29 april 2020. Men är bekräftat
                den 5 april 2020 av ansvariga för starta-eget-bidraget hos Arbetsförmedlingen att detta är aktivt och
                mer information ska publiceras.</p>

            <Header as='h2'>Så gör du</Header>
            <p>Kontakta omedelbart din handläggare hos Arbetsförmedlingen och fråga om förlängning av bidraget.</p>
            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>
                <a href="https://arbetsformedlingen.se/for-arbetssokande/stod-och-ersattning/stod-a-o/starta-eget-stod-till-start-av-naringsverksamhet">Arbetsförmedlingen</a>
            </p>
        </>)
}

function AvsattningPeriodiseringsfond() {
    return (
        <>
            <p>Periodiseringsfond innebär att du kan skjuta upp en del av beskattningen av inkomsten i
                näringsverksamheten till ett senare år. För dig som driver enskild näringsverksamhet eller är delägare i
                handelsbolag har regeringen bestämt att ändra reglerna för periodiseringsfonder.</p>
            <p>Reglerna innebär att du i din deklaration för 2020 kan sätta av 100 procent av din skattepliktiga vinst
                för år 2019 i en periodiseringsfond, dock högst 1 miljon kronor. Avsättningen till periodiseringsfonden
                kommer du sedan att kunna kvitta mot dina framtida förluster. För många företagare innebär det att den
                skattepliktiga vinsten därmed sätts ned till noll kronor. Detta är ett alternativ till de vanliga
                reglerna som finns kvar.</p>
            <Header as='h2'>Läs mer & hur du räknar</Header>
            <p>Skatten för inkomstår 2019 är i regel redan inbetald till skattekontot i form av preliminär skatt. Det
                snabbaste sättet att få tillbaka preliminärskatten är att begära omprövning av sin preliminära
                inkomstdeklaration för 2019. Detta är möjligt fram till halvårsskiftet. Om näringsidkaren bara gör
                avdraget i den ordinarie inkomstdeklarationen sker utbetalningen som skatteåterbäring efter att
                slutskattebeskedet har kommit. En näringsidkare som redan har lämnat sin inkomstdeklaration och nu vill
                använda möjligheten till utökad avsättning till periodiseringsfond behöver lämna in en ny
                deklaration.</p>
            <p>Enligt de nuvarande reglerna har enskilda näringsidkare och fysiska personer som är delägare i svenska
                handelsbolag möjlighet att sätta av 30 procent av årets vinst till periodiseringsfond.</p>
            <p>De nya reglerna träder i kraft den 6 april 2020 och tillämpas retroaktivt avseende år 2019.</p>
            <p>En frisör har en enskild firma med en omsättning på 710 000 kronor och en vinst på 500 000 kronor för
                2019 före avsättning till periodiseringsfond.</p>
            <p>Normalt sett sätter frisören i vårt exempel av 30 procent av vinsten i periodiseringsfond, det vill säga
                150 000 kronor för 2019. Resten, dvs. 350 000 kronor är överskott före schablonavdrag för egenavgifter.
                Den preliminära skatten för 2019 uppgår då till cirka 116 000 kronor (om schablonavdrag för egenavgifter
                gjorts med 25 procent, kommunalskattesatsen är 31,5 procent och begravningsavgiften uppgår till 0,253
                procent) och det har frisören redan löpande betalat in på sitt skattekonto.</p>
            <p>Genom förslaget kan frisören redan nu begära omprövning av sin preliminära inkomstdeklaration och sätta
                av hela överskottet om 500 000 kronor till periodiseringsfond. På så sätt blir frisörens vinst för 2019
                noll kronor. Därmed kan frisören få tillbaka de 116 000 kronor som betalades in på skattekontot för
                detta år. Den vanliga inkomstdeklarationen lämnar frisören i normalfallet in senast den 4 maj 2020.</p>
            <Header as='h2'>Så gör du</Header>
            <p>Det snabbaste sättet att få tillbaka preliminärskatten är att begära omprövning av den preliminära
                inkomstdeklarationen för 2019. <a
                    href="https://www.skatteverket.se/foretagochorganisationer/sjalvservice/allaetjanster/tjanster/preliminarinkomstdeklaration.4.71004e4c133e23bf6db8000109612.html">Använd
                    Skatteverkets e-tjänst</a></p>
            <Header as='h2'>Ansvarig myndighet och officiella källor</Header>
            <p>Ansvarig myndighet: Skatteverket</p>
            <p>
                <a href="https://www.skatteverket.se/foretagochorganisationer/sjalvservice/allaetjanster/tjanster/preliminarinkomstdeklaration.4.71004e4c133e23bf6db8000109612.html">Skatteverket</a>
            </p>
        </>)
}

function SjuklonEF() {
    return (
        <><p>Regeringen har beslutat att arbetsgivare får ersättning av staten för sjuklönekostnaden för april och maj.
            Arbetsgivaren rapporterar in sina sjuklönekostnader i samband med arbetsgivardeklarationen. Ersättningen
            sker i form av kreditering på skattekontot. </p>
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
company_received_seb: true/false,
company_age_months: true/false,
company_is_old: true/false,
*/
const plans = [
    {
        isLoan: false,
        title: 'Korttidsarbete',
        description: <Korttidsarbete/>,
        isEligible: (data) => {
            if (data.company_type == 'ab' && data.employees_count >= 1 && !data.dividend && !data.insolvent) {
                return 1;
            } else if (data.company_type == 'ab' && data.employees_count >= 1 && data.dividend && !data.insolvent) {
                return 2;
            } else if (data.company_type == 'ef' && data.employees_outside_owners && data.employees_count >= 1 && !data.insolvent) {
                return 1;
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
        description: <KarensAvdragEF/>,
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
        description: <SjuklonEF/>,
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
        description: <SjuklonAB/>,
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
        description: <SanktHyra/>,
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
        description: <SanktArbetsgivaravgift/>,
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
        description: <SanktEgenavgift/>,
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
        description: <AnstandArbetsgivaravgiftInkomstskatt/>,
        isEligible: (data) => {
            if (data.company_type == 'ab' && data.employees_count >= 1 && !data.dividend && !data.insolvent) {
                return 1;
            } else if (data.company_type == 'ab' && data.employees_count >= 1 && data.dividend && !data.insolvent) {
                return 2;
            } else if (data.company_type == 'ef' && data.employees_outside_owners && data.employees_count >= 1 && !data.insolvent) {
                return 1;
            } else {
                return 3;
            }
        }
    },
    {
        isLoan: true,
        title: 'Lån från Almi',
        description: <AlmiLan/>,
        isEligible: (data) => {
            if (!data.insolvent) {
                return 2;
            } else {
                return 3;
            }
        }
    },
    {
        isLoan: true,
        title: 'Banklån med statlig borgen',
        description: <BanklanBorgen/>,
        isEligible: (data) => {
            if (!data.insolvent) {
                return 2;
            } else {
                return 3;
            }
        }
    },
    {
        isLoan: true,
        title: 'Preliminärskatt 2019 och 2020',
        description: <PrelSkatt/>,
        isEligible: (data) => {
            if (!data.insolvent) {
                return 1;
            } else {
                return 3;
            }
        }
    },
    {
        isLoan: true,
        title: 'Anstånd moms',
        description: <AnstandMoms/>,
        isEligible: (data) => {
            if (!data.insolvent && data.company_type == 'ef') {
                return 2;
            } else if (!data.insolvent) {
                return 1;
            } else {
                return 3;
            }
        }
    },
    {
        isLoan: false,
        title: 'Förlängt starta eget bidrag',
        description: <StartaEgetBidrag/>,
        isEligible: (data) => {
            if (data.company_received_seb) {
                return 1;
            } else {
                return 3;
            }
        }
    },
    {
        isLoan: false,
        title: 'Avsättning till periodiseringsfond i deklarationen 2020',
        description: <AvsattningPeriodiseringsfond/>,
        isEligible: (data) => {
            if (data.company_type == 'ef') {
                return 1;
            } else {
                return 3;
            }
        }
    }
];

export default plans;