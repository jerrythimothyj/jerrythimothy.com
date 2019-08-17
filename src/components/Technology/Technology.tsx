import * as R from 'ramda'
import React, { useEffect, useState } from 'react'
import { fetchTechStack } from '../../services'
import './Technology.scss'

const Technology: React.FC = () => {
  const makeChartProps = {
    autoMargins: false,
    categoryAxis: {
      axisAlpha: 0,
      gridAlpha: 0,
      inside: false,
      tickLength: 0,
    },
    categoryField: 'name',

    export: {
      enabled: false,
    },
    graphs: [
      {
        balloonText: "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
        bulletOffset: 10,
        bulletSize: 52,
        colorField: 'color',
        cornerRadiusTop: 8,
        customBulletField: 'bullet',
        fillAlphas: 0.9,
        lineAlpha: 0,
        type: 'column',
        valueField: 'points',
      },
    ],
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,

    startDuration: 1,
    theme: 'light',
    type: 'serial',

    valueAxes: [
      {
        axisAlpha: 0,
        dashLength: 4,
        maximum: 100,
        minimum: 0,

        position: 'left',
      },
    ],
  }

  const [techStack, setTechStack] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetchTechStack()
      setTechStack(response)
    }
    fetchEvents()
  }, [])

  if (!R.isEmpty(R.prop('AmCharts', window))) {
    const AmCharts: any = R.prop('AmCharts', window)

    if (!R.isEmpty(R.prop('makeChart', AmCharts))) {
      const makeChart = R.prop('makeChart', AmCharts)

      R.map(stack => {
        makeChart(R.prop('tag', stack), {
          ...R.clone(makeChartProps),
          dataProvider: R.prop('stack', stack),
        })
      }, techStack)
    }
  }

  return (
    <div id="page-wrapper">
      <div className="content">
        <div className="content-header">
          <div className="header-icon">
            <i className="pe-7s-gleam" />
          </div>
          <div className="header-title">
            <h1>Technology</h1>
            <small>Technology</small>
          </div>
        </div>
        <div className="row">
          {R.map(stack => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={R.prop('tag', stack)}>
                <div className="panel panel-bd lobidisable">
                  <div className="panel-heading">
                    <div className="panel-title">
                      <i className="ti-pie-chart" />
                      <h4>{R.prop('name', stack)}</h4>
                    </div>
                  </div>
                  <div className="panel-body">
                    <div id={R.prop('tag', stack)} />
                  </div>
                </div>
              </div>
            )
          }, techStack)}
        </div>
      </div>
    </div>
  )
}

export default Technology
