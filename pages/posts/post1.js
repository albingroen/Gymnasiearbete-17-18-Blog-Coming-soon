import React from 'react'
import Link from 'next/link'

export default class Post1 extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link href="/blog">
            <a className="back">Tillbaka</a>
          </Link>
          <h1 className="blog-title">1. Vårt första inlägg</h1>
          <h2 className="blog-authour">Av: Albin Groen</h2>
          <p className="text">
            Välkommen till vår blogg! Vi får lov att ursäkta att det har dragit
            ut på tiden, då vi inte lyckades komma igång med något blogg-verktyg
            speciellt bra och istället bestämde oss för att bygga vårt eget. Det
            tog inte speciellt lång tid att bygga den här bloggen, och är
            ingenting som vi har lagt mycket krut på.
            <br />
            <br /> Här kommer vi att uppdatera och dokumentera hur vår process
            går till väga i Gymnasiearbetet 2017-2018. Vi har kommit en bra bit
            redan, och vi har mycker att skriva om än så länge. Vi kommer
            uppdatera vår blogg ungefär 3 gånger i veckan för att hålla er
            uppdaterade tit som tätt.
            <br />
            <br /> Vi hoppas verkligen på att ni kommer vilja följa med på vår
            resa och ser fram emot att använda det här mediet för dokumentation
            och som hjälpmedel för andra där ute!
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
