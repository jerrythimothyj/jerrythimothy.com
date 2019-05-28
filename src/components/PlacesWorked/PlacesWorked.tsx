import * as R from 'ramda'
import React from 'react'
import './PlacesWorked.scss'

class PlacesWorked extends React.Component {
  public componentDidMount() {
    if (!R.isEmpty(R.prop('AmCharts', window))) {
      const AmCharts: any = R.prop('AmCharts', window)

      /**
       * SVG path for target icon
       */
      const targetSVG =
        'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z'

      /**
       * SVG path for plane icon
       */
      const planeSVG =
        'm2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47'

      /**
       * Create the map
       */
      if (!R.isEmpty(R.prop('makeChart', AmCharts))) {
        const makeChart = R.prop('makeChart', AmCharts)
        makeChart('placesWorked', {
          areasSettings: {
            unlistedAreasColor: '#5b69bc',
          },
          dataProvider: {
            images: [
              {
                latitude: 10.7905,
                longitude: 78.7047,
                svgPath: targetSVG,
                title: 'Tiruchirappalli',
              },
              {
                latitude: 12.9716,
                longitude: 77.5946,
                svgPath: targetSVG,
                title: 'Bengaluru',
              },
              {
                latitude: 24.4539,
                longitude: 54.3773,
                svgPath: targetSVG,
                title: 'Abu Dhabi',
              },
              {
                alpha: 0.1,
                animateAlongLine: true,
                color: '#000000',
                flipDirection: true,
                lineId: 'line2',
                loop: true,

                positionOnLine: 0,

                positionScale: 1.3,
                scale: 0.03,
                svgPath: planeSVG,
              },
              {
                animateAlongLine: true,
                color: '#585869',
                flipDirection: true,

                lineId: 'line1',

                loop: true,
                positionOnLine: 0,
                positionScale: 1.8,
                scale: 0.03,
                svgPath: planeSVG,
              },
            ],

            map: 'worldLow',

            lines: [
              {
                alpha: 0.3,
                arc: -0.85,

                id: 'line1',

                latitudes: [10.7905, 12.9716, 24.4539],
                longitudes: [78.7047, 77.5946, 54.3773],
              },
              {
                alpha: 0,
                color: '#E5343D',
                id: 'line2',
                latitudes: [10.7905, 12.9716, 24.4539],
                longitudes: [78.7047, 77.5946, 54.3773],
              },
            ],
          },
          export: {
            enabled: false,
          },
          imagesSettings: {
            adjustAnimationSpeed: true,
            animationDuration: 4,
            color: '#E5343D',

            pauseDuration: 0.2,
            rollOverColor: '#E5343D',
            selectedColor: '#E5343D',
          },
          linesSettings: { alpha: 0.4, color: '#E5343D' },
          theme: 'light',
          type: 'map',

          projection: 'winkel3',
        })
      }
    }
  }

  public render() {
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
