import React from 'react';
// import './Overview.css';

function Overview({ allRuns }) {
  const averageTime = stringifyDuration(getAverageRunningTime(allRuns))
  const totalTime = stringifyDuration(getTotalRunningTime(allRuns))
  const totalDistance = allRuns.length * 5

  return (
    <>
      <h3>Overview Stats</h3>
      <p><b>Average run time:</b> {averageTime}</p>
      <p><b>Total run time:</b> {totalTime}</p>
      <p><b>Total run distance:</b> {totalDistance}km</p>
    </>
  );
}

/**
 * Returns a string representation of the duration in the format of HH:MM:SS or MM:SS
 * @param {number} secs the number of seconds to be formatted
 */
// const secondsToStringDuration = secs => {
//   var date = new Date(0);
//   date.setSeconds(secs);
  
//   if (secs >= 3600)
//     return date.toISOString().substr(11, 8)
//   else
//     return date.toISOString().substr(14, 5)
// }

const stringifyDuration = secs => {
  const days = secs / 86400
  const hours = (days % 1) * 24
  const minutes = (hours % 1) * 60
  const seconds = (minutes % 1) * 60
  
  const appends = ['day', 'hour', 'minute', 'second']
  const parts = [days, hours, minutes, seconds]
    .map((part, idx) => {
      const p = Math.floor(part)
      if (p > 0)
        return p + ' ' + (p === 1 ? appends[idx] : appends[idx] + 's')
      return p;
    })
    .filter(part => part !== 0)
  
  return parts.join(', ').replace(/,([^,]*)$/, ' and $1')
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
