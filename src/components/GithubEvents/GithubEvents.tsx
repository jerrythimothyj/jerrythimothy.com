import * as R from 'ramda'
import React from 'react'
import { getGithubEvents, transformGithubEvents } from '../../services'
import './GithubEvents.scss'

class GithubEvents extends React.Component {
  public makeGithubEventsChart = (chartData: object[]) => {
    if (!R.isEmpty(R.prop('AmCharts', window))) {
      const AmCharts: any = R.prop('AmCharts', window)

      if (!R.isEmpty(R.prop('makeChart', AmCharts))) {
        const makeChart = R.prop('makeChart', AmCharts)
        makeChart('githubEvents', {
          addClassNames: true,
          categoryAxis: {
            autoGridCount: false,
            axisColor: '#555555',
            dateFormats: [
              { format: 'DD', period: 'DD' },
              { format: 'MMM DD', period: 'WW' },
              { format: 'MMM', period: 'MM' },
              { format: 'YYYY', period: 'YYYY' },
            ],
            gridAlpha: 0.1,
            gridColor: '#FFFFFF',
            gridCount: 50,
            minPeriod: 'DD',
            parseDates: true,
          },
          categoryField: 'date',

          dataDateFormat: 'YYYY-MM-DD',
          dataProvider: chartData,
          graphs: [
            {
              alphaField: 'alpha',
              fillAlphas: 0.9,
              id: 'g1',
              lineColor: '#263238',
              title: 'count',
              type: 'column',
              valueAxis: 'a1',
              valueField: 'count',
            },
          ],
          marginLeft: 0,
          startDuration: 1,
          theme: 'light',

          type: 'serial',

          // "color": "#FFFFFF",

          valueAxes: [
            {
              axisAlpha: 0,
              gridAlpha: 0,
              id: 'a1',
              title: 'count',
            },
            {
              axisAlpha: 0,
              gridAlpha: 0,
              id: 'a2',
              labelsEnabled: false,
              position: 'right',
            },
          ],

          chartCursor: {
            categoryBalloonDateFormat: 'DD',
            cursorAlpha: 0,
            valueBalloonsEnabled: false,
            zoomable: false,
          },
        })
      }
    }
  }

  public componentDidMount() {
    getGithubEvents().then(responses => {
      const allResponseData = R.map((response) => {
        return response.data
      },responses)
      this.makeGithubEventsChart(transformGithubEvents(allResponseData))
    })
  }
  public render() {
    return (
      <div className="panel panel-bd lobidrag">
        <div className="panel-heading">
          <div className="panel-title">
            <i className="ti-panel" />
            <h4>Github Events</h4>
          </div>
        </div>
        <div className="panel-body">
          <div id="githubEvents" />
        </div>
      </div>
    )
  }
}

export default GithubEvents
