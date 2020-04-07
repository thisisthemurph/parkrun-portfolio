import { Component } from 'react'

class ChartListContainer extends Component {

    render() {
        return this.props.charts.map(chart => chart)
    }
}

export default ChartListContainer