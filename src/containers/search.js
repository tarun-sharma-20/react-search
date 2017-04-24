import React from 'react'
import Flickr from 'node-flickr'

import { SearchImages } from '../components/search-results'
import { SearchBox } from '../components/form'
import { Dialog } from '../components/dialog'
import { setCookie, getCookie, addItem } from '../utils'

import './search.styl'

const keys = {"api_key": "e515dde9db1b1cbb9e74e0e436604eec"}
const flickr = new Flickr(keys);



const test = {
  farm:3,
  id:"33341602563",
  isfamily:0,
  isfriend:0,
  ispublic:1,
  owner:"146320613@N07",
  secret:"94deef7d9e",
  server:"2820",
  title:"Caption: Mom and daughter Credit: Alawam"
}

class Search extends React.Component {

  constructor () {
    super()

    const cookie = getCookie('prevSearches')

    this.state = {
      prevSearches: cookie ? JSON.parse(cookie) : [],
      results: [],
      pageNo: 1,
      hasMoreResults: true,
      dialog: {
        isOpen: false,
        data: {}
      }
    }

    this.currentSearch = ''
    this.loading = false
  }

  getResults = (page=1) => {

    // debugger
    const that = this

    if(!this.currentSearch && !this.loading) {
      return false
    }

    this.loading = true

    flickr.get("photos.search", {"tags": this.currentSearch.split(/[\s,]+/).toString(), "page": page}, function(err, result) {
      that.loading = false

      if (err) {
        that.setState({ hasMoreResults: false })
        return console.error(err)
      };



      that.setState({results: that.state.results.concat(result.photos.photo), pageNo: result.photos.page, hasMoreResults: result.photos.pages > result.photos.page})
    });
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault()

    const currentSearch = this.currentSearch.trim()

    if(currentSearch === '') {
      return
    }

    const searchedItems = addItem(this.state.prevSearches, currentSearch)

    setCookie('prevSearches', JSON.stringify(searchedItems), 2)
    this.setState({ results: [], prevSearches: searchedItems }, this.getResults)
  }

  handleInputChange = (evt) => {
    this.currentSearch = evt.target.value
  }

  openDialog = ( data ) => {
    const dialog = this.state.dialog

    dialog.isOpen = true
    dialog.data = data

    this.setState({dialog: dialog})
  }

  closeDialog = ( ) => {
    const dialog = this.state.dialog

    dialog.isOpen = false
    dialog.data = {}

    this.setState({dialog: dialog})
  }

  render () {
    return (
      <div>
        <header className="search-header">
          <form onSubmit={ this.handleFormSubmit }>
            <SearchBox prevSearches={this.state.prevSearches} onChange={this.handleInputChange} />
          </form>
        </header>
        <main>
          {
            this.state.results.length > 0
            ?
            <SearchImages loadMore={this.getResults} hasMore={this.state.hasMoreResults} photos={this.state.results} openDialog={this.openDialog} />
            :
            <div className="search-placeholder">
              <h1>Hye! How can i help you today?</h1>
            </div>
          }

        </main>
        { this.state.dialog.isOpen && <Dialog image={ this.state.dialog.data} closeDialog={this.closeDialog} />  }
      </div>
    )
  }
}

export default Search


/*
{
  farm:3,
  id:"33341602563",
  isfamily:0,
  isfriend:0,
  ispublic:1,
  owner:"146320613@N07",
  secret:"94deef7d9e",
  server:"2820",
  title:"Caption: Mom and daughter Credit: Alawam"
}
*/
