import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

export default class Course extends Component {
  render() {
    const {details} = this.props
    const {id, name, logoUrl} = details

    return (
      <Link to={`/courses/${id}`}>
        <li>
          <div>
            <img src={logoUrl} alt={name} />
          </div>
          <p>{name}</p>
        </li>
      </Link>
    )
  }
}
