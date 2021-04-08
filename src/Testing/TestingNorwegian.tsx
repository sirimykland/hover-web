import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Testing.css';

function TestingNorwegian() {
  return (
    <div className="my-4">
      <h1 className="header">Testing</h1>
      <p className="text">
        Norwegian
        {' | '}
        <Link to="/testing/en" className="app-link">
          English
        </Link>
      </p>
      <p className="text">
        <i>Periode: 12. - 25. april 2021</i>
      </p>
      <h4 className="sub-header">Hva skal jeg gjøre?</h4>
      <ol>
        <li>
          Les informasjonsdokumentet og godta å delta i studien{' '}
          <a
            href="https://nettskjema.no/a/194091"
            className="app-link"
            target="_ blank"
            rel="noopener noreferrer">
            her
          </a>{' '}
          (logg inn med Feide).
        </li>
        <li>
          Se introduksjonsvideoen til Hover på{' '}
          <a
            href="https://youtu.be/vx7aeTkt_aY"
            className="app-link"
            target="_ blank"
            rel="noopener noreferrer">
            YouTube
          </a>{' '}
          for å få en rask presentasjon av hvordan spillet fungerer.
        </li>
        <li>
          Last ned og installer Hover fra{' '}
          <a
            href="https://apps.apple.com/no/app/hover/id1556425356"
            className="app-link"
            target="_ blank"
            rel="noopener noreferrer">
            App Store
          </a>{' '}
          eller{' '}
          <a
            href="https://play.google.com/store/apps/details?id=com.hoverapp.hover"
            className="app-link"
            target="_ blank"
            rel="noopener noreferrer">
            Google Play
          </a>
          .
        </li>
        <li>Bruk applikasjonen under testperioden (12.04-25.04).</li>
        <li>
          Når testperioden er ferdig, svarer du på dette{' '}
          <a
            href="https://nettskjema.no/a/183299"
            className="app-link"
            target="_ blank"
            rel="noopener noreferrer">
            spørreskjema
          </a>{' '}
          (logg inn med Feide). Undersøkelsen er åpen fra <i>25. april 12:00</i>, og det tar ikke
          mer enn 5-10 minutter å fullføre.
        </li>
      </ol>
      <h4 className="sub-header">Verdt å merke seg</h4>
      <ol>
        <li>
          Hvis du allerede har registrert deg for appen før testperioden, må du registrere deg igjen
          fordi vi har slettet alle brukere og innhold i appen.
        </li>
        <li>
          For å få den optimale spillopplevelsen ber vi deg om:
          <ol type="a">
            <li>Å aktivere posisjonstjenester.</li>
            <li>Å aktivere notifikasjons tjenester.</li>
            <li>
              Å alltid kjøre applikasjonen i bakgrunnen (slik at vi kan minne deg på å bruke spillet
              gjennom geofence-baserte pushvarsler).
            </li>
            <li>
              Å skru av batterioptimalisering eller andre optimaliseringsfunksjoner som forstyrrer
              bruken av Hover (Android).
            </li>
            <li>
              Å velge et brukernavn eller navn som lar andre brukere kjenne deg igjen (navn, bio og
              avatarer kan endres i innstillingene).
            </li>
          </ol>
        </li>
        <li>
          Hvis du opplever at noe ikke fungerer, gi oss beskjed slik at vi kan fikse det for deg.
          Eksempler på dette kan være:
          <ol type="a">
            <li>Justere poeng / varighet for en aktivitet</li>
            <li>
              Legg til en aktivitet manuelt (f.eks. du glemte å tracke en times økt på
              treningsstudioet.)
            </li>
            <li>Slette aktiviteter eller utfordringer</li>
          </ol>
        </li>
      </ol>
      <h4 className="sub-header">Verdsettelse</h4>
      <p className="text">
        Vi setter pris på alle som deltar i testingen. Derfor vil vi velge
        <strong> 5 </strong> tilfeldige deltakere som får en overraskelse når testperioden er
        avsluttet. For å kvalifisere deg, må du delta aktivt i testingen, dvs. bruke applikasjonen
        mellom 12.04-25.04 og svare på spørreskjemaet etterpå.
      </p>
      <h4 className="sub-header">Spørsmål?</h4>
      <p className="text">
        Kontakt oss på{' '}
        <a href="mailto: contact.hoverapp@gmail.com" className="app-link">
          contact.hoverapp@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

export default TestingNorwegian;
