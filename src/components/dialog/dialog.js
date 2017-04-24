import React from 'react'
import { PropTypes } from 'prop-types'

import './dialog.styl'

export const Dialog = (props) => {
  const image = props.image

    return (
      <div className="dialog-box-container">
        <div className="dialog-box">
          <figure>
            <img src={`http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_z.jpg`} alt={image.title} />
            <figcaption>
              <h2>{image.title.length > 50 ? image.title.substring(0, 50) + '...' : image.title}</h2>
              <p><strong>id:</strong> {image.id}</p>
              <p><strong>owner:</strong> {image.owner}</p>
              <p><strong>server:</strong> {image.server}</p>
            </figcaption>
          </figure>
          <button className="btn text btn-close" onClick={props.closeDialog}><span className="closeIcon"></span></button>
        </div>
      </div>
    )
}

Dialog.propTypes = {
  image: PropTypes.object.isRequired,
  closeDialog: PropTypes.func.isRequired
}
