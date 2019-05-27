import React from 'react'
import * as R from 'ramda'
import './CareerLocations.scss'

class CareerLocations extends React.Component {
  componentDidMount() {
    if (!R.isEmpty(R.prop('AmCharts', window))) {
      console.log(R.prop('AmCharts', window))
      const AmCharts: any = R.prop('AmCharts', window)

      /**
       * SVG path for target icon
       */
      var targetSVG =
        'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z'

      /**
       * Create the map
       */
      if (!R.isEmpty(R.prop('makeChart', AmCharts))) {
        const makeChart = R.prop('makeChart', AmCharts)
        makeChart('careerLocations', {
          type: 'map',
          theme: 'light',

          projection: 'miller',
          dataProvider: {
            map: 'worldLow',

            
            images: [
              {
                svgPath: targetSVG,
                title: 'USA',
                latitude: 37.0902,
                longitude: -95.7129,
              },
              {
                svgPath: targetSVG,
                title: 'Canada',
                latitude: 56.1304,
                longitude: -106.3468,
              },
              {
                svgPath: targetSVG,
                title: 'UK',
                latitude: 55.3781,
                longitude: -3.4360,
              },
              {
                svgPath: targetSVG,
                title: 'Australia',
                latitude: -25.2744,
                longitude: 133.7751,
              },
              {
                svgPath: targetSVG,
                title: 'Germany',
                latitude: 51.1657,
                longitude: 10.4515,
              },
              {
                svgPath: targetSVG,
                title: 'France',
                latitude: 46.2276,
                longitude: 2.2137,
              },
              {
                svgPath: targetSVG,
                title: 'New Zealand',
                latitude: -40.9006,
                longitude: 174.8860,
              },
              {
                svgPath: targetSVG,
                title: 'Singapore',
                latitude: 1.3521,
                longitude: 103.8198,
              },
              {
                svgPath: targetSVG,
                title: 'Italy',
                latitude: 41.8719,
                longitude: 12.5674,
              },
              {
                svgPath: targetSVG,
                title: 'Iceland',
                latitude: 64.9631,
                longitude: -19.0208,
              },
              {
                svgPath: targetSVG,
                title: 'Switzerland',
                latitude: 46.8182,
                longitude: 8.2275,
              },
              {
                svgPath: targetSVG,
                title: 'Netherlands',
                latitude: 52.1326,
                longitude: 52.1326,
              },
              {
                svgPath: targetSVG,
                title: 'Croatia',
                latitude: 45.1000,
                longitude: 15.2000,
              },
              {
                svgPath: targetSVG,
                title: 'Poland',
                latitude: 51.9194,
                longitude: 19.1451,
              },
              {
                svgPath: targetSVG,
                title: 'Norway',
                latitude: 60.4720,
                longitude: 8.4689,
              },
              {
                svgPath: targetSVG,
                title: 'Sweden',
                latitude: 60.1282,
                longitude: 18.6435,
              },
              {
                svgPath: targetSVG,
                title: 'Austria',
                latitude: 47.5162,
                longitude: 14.5501,
              },
              {
                svgPath: targetSVG,
                title: 'Belgium',
                latitude: 50.5039,
                longitude: 4.4699,
              },
              {
                svgPath: targetSVG,
                title: 'Belgium',
                latitude: 50.5039,
                longitude: 4.4699,
              },
              {
                svgPath: targetSVG,
                title: 'Denmark',
                latitude: 56.2639,
                longitude: 9.5018,
              },
              {
                svgPath: targetSVG,
                title: 'Finland',
                latitude: 61.9241,
                longitude: 25.7482,
              },
              {
                svgPath: targetSVG,
                title: 'Vatican City',
                latitude: 41.9029,
                longitude: 12.4534,
              },
              {
                svgPath: targetSVG,
                title: 'Republic of Ireland',
                latitude: 53.4129,
                longitude: -8.2439,
              },
              {
                svgPath: targetSVG,
                title: 'Jersey',
                latitude: 49.2144,
                longitude: -2.1312,
              }
            ],
          },

          areasSettings: {
            unlistedAreasColor: '#5b69bc',
          },

          imagesSettings: {
            color: '#E5343D',
            rollOverColor: '#E5343D',
            selectedColor: '#E5343D',
            pauseDuration: 0.2,
            animationDuration: 4,
            adjustAnimationSpeed: true,
          },

          export: {
            enabled: false,
          },
        })
      }
    }
  }

  render() {
    return (
      <div className="panel panel-bd lobidisable">
        <div className="panel-heading">
          <div className="panel-title">
            <i className="ti-pie-chart" />
            <h4>Places I would love to work</h4>
          </div>
        </div>
        <div className="panel-body">
          <div id="careerLocations" />
        </div>
      </div>
    )
  }
}

export default CareerLocations
