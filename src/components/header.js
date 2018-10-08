import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{display: 'flex',
    justifyContent: 'space-around',
    'align-items': 'baseline'
      
      // marginBottom: '1.45rem',
    }}
  >
    <div
      style={{ //styles go here
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <Link to='/about'
      style={{
        color: 'white',
        textDecoration: 'none',
      }}>
      about
      </Link>
    </div>
  </div>
)

export default Header
