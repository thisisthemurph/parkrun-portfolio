import React, { Component } from 'react'
import Search from '../Components/Search'
import Portfolio from '../Components/Portfolio'

import './App.scss';

class App extends Component {
  state = {
    user: {},
    loading: false,
    searchText: '',
    error: false,
    errorMessage: null
  }

  onSearchChange = event => {
    this.setState({
      searchText: event.target.value
    })
  }

  onSearchButtonClick = async (event) => {

    this.setState({ error: false, errorMessage: null })
    console.log(this.state.searchText)

    if (!this.state.searchText) {
      this.setState({
        error: true,
        errorMessage: 'You must enter your athlete number to continue'
      })
    }

    if (isNaN(this.state.searchText)) {
      this.setState({ 
        error: true,
        errorMessage: 'The athlete number must only contain numbers, it cannot contain letters or symbols'
      })

      return
    }

    this.setState({loading: true})

    const res = await fetch(`http://mmurphy.co.uk/parkrun/api/${this.state.searchText}`)

    this.setState({ 
      loading: false,
      error: false,
      errorMessage: null
    })
    
    if (res.ok) {
      const user = await res.json()
      user.events.map(event => {
        return event.runs.map(run => {
          run.date = new Date(run.date)
          return run
        })
      })

      this.setState({ user })
    } else {
      if (res.status === 404) {
        this.setState({ 
          error: true,
          errorMessage: 'We\'re having trouble finding a user with that athlete number, give it another try!'
        })
      } else {
        console.log('There has been an unknown error')
        console.error(res)
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Parkrun Profile</h1>
        <Search 
          searchChange={this.onSearchChange}
          searchButtonClick={this.onSearchButtonClick}
        />
        <Portfolio
          user={this.state.user}
          loading={this.state.loading}
          error={this.state.error}
          errorMessage={this.state.errorMessage}
        />
      </div>
    )
  }
}

export default App;
