import * as R from 'ramda'
import React from 'react'
import './Technology.scss'

class Technology extends React.Component {
  public componentDidMount() {
    if (!R.isEmpty(R.prop('AmCharts', window))) {
      const AmCharts: any = R.prop('AmCharts', window)

      if (!R.isEmpty(R.prop('makeChart', AmCharts))) {
        const makeChart = R.prop('makeChart', AmCharts)
        makeChart('wdd1', {
          autoMargins: false,
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: false,
            tickLength: 0,
          },
          categoryField: 'name',

          dataProvider: [
            {
              bullet: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
              color: '#00D8FF',
              name: 'React',
              points: 90,
            },
            {
              bullet: 'https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-512.png',
              color: '#C30030',
              name: 'Angular',
              points: 70,
            },
            {
              bullet:
                'https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png',
              color: '#FFBD39',
              name: 'Javascript',
              points: 80,
            },
            {
              bullet: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_32.png',
              color: '#F0642A',
              name: 'HTML',
              points: 90,
            },
            {
              bullet: 'https://verekia.com/_pages/css3/introduction-css3/img/css3-logo.png',
              color: '#1C88C7',
              name: 'CSS / SASS / LESS',
              points: 80,
            },
            {
              bullet: 'https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg',
              color: '#563C7C',
              name: 'Bootstrap',
              points: 80,
            },
          ],

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
        })

        makeChart('wdd2', {
          autoMargins: false,
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: false,
            tickLength: 0,
          },
          categoryField: 'name',

          dataProvider: [
            {
              bullet: 'https://js.foundation/wp-content/uploads/sites/33/2017/02/jquery.png',
              color: '#0F69AD',
              name: 'JQuery',
              points: 80,
            },
            {
              bullet: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
              color: '#007ACC',
              name: 'Typescript',
              points: 70,
            },
            {
              bullet: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
              color: '#8CC74B',
              name: 'Node',
              points: 60,
            },
            {
              bullet:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png',
              color: '#777CB4',
              name: 'PHP',
              points: 70,
            },
            {
              bullet: 'https://vuejs.org/images/logo.png',
              color: '#41B883',
              name: 'Vue',
              points: 40,
            },
          ],
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
        })

        makeChart('db', {
          autoMargins: false,
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: false,
            tickLength: 0,
          },
          categoryField: 'name',

          dataProvider: [
            {
              bullet: 'http://www.stickpng.com/assets/images/5848104fcef1014c0b5e4950.png',
              color: '#03596F',
              name: 'MySQL',
              points: 60,
            },
            {
              bullet:
                'https://www.logolynx.com/images/logolynx/58/5875edb5eecea731a30ee1118b52470d.png',
              color: '#AD2223',
              name: 'MSSQL',
              points: 60,
            },
            {
              bullet: 'https://www.mongodb.com/assets/images/global/leaf.png',
              color: '#149B50',
              name: 'MongoDB',
              points: 40,
            },
          ],
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
        })

        makeChart('tools', {
          autoMargins: false,
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: false,
            tickLength: 0,
          },
          categoryField: 'name',

          dataProvider: [
            {
              bullet:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gulp.js_Logo.svg/463px-Gulp.js_Logo.svg.png',
              color: '#DA4648',
              name: 'Gulp',
              points: 70,
            },
            {
              bullet:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png',
              color: '#CB3837',
              name: 'NPM',
              points: 70,
            },
            {
              bullet: 'https://bower.io/img/bower-logo.png',
              color: '#FFCC30',
              name: 'Bower',
              points: 60,
            },
            {
              bullet:
                'https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png',
              color: '#1C78C0',
              name: 'Webpack',
              points: 60,
            },
            {
              bullet: 'https://stickeroid.com/uploads/pic/full/thumb/stickeroid_5bf5475aa0ad1.png',
              color: '#F34E2A',
              name: 'Git',
              points: 70,
            },
            {
              bullet:
                'https://wiki.jenkins.io/download/attachments/2916393/logo.png?version=1&modificationDate=1302753947000&api=v2',
              color: '#335061',
              name: 'Jenkins',
              points: 40,
            },
            {
              bullet:
                'https://www.appythings.nl/wp-content/uploads/2018/06/aws-logo-icon-PNG-Transparent-Background.png',
              color: '#F8981D',
              name: 'AWS',
              points: 30,
            },
            {
              bullet:
                'http://www.freelogovectors.net/wp-content/uploads/2016/03/Microsoft_Azure_Logo2017.png',
              color: '#2075B8',
              name: 'Azure',
              points: 20,
            },
          ],
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
        })

        makeChart('mm', {
          autoMargins: false,
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: false,
            tickLength: 0,
          },
          categoryField: 'name',
          dataProvider: [
            {
              bullet: 'http://www.stickpng.com/assets/images/586d7ac125738d9f2d793e92.png',
              color: '#08014E',
              name: 'Photoshop',
              points: 40,
            },
            {
              bullet:
                'https://purepng.com/public/uploads/large/purepng.com-adobe-flash-logo-iconadobeflashadobe-flashaiillustratoradobe-iconicontiffadobe-logologologo-icon-231519333479uog7f.png',
              color: '#512832',
              name: 'Flash',
              points: 20,
            },
            {
              bullet:
                'https://seeklogo.com/images/A/autodesk-maya-logo-4B9E2A913A-seeklogo.com.png',
              color: '#015050',
              name: 'MAYA',
              points: 20,
            },
          ],

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
        })

        makeChart('testing', {
          autoMargins: false,
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: false,
            tickLength: 0,
          },
          categoryField: 'name',

          dataProvider: [
            {
              bullet: 'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png',
              color: '#5697CF',
              name: 'Jest - Enzyme',
              points: 80,
            },
            {
              bullet:
                'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/03/1427207179CoffeeScriptLogo.png',
              color: '#28334B',
              name: 'CoffeeScript - Jasmine',
              points: 70,
            },
            {
              bullet:
                'https://i2.wp.com/qavalidation.com/wp-content/uploads/2017/02/protractor-logo.png',
              color: '#B43031',
              name: 'Protractor - Selenium',
              points: 80,
            },
            {
              bullet: 'https://avatars3.githubusercontent.com/u/3284117?s=400&v=4',
              color: '#349B8A',
              name: 'Karma - Jasmine',
              points: 70,
            },
            {
              bullet: 'https://developers.google.com/web/tools/images/puppeteer.png',
              color: '#01D7A1',
              name: 'Puppeteer',
              points: 80,
            },
          ],
          export: {
            enabled: false,
          },
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
        })
      }
    }
  }

  public render() {
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
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="panel panel-bd lobidisable">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-pie-chart" />
                    <h4>Web Designing & Development - Primary</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <div id="wdd1" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="panel panel-bd lobidisable">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-pie-chart" />
                    <h4>Web Designing & Development - Secondary</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <div id="wdd2" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="panel panel-bd lobidisable">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-pie-chart" />
                    <h4>Database</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <div id="db" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="panel panel-bd lobidisable">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-pie-chart" />
                    <h4>Tools</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <div id="tools" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="panel panel-bd lobidisable">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-pie-chart" />
                    <h4>Multimedia</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <div id="mm" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="panel panel-bd lobidisable">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-pie-chart" />
                    <h4>Testing</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <div id="testing" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Technology
