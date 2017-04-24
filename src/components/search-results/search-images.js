import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller';

import { SearchItem } from './search-images-item'

import './search-images.styl'

export const SearchImages = (props) => {
  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={props.loadMore}
      hasMore={props.hasMore}
      loader={<div className="loader">Loading ...</div>}>
      <ol className="search-results">
        {props.photos.map(photo =>
          <SearchItem key={photo.id} photo={photo} openDialog={props.openDialog} />
        )}
      </ol>
    </InfiniteScroll>
  )
}

SearchImages.propTypes = {
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  photos: PropTypes.array.isRequired,
  openDialog: PropTypes.func.isRequired
}
