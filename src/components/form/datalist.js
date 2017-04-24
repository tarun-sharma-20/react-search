import React from 'react'
import PropTypes from 'prop-types'

export const Datalist = (props) => {
  if(props.list.length < 1) {
    return null
  }

  return (
    <datalist id={props.id}>
      { props.list.map(item => <option key={item} value={item} />)}
    </datalist>
  )
}

Datalist.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}
