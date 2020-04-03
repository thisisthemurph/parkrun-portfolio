import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

import './Chart.scss';

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: props.chartData
    }
  }

  render() {
    return (
      <div className="Chart">
        <Line data={this.state.chartData} />
      </div>
    );
  }
}

export default Chart;
