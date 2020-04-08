import React, { Component } from 'react'
import Loading from './Loading'
import Overview from './Overview'
import Chart from './Chart'
import ChartListContainer from './ChartListContainer'
import { colorAssistant, niceHexColors } from '../colorAssistant'
import { stringifyDuration } from '../timeAssistant'

import moment from 'moment'
import _ from 'underscore'

import './Portfolio.scss'


class Portfolio extends Component {
  state = {
    colorList: niceHexColors
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
      this.positionOverTimeChart(allRuns),
      this.durationOverTimeChart(allRuns),
      this.eventsChart(this.props.user.events)
    ]

    return (
      <div className='Portfolio'>
        <h2>{this.props.user.name}</h2>
        <Overview user={this.props.user} allRuns={allRuns} />
        <ChartListContainer charts={charts} />
      </div>
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
      ]
    }

    return (
      <Chart 
        chartType='pie'
        data={data}
        key='EVENTS_CHART' />
    )
  
  }

  positionOverTimeChart = runs => {
  
    // Use colors to highlight the personal bests
    const colors = runs.map(run => run.pb ? colorAssistant.green.string() : colorAssistant.black.string())

    const data = {
      labels: runs.map(run => moment(run.date).format('DD MMM YY')),
      datasets: [
        {
          label: 'Position over time',
          data: runs.map(run => run.position),
          fill: false,
          borderColor: colorAssistant.silver.string(),
          pointBorderColor: colors,
          pointBackgroundColor: colors,
          pointRadius: 5,
          pointHoverRadius: 10
        }
      ]
    }

    return (
      <Chart 
        chartType='line' 
        data={data}
        key='POS_OVER_TIME_CHART' />
    )
  }
  
  durationOverTimeChart = runs => {
  
    // Format the run data into a decimal 
    const runData = runs.map(run => {
      const duration = moment.duration(run.time, 'seconds')
      return Number(duration.asMinutes().toFixed(2))
    })
  
    // Use colors to highlight the personal bests
    const colors = runs.map(run => run.pb ? colorAssistant.green.string() : colorAssistant.black.string())

    const data = {
      labels: runs.map(run => moment(run.date).format('DD MMM YY')),
      datasets: [
        {
          label: 'Durtion over time',
          data: runData,
          fill: false,
          borderColor: colorAssistant.silver.string(),
          pointBorderColor: colors,
          pointBackgroundColor: colors,
          pointRadius: 5,
          pointHoverRadius: 10
        }
      ]
    }

    const options = {
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            const seconds = moment.duration(tooltipItem.yLabel, 'minutes').asSeconds()
            return `Time taken: ${stringifyDuration(seconds)}`
          }
        }
      }
    }

    return (
      <Chart 
        chartType='line' 
        data={data}
        options={options}
        key='DUR_OVER_TIME' />
    )

  }
  
  flatternUserEvents = events => {
    return events.map(event => event.runs).flat()
                 .sort((a, b) => a.date - b.date)
  }
  
}

export default Portfolio;
