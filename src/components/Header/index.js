import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </Link>
      </div>
    )
  }
}
