import React, { Component } from 'react'
import Search from '../Components/Search'
import Portfolio from '../Components/Portfolio'

import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      userDoesNotExist: false,
      loading: false,
      searchText: ''
    }
  }

  componentDidMount() {

  }

  onSearchChange = event => {
    this.setState({
      searchText: event.target.value
    })
  }

  onSearchButtonClick = async (event) => {
    console.log('Fetching data...')

    this.setState({ loading: true })

    const res = await fetch(`http://localhost:5000/parkrun/api/${this.state.searchText}`)

    console.log('Data is got')
    this.setState({ loading: false })
    
    if (res.ok) {
      const user = await res.json()
      console.log(user.name)
      this.setState({ user, userDoesNotExist: false })
    } else {
      if (res.status === 404) {
        console.log('the user does not exist')
        this.setState({ userDoesNotExist: true })
      } else {
        console.log('some other error')
        console.error(res)
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Parkrun Portfolio</h1>
        <Search 
          searchChange={this.onSearchChange}
          searchButtonClick={this.onSearchButtonClick}
        />
        <Portfolio
          user={this.state.user}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
