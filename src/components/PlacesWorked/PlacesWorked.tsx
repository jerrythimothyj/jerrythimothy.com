import React from 'react'
import * as R from 'ramda'
import './PlacesWorked.scss'

class PlacesWorked extends React.Component {
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
       * SVG path for plane icon
       */
      var planeSVG =
        'm2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47'

      /**
       * Create the map
       */
      if (!R.isEmpty(R.prop('makeChart', AmCharts))) {
        const makeChart = R.prop('makeChart', AmCharts)
        makeChart('placesWorked', {
          type: 'map',
          theme: 'light',

          projection: 'winkel3',
          dataProvider: {
            map: 'worldLow',

            lines: [
              {
                id: 'line1',
                arc: -0.85,
                alpha: 0.3,
                latitudes: [10.7905, 12.9716, 24.4539],
                longitudes: [78.7047, 77.5946, 54.3773],
              },
              {
                id: 'line2',
                alpha: 0,
                color: '#E5343D',
                latitudes: [10.7905, 12.9716, 24.4539],
                longitudes: [78.7047, 77.5946, 54.3773],
              },
            ],
            images: [
              {
                svgPath: targetSVG,
                title: 'Tiruchirappalli',
                latitude: 10.7905,
                longitude: 78.7047,
              },
              {
                svgPath: targetSVG,
                title: 'Bengaluru',
                latitude: 12.9716,
                longitude: 77.5946,
              },
              {
                svgPath: targetSVG,
                title: 'Abu Dhabi',
                latitude: 24.4539,
                longitude: 54.3773,
              },
              {
                svgPath: planeSVG,
                positionOnLine: 0,
                color: '#000000',
                alpha: 0.1,
                animateAlongLine: true,
                lineId: 'line2',
                flipDirection: true,
                loop: true,
                scale: 0.03,
                positionScale: 1.3,
              },
              {
                svgPath: planeSVG,
                positionOnLine: 0,
                color: '#585869',
                animateAlongLine: true,
                lineId: 'line1',
                flipDirection: true,
                loop: true,
                scale: 0.03,
                positionScale: 1.8,
              },
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

          linesSettings: {
            color: '#E5343D',
            alpha: 0.4,
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
            <h4>Places Worked</h4>
          </div>
        </div>
        <div className="panel-body">
          <div id="placesWorked" />
        </div>
      </div>
    )
  }
}

export default PlacesWorked
