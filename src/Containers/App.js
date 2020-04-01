import React, { Component } from 'react';
import Search from '../Components/Search'

// import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      userDoesNotExist: false,
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
    const res = await fetch(`http://localhost:5000/parkrun/api/${this.state.searchText}`)
    
    if (res.ok) {
      const user = await res.json()
      console.log(user.name)
      this.setState({ user, userDoesNotExist: false })
    } else {
      if (res.status === 404) {
        console.log('the user does not exist')
        this.setState({ userDoesNotExist: true })
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
      </div>
    );
  }
}

export default App;
