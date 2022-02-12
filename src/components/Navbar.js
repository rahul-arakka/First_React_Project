import React from 'react'
import PropTypes from 'prop-types'

// Props means properties which are passed in the component as attributes 

export default function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Item No. {props.item}
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
}

// Props type can be set like this 
Navbar.propTypes = {
    title: PropTypes.string,
    item: PropTypes.number
}

// Props can be set with defalut values
Navbar.defaultProps = {
    title:'Give Title',
    item: 2
}