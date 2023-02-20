import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <React.Fragment>
        <nav className='navbar navbar-dark bg-dark navbar-expand-sm text-white'>
          <div className='container'>
            <Link to={'/'} className='navbar-brand ' >
              <i className='fa fa-mobile text-warning'></i>ContactManager
            </Link>
          </div>

        </nav>
    </React.Fragment>
  )
}
