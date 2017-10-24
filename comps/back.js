import React from 'react'
import Link from 'next/link'

export class Back extends React.Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a className="github gh-ag">Tillbaka</a>
        </Link>
      </div>
    )
  }
}
