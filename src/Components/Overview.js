import React from 'react';

import { stringifyDuration } from '../timeAssistant'

import './Overview.scss';

function Overview({ user, allRuns }) {
  const averageTimeSecs = getAverageRunningTime(allRuns)
  const bestTimeSecs = getBestTime(allRuns)
  const totalTimeSecs = getTotalRunningTime(allRuns)
  const totalDistance = allRuns.length * 5
  const averageSpeed = totalDistance / totalTimeSecs * 60 * 60

  return (
    <div className='Overview'>
      <p className='tag'>You've completed <strong>{allRuns.length}</strong> runs at <strong>{user.eventCount}</strong> events</p>
      <div className='stats'>
        <p><strong>Average time:</strong> {stringifyDuration(averageTimeSecs)}</p>
        <p><strong>PB:</strong> {stringifyDuration(bestTimeSecs)}</p>
        <p><strong>Time ran:</strong> {stringifyDuration(totalTimeSecs)}</p>
        <p><strong>Total distance:</strong> {totalDistance}km</p>
        <p><strong>Average speed:</strong> {averageSpeed.toFixed(2)}km/ph</p>
      </div>
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
