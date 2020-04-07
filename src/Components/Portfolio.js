import React, { Component } from 'react'
import Loading from './Loading'
import Overview from './Overview'
import Chart from './Chart'
import ChartListContainer from './ChartListContainer'

import moment from 'moment'
import _ from 'underscore'
import niceHexColors from './colorAssistant'

import './Portfolio.scss'


class Portfolio extends Component {
  state = {
    colorList: _.shuffle(niceHexColors())
  }

  render() {

    if (this.props.loading) {
      return <Loading />
    }
  
    if (Object.keys(this.props.user).length === 0) {
      return (
        <div>
          <p>Enter your number and click search to view your profile</p>
        </div>
      )
    }
  
    const allRuns = this.flatternUserEvents(this.props.user.events)
    const charts = [
      this.allRunsChart(allRuns),
      this.eventsChart(this.props.user.events)
    ]

    return (
      <>
        <h2>{this.props.user.name}</h2>
        <Overview user={this.props.user} allRuns={allRuns} />
        <ChartListContainer charts={charts} />
      </>
    )
  }

  eventsChart = events => {

    const data = {
      labels: events.map(event => event.name),
      datasets:[
        {
          label: 'Your Parkrun Events',
          data: events.map(event => event.runs.length),
          backgroundColor: this.state.colorList
        }
      ],
      options: {
        responsive: true
      }
    }

    return <Chart chartType='pie' data={data} key='EVENTS_CHART' />
  
  }
  
  allRunsChart = runs => {
  
    // Format the run data into a decimal 
    const runData = runs.map(run => {
      const duration = moment.duration(run.time, 'seconds')
      return Number(duration.asMinutes().toFixed(2))
    })
  
    // Use colors to highlight the personal bests
    const colors = runs.map(run => run.pb ? 'rgba(0, 255, 0, 0.6)' : 'rgba(255, 99, 132, 0.6)')
  
    const data = {
      labels: runs.map(run => moment(run.date).format('DD MMM YY')),
      datasets:[
        {
          label: 'All time parkrun progress',
          data: runData,
          backgroundColor: colors
        }
      ],
      options: {
        responsive: true
      }
    }

    return <Chart chartType='line' data={data} key='ALL_RUNS_CHART' />
  }
  
  flatternUserEvents = events => {
    return events.map(event => event.runs).flat()
                 .sort((a, b) => a.date - b.date)
  }
  
}

export default Portfolio;
