import React from 'react'
import Link from 'next/link'
import { Back } from '../comps/back.js'

export default class Blog extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Back />
          <h1 className="blog-title">Gymnasiearbetet-2017-2018</h1>
          <h2 className="blog-authour">Albin Groen & Albin Iivari</h2>
          <Link href="https://github.com/albingroen">
            <a className="github gh-ag">Github - Albin Groen</a>
          </Link>
          <Link href="https://github.com/fearme99">
            <a className="github gh-ai">Github - Albin Iivari</a>
          </Link>
        <div className="content-wrapper">
          <div className="content">
          </div>
              <Link href="posts/post3">
                <a>
                  <div className="postContainer">
                    <h1 className="title">3. Nytt ramverk</h1>
                    <h4 className="date">2017-11-09</h4>
                    <p className="summary">
                      Med prestandaproblemen så bestämde vi oss vilket annat ramverk som vi ville arbeta med.
                      Vi valde  <Link href="https://reactjs.org/">
                          <a className="ReactLink">ReactJS</a>
                        </Link>
                    </p>
                  </div>
                </a>
              </Link>
            <Link href="posts/post2">
              <a>
                <div className="postContainer">
                  <h1 className="title">2. Från start.</h1>
                  <h4 className="date">2017-10-25</h4>
                  <p className="summary">
                    Vi visste vad vi ville göra från första början. En hemsida
                    där spelare i spelet "League of Legends" skulle skulle kunna
                    söka på sitt, eller någon annans namn och få upp statistik
                    om den spelaren. Vi visste att spelets skapare "Riot" hade
                    en API för att hämta data.
                  </p>
                </div>
              </a>
            </Link>
            <Link href="posts/post1">
              <a>
                <div className="postContainer">
                  <h1 className="title">1. Vårt första inlägg</h1>
                  <h4 className="date">2017-10-23</h4>
                  <p className="summary">
                    Välkommen till vår blogg! Vi får lov att ursäkta att det har
                    dragit ut på tiden, då vi inte lyckades komma igång med
                    något blogg-verktyg speciellt bra och istället bestämde oss
                    för att bygga vårt eget. Det tog inte speciellt lång tid att
                    bygga den här bloggen, och är ingenting som vi har lagt
                    mycket krut på...
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <style jsx global>{`
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
            padding: 25px;
            transition: 0.1s ease-out 0s;
            -webkit-box-shadow: 0px 20px 54px -4px rgba(0, 0, 0, 0.05);
            -moz-box-shadow: 0px 20px 54px -4px rgba(0, 0, 0, 0.05);
            box-shadow: 0px 20px 54px -4px rgba(0, 0, 0, 0.05);
            border-radius: 5px;
            background: white;
            margin-bottom: 50px;
          }

          .postContainer:hover {
            transition: 0.1s ease-out 0s;
            -webkit-box-shadow: 0px 30px 54px -4px rgba(0, 0, 0, 0.1);
            -moz-box-shadow: 0px 30px 54px -4px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 30px 54px -4px rgba(0, 0, 0, 0.1);
          }

          .title,
          .summary,
          .date,
          .blog-authour,
          .github,
          .text {
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
