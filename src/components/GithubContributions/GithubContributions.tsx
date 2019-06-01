import * as R from 'ramda'
import React from 'react'
import { transformContributionsData } from '../../services'
import './GithubContributions.scss'

interface Props {
  contributions: any
}
class GithubContributions extends React.Component<Props, null> {
  constructor(props: Props) {
    super(props)
  }

  public makeGithubContributionsChart = (chartData: any) => {
    if (!R.isEmpty(R.prop('AmCharts', window))) {
      const AmCharts: any = R.prop('AmCharts', window)

      if (!R.isEmpty(R.prop('makeChart', AmCharts))) {
        const makeChart = R.prop('makeChart', AmCharts)
        makeChart('githubContributions', {
          autoMarginOffset: 20,
          balloon: {
            borderThickness: 1,
            shadowAlpha: 0,
          },
          chartCursor: {
            cursorAlpha: 0,

            valueLineAlpha: 0.5,
            valueLineBalloonEnabled: true,

            valueLineEnabled: true,
            valueZoomable: true,
            zoomable: false,
          },

          categoryAxis: {
            dashLength: 1,
            parseDates: true,

            minorGridEnabled: true,
          },
          categoryField: 'date',
          dataDateFormat: 'YYYY-MM-DD',
          dataProvider: chartData,
          export: {
            enabled: false,
          },
          graphs: [
            {
              balloon: {
                adjustBorderColor: false,
                color: '#ffffff',
                drop: true,

                type: 'smoothedLine',
              },
              balloonText: "<span style='font-size:18px;'>[[value]]</span>",
              bullet: 'round',
              bulletBorderAlpha: 1,
              bulletColor: '#FFFFFF',
              bulletSize: 5,
              id: 'g1',

              fillAlphas: 0.2,

              hideBulletsCount: 50,
              lineThickness: 2,
              title: 'red line',
              useLineColorForBulletBorder: true,
              valueField: 'count',
            },
          ],

          marginLeft: 40,
          marginRight: 40,

          theme: 'light',
          type: 'serial',

          valueScrollbar: {
            autoGridCount: true,
            color: '#000000',
            scrollbarHeight: 50,
          },

          valueAxes: [
            {
              axisAlpha: 0,
              id: 'v1',
              ignoreAxisWidth: true,
              position: 'left',
            },
          ],
        })
      }
    }
  }

  public componentDidUpdate() {
    const { contributions } = this.props
    this.makeGithubContributionsChart(transformContributionsData(contributions))
  }

  public render() {
    return (
      <div className="panel panel-bd lobidrag">
        <div className="panel-heading">
          <div className="panel-title">
            <i className="ti-panel" />
            <h4>Github Contributions</h4>
          </div>
        </div>
        <div className="panel-body">
          <div id="githubContributions" />
        </div>
      </div>
    )
  }
}

export default GithubContributions
