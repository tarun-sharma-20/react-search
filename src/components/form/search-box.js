import React from 'react'
import PropTypes from 'prop-types'
import { Datalist } from './datalist'

import './search-box.styl'

export const SearchBox = (props) => (
  <div className="search-box">
    <input type="text" className="input-box" name="search" list="searched-images" onChange={props.onChange} />
    <Datalist id="searched-images" list={props.prevSearches} />
    <button className="search-button" type="submit"><i className="search-icon"></i></button>
  </div>
)

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  prevSearches: PropTypes.array.isRequired
}
