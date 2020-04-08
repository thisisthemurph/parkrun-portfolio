import React, { Component } from 'react'

import './ChartListContainer.scss'

class ChartListContainer extends Component {

    render() {
        return (
            <div className='ChartListContainer'>
                {this.props.charts.map(chart => chart)}
            </div>
        )
    }
}

export default ChartListContainer