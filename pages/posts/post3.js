import React from 'react'
import Link from 'next/link'

export default class Post3 extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link href="/blog">
            <a className="back">Tillbaka</a>
          </Link>
          <h1 className="blog-title">3. Nytt ramverk - React</h1>
          <h2 className="blog-authour">Av: Albin Iivari</h2>
          <p className="text">
            Efter att sidan hade börjat blivit väldigt seg, så fick vi idén att använda oss utav
            <Link href="https://reactjs.org/"><a className="ReactLink"> ReactJS</a></Link>,
            det fanns några anledningar till att vi valde just detta.
          </p>
            <ol className="text">
            <br />
              <li> Den första anledningen var att React är modernt & snabbt,
              snabbhet är något vi värdesätter på en sida som denna, speciellt nu när vi behöver hämta data från ett api. </li> <br />
              <li> Den andra anledningen var att vi precis börjat jobba med React på fritiden,
              då det är ett ramverk som används mycket så finns det stor chans till jobb med React. </li> <br />
              <li> Den sista anledning var att med React så kunde vi enkelt skapa dynamiska element,
              vilket är en stor del av våra sida, eftersom det är olika användare varje gång. </li> <br />
            </ol>
          <p className="text">
            Att börja med ett nytt ramverk medförde några problem dock, t.ex att man måste lära sig det!
            Det fanns några problem som vi båda blev helt ställda på,
            vi var tvungna att söka information om många 'basic' saker.
          </p>



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
