import React from 'react'
import Link from 'next/link'

export default class Post2 extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link href="/blog">
            <a className="back">Tillbaka</a>
          </Link>
          <h1 className="blog-title">2. Från start</h1>
          <h2 className="blog-authour">Av: Albin Groen</h2>
          <p className="text">
            Vi visste vad vi ville göra från första början. En hemsida där
            spelare i spelet "League of Legends" skulle skulle kunna söka på
            sitt, eller någon annans namn och få upp statistik om den spelaren.
            Vi visste att spelets skapare "Riot" hade en API för att hämta data.
            <br />
            <br />
            Vi visste dock ingenting egentligen om i vilken ände man skulle
            börja, eller vad vi skulle använda oss av. Vi var relativt arroganta
            och tänkte att vi kunde bygga sidan med vanligt HTML, CSS och
            JQuery. Det var egentligen de enda vi kunde vid det här tillfället.
            Det fungerade förstås inte och vi bestämde oss för att göra lite
            research. Snabbt efter att vi hade börjat söka så insåg vi att man
            var tvungen att ha en så kallad "server".
            <br />
            <br />
            "Server" var dock ingenting som vi var igenkända med och vi blev nog
            relativt ställda, och visste inte vart vi skulle börja. Några veckor
            in i projektet fick vi höra om ett ramverk vid namn{' '}
            <Link href="meteor.com">
              <a className="meteorLink">MeteorJS</a>
            </Link>. Det var ett ramverk som gjorde det enkelt att komma igång
            med projekt som dessa. Och gjorde det enkelt att binda samman server
            och klient delen. Vi startdde igång projektet genom att sätta upp
            ett "repository" på Github för att kunna samaarbeta och skicka och
            hämta kod från varandra. Vi lärde oss mycket på vägen då vi byggde
            med MetoerJS och det kändes bra. Efter ett tag började dock sidan
            ladda extremt långsamt på första laddning. Scrollningen var seg och
            sidan blev till slut inte användbar.
            <br />
            <br />
            Detta gällde endast i Chrome, men vi bestämde oss för att byta
            ramverk. Mer om det i nästa inlägg!
          </p>
        </div>
        <style jsx>{`
          .content {
            width: 700px;
            margin: 0 auto;
            text-align: left;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-top: 100px;
          }

          .meteorLink {
            color: cornflowerblue;
          }

          @media screen and (max-width: 800px) {
            .content {
              width: 80%;
            }
          }

          .header {
            width: 700px;
            margin: 0 auto;
            margin-top: 50px;
          }

          @media screen and (max-width: 800px) {
            .header {
              width: 80%;
            }
          }

          .content-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .blog-title {
            font-weight: normal;
            font-family: 'Roboto', sans-serif;
            margin-top: 30px;
          }

          .title {
            font-weight: normal;
            font-size: 23px;
          }

          .summary {
            width: 100%;
            opacity: 0.5;
          }

          .text {
            opacity: 0.75;
            width: 100%;
            line-height: 25px;
            font-size: 17px;
          }

          .postContainer {
            margin-bottom: 50px;
            padding: 25px;
            border: 1px dashed rgba(0, 0, 0, 0.3);
            transition: 0.1s ease-out 0s;
          }

          .postContainer:hover {
            border: 1px dashed rgba(0, 0, 0, 0.6);
            transition: 0.1s ease-out 0s;
          }

          .title,
          .summary,
          .date,
          .blog-authour,
          .github,
          .text,
          .back {
            font-family: 'Roboto', sans-serif;
          }

          .date {
            opacity: 0.7;
          }

          .blog-authour {
            font-weight: normal;
            opacity: 0.5;
          }

          a {
            text-decoration: none;
            color: #333;
          }

          .slideOver {
            height: 100vh;
            width: 100%;
            position: fixed;
            left: 100%;
            animation: 1.5s slideOver ease;
            background: white;
            z-index: 2;
          }

          @keyframes slideOver {
            0% {
              left: 100%;
            }
            50% {
              left: 50%;
              width: 50%;
            }
            100% {
              left: -100%;
              width: 0%;
            }
          }

          .fadeIn {
            opacity: 1;
            transition: 0.5s ease-out;
          }

          .github {
            color: cornflowerblue;
            display: block;
            transition: 0.1s ease-out 0s;
          }

          .github:hover {
            color: #3a6dc5;
            transition: 0.1s ease-out 0s;
          }

          .gh-ag {
            margin-bottom: 10px;
          }

          .back {
            color: cornflowerblue;
            display: block;
            transition: 0.1s ease-out 0s;
            margin-bottom: 10px;
          }

          .back:hover {
            color: #3a6dc5;
            transition: 0.1s ease-out 0s;
          }

          /*# sourceMappingURL= blog.css.map */
        `}</style>
      </div>
    )
  }
}
