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

  onSearchChange = event => {
    this.setState({
      searchText: event.target.value
    })
  }

  onSearchButtonClick = async (event) => {
    console.log('Fetching data...')

    this.setState({ loading: true })

    // const res = await fetch(`http://localhost:5000/parkrun/api/${this.state.searchText}`)

    console.log('Data is got')
    this.setState({ loading: false })
    
    // if (res.ok) {
    //   const user = await res.json()
    //   user.events.map(event => {
    //     return event.runs.map(run => {
    //       run.date = new Date(run.date)
    //       return run
    //     })
    //   })

    //   this.setState({ user, userDoesNotExist: false })
    // } else {
    //   if (res.status === 404) {
    //     console.log('the user does not exist')
    //     this.setState({ userDoesNotExist: true })
    //   } else {
    //     console.log('some other error')
    //     console.error(res)
    //   }
    // }

    let tempData = '{"id":"6106724","name":"Kim HARDY","eventCount":2,"events":[{"name":"braunstone","url":"https://www.parkrun.org.uk/braunstone/results/athletehistory?athleteNumber=6106724","runs":[{"date":"2020-03-14T00:00:00.000Z","number":489,"position":474,"time":2764,"ageGrade":"32.13%","pb":true},{"date":"2020-03-07T00:00:00.000Z","number":488,"position":480,"time":3016,"ageGrade":"29.44%","pb":false},{"date":"2020-02-29T00:00:00.000Z","number":487,"position":360,"time":3064,"ageGrade":"28.98%","pb":false},{"date":"2020-02-22T00:00:00.000Z","number":486,"position":393,"time":3054,"ageGrade":"29.08%","pb":false},{"date":"2020-02-15T00:00:00.000Z","number":485,"position":341,"time":3060,"ageGrade":"29.02%","pb":false},{"date":"2020-02-08T00:00:00.000Z","number":484,"position":510,"time":3058,"ageGrade":"29.04%","pb":false},{"date":"2020-02-01T00:00:00.000Z","number":483,"position":663,"time":3109,"ageGrade":"28.56%","pb":false},{"date":"2020-01-25T00:00:00.000Z","number":482,"position":527,"time":3101,"ageGrade":"28.64%","pb":false},{"date":"2020-01-18T00:00:00.000Z","number":481,"position":559,"time":3042,"ageGrade":"29.19%","pb":false},{"date":"2020-01-11T00:00:00.000Z","number":480,"position":621,"time":2908,"ageGrade":"30.54%","pb":true},{"date":"2020-01-04T00:00:00.000Z","number":479,"position":582,"time":3197,"ageGrade":"27.78%","pb":false},{"date":"2020-01-01T00:00:00.000Z","number":478,"position":888,"time":3380,"ageGrade":"26.27%","pb":false},{"date":"2019-12-28T00:00:00.000Z","number":477,"position":438,"time":3161,"ageGrade":"28.09%","pb":false},{"date":"2019-12-25T00:00:00.000Z","number":476,"position":573,"time":3209,"ageGrade":"27.67%","pb":false},{"date":"2019-12-21T00:00:00.000Z","number":475,"position":359,"time":3284,"ageGrade":"27.04%","pb":false},{"date":"2019-12-14T00:00:00.000Z","number":474,"position":326,"time":3025,"ageGrade":"29.36%","pb":true},{"date":"2019-12-07T00:00:00.000Z","number":473,"position":328,"time":3045,"ageGrade":"29.16%","pb":true},{"date":"2019-11-23T00:00:00.000Z","number":471,"position":406,"time":3094,"ageGrade":"28.70%","pb":true},{"date":"2019-11-16T00:00:00.000Z","number":470,"position":381,"time":3272,"ageGrade":"27.14%","pb":false},{"date":"2019-11-09T00:00:00.000Z","number":469,"position":391,"time":3648,"ageGrade":"24.34%","pb":false},{"date":"2019-10-18T23:00:00.000Z","number":467,"position":405,"time":3156,"ageGrade":"28.14%","pb":false},{"date":"2019-10-04T23:00:00.000Z","number":465,"position":504,"time":3146,"ageGrade":"28.23%","pb":true},{"date":"2019-09-27T23:00:00.000Z","number":464,"position":407,"time":3246,"ageGrade":"27.36%","pb":true},{"date":"2019-09-20T23:00:00.000Z","number":463,"position":381,"time":3398,"ageGrade":"26.13%","pb":true},{"date":"2019-09-13T23:00:00.000Z","number":462,"position":448,"time":3461,"ageGrade":"25.66%","pb":false},{"date":"2019-09-06T23:00:00.000Z","number":461,"position":386,"time":3443,"ageGrade":"25.79%","pb":true},{"date":"2019-08-30T23:00:00.000Z","number":460,"position":524,"time":3449,"ageGrade":"25.75%","pb":false}]},{"name":"leicestervictoria","url":"https://www.parkrun.org.uk/leicestervictoria/results/athletehistory?athleteNumber=6106724","runs":[{"date":"2020-01-01T00:00:00.000Z","number":212,"position":629,"time":3056,"ageGrade":"29.06%","pb":false}]}]}'
    tempData = JSON.parse(tempData)
    tempData.events.map(event => {
      return event.runs.map(run => {
        run.date = new Date(run.date)
        return run
      })
    })
    this.setState({ user: tempData, userDoesNotExist: false })
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
