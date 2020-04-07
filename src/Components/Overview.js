import React from 'react';

import { stringifyDuration } from './timeAssistant'

// import './Overview.css';

function Overview({ user, allRuns }) {
  const averageTime = stringifyDuration(getAverageRunningTime(allRuns))
  const bestTime = stringifyDuration(getBestTime(allRuns))
  const totalTime = stringifyDuration(getTotalRunningTime(allRuns))
  const totalDistance = allRuns.length * 5

  return (
    <div className='Overview'>
      <p>You have completed {allRuns.length} runs in {user.eventCount} events</p>
      <p>
        <b>Average run time:</b> {averageTime}<br />
        <b>Personal best:</b> {bestTime}<br />
        <b>Total run time:</b> {totalTime}<br />
        <b>Total run distance:</b> {totalDistance}km
      </p>
    </div>
  );
}

const getBestTime = runs => {
  return Math.min(...runs.map(run => run.time))
}

/**
 * Calculates the averave time based on all given runs
 * @param {Array} runs the Array of run objects to be processed
 */
const getAverageRunningTime = runs => {
  return Math.floor(getTotalRunningTime(runs) / runs.length)
}

/**
 * Calculates the total time ran, based on all given runs
 * @param {Array} runs the Array of run objects to be processed
 */
const getTotalRunningTime = runs => {
  const summer = (acc, cur) => acc + cur

  return runs
    .map(run => run.time)
    .reduce(summer)
}

export default Overview;
