import React from 'react'
import PropTypes from 'prop-types'

export const SearchItem = (props) => (
  <li>
    <a onClick={() => props.openDialog(props.photo)}>
      <img src={`http://farm${props.photo.farm}.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}_m.jpg`} alt={props.photo.title} />
    </a>
  </li>
)

SearchItem.PropTypes = {
  photo: PropTypes.object.isRequired,
  openDialog: PropTypes.func.isRequired
}


/*
http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    or
http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
    or
http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
*/
