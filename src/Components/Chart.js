import React, { Component } from 'react'
import { Line, Pie } from 'react-chartjs-2'

import './Chart.scss';

class Chart extends Component {

  render() {
    let chart;
    if (this.props.chartType === 'line') {
      chart = <Line data={this.props.data} options={this.props.options || {}} />
    } else {
      chart = <Pie data={this.props.data} />
    }

    return (
      <div className="Chart">
        {chart}
      </div>
    );
  }
}

export default Chart;
