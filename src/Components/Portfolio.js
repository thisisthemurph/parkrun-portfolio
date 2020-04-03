import React from 'react'
import Loading from './Loading'
import Overview from './Overview'
import Chart from './Chart'
import moment from 'moment'
// import './Portfolio.css'

function Portfolio({ user, loading }) {
  if (loading) {
    return (
      <Loading />
    )
  }

  if (Object.keys(user).length === 0) {
    return (
      <div>
        <p>Enter your number and click search to view your profile</p>
      </div>
    )
  }
  
  const allRuns = flatternUserEvents(user.events)

  return (
    <div>
      <h2>{user.name}</h2>
      <section>
        <h3>Your Events</h3>
        <p>You have competed at {user.eventCount} events and completed a total of {allRuns.length} runs</p>
      </section>
      
      {/* <Overview allRuns={allRuns} /> */}
      <Chart chartData={getChartData(allRuns)}/>
    </div>
  )
}

const getChartData = runs => {
  
  const runData = runs.map(run => {
    const mins = Math.floor(run.time / 60)
    const secs = run.time - mins * 60
    return parseFloat(`${mins}.${secs}`)
  })

  const data = {
    labels: runs.map(run => moment(run.date).format('DD/MM/YYYY')),
    datasets:[
      {
        label: 'All time parkrun progress',
        data: runData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
      }
    ]
  }

  return data
}

/**
 * Returns all runs from all events as a flat Array
 * @param {object} events the users events (user.events)
 */
const flatternUserEvents = events => {
  return events.map(event => event.runs).flat()
               .sort((a, b) => a.date - b.date)
}

export default Portfolio;
