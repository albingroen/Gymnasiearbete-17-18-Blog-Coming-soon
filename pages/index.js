import React from 'react'
import Link from 'next/link'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header-content">
            <h1>League of Legends stats</h1>
            <div className="line" />
            <h2 className="coming-soon">- Coming soon -</h2>
            <p onClick="test()">
              Here, you will find the easiest place to explore the most
              important stats of a summoner. Releasing early 2018. Star on
              github to follow our process.
            </p>
            <div className="line" />

            <div className="buttonWrapper">
              <Link href="/blog">
                <a className="button">Read our blog</a>
              </Link>
            </div>
          </div>
        </div>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
          }

          body {
            font-family: 'Roboto', sans-serif;
            color: #333;
          }

          .header {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .header-content {
            text-align: center;
            width: 60%;
          }

          @media screen and (max-width: 768px) {
            .header-content {
              width: 80%;
            }
          }

          h1 {
            font-weight: 400;
            font-size: 35px;
            letter-spacing: 1px;
            margin-bottom: 50px;
          }

          .line {
            height: 0.5px;
            border-bottom: 0.5px dashed black;
            opacity: 0.5;
            margin: 0 auto;
            margin-top: 20px;
            max-width: 60%;
          }

          .coming-soon {
            font-size: 17.5px;
            text-transform: uppercase;
            letter-spacing: 3px;
            opacity: 0.5;
            margin-top: 40px;
            margin-bottom: 20px;
          }

          h2,
          p {
            font-weight: 400;
          }

          p {
            max-width: 700px;
            margin: 0 auto;
            line-height: 22px;
            letter-spacing: 0.5px;
            font-size: 17px;
            opacity: 0.8;
            margin-bottom: 40px;
          }

          .buttonWrapper {
            margin-top: 70px;
            margin-bottom: 40px;
          }

          .button {
            background: #333;
            color: white;
            text-decoration: none;
            letter-spacing: 2px;
            padding: 20px 30px 20px 30px;
            font-size: 13px;
            border-radius: 3px;
            text-transform: uppercase;
            font-weight: 300;
            transition: 0.1s ease-out 0s;
            -webkit-box-shadow: 0px 20px 54px -4px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0px 20px 54px -4px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 20px 54px -4px rgba(0, 0, 0, 0.2);
          }

          .button:hover {
            background: white;
            color: #333;
            transition: 0.1s ease-out 0s;
          }

          .blog {
            padding-top: 40px;
            text-decoration: none;
            transition: 0.1s ease-out 0s;
          }

          .blog:hover {
            opacity: 0.7;
            transition: 0.1s ease-out 0s;
          }

          /*# sourceMappingURL= styles.css.map */
        `}</style>
      </div>
    )
  }
}
