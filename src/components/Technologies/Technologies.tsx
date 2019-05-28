import React from 'react'
import * as R from 'ramda'
import './Technologies.scss'

class Technologies extends React.Component {
  componentDidMount() {
    if (!R.isEmpty(R.prop('AmCharts', window))) {
      const AmCharts: any = R.prop('AmCharts', window)

      if (!R.isEmpty(R.prop('makeChart', AmCharts))) {
        const makeChart = R.prop('makeChart', AmCharts)
        makeChart('wdd1', {
          type: 'serial',
          theme: 'light',
          dataProvider: [
            {
              name: 'React',
              points: 90,
              color: '#00D8FF',
              bullet: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            },
            {
              name: 'Angular',
              points: 70,
              color: '#C30030',
              bullet: 'https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-512.png',
            },
            {
              name: 'Javascript',
              points: 80,
              color: '#FFBD39',
              bullet:
                'https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png',
            },
            {
              name: 'HTML',
              points: 90,
              color: '#F0642A',
              bullet: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_32.png',
            },
            {
              name: 'CSS / SASS / LESS',
              points: 80,
              color: '#1C88C7',
              bullet: 'https://verekia.com/_pages/css3/introduction-css3/img/css3-logo.png',
            },
            {
              name: 'Bootstrap',
              points: 80,
              color: '#563C7C',
              bullet: 'https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg',
            },
          ],
          valueAxes: [
            {
              maximum: 100,
              minimum: 0,
              axisAlpha: 0,
              dashLength: 4,
              position: 'left',
            },
          ],
          startDuration: 1,
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
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          autoMargins: false,
          categoryField: 'name',
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: true,
            tickLength: 0,
          },
          export: {
            enabled: false,
          },
        })

        makeChart('wdd2', {
          type: 'serial',
          theme: 'light',
          dataProvider: [
            {
              name: 'JQuery',
              points: 80,
              color: '#0F69AD',
              bullet: 'https://js.foundation/wp-content/uploads/sites/33/2017/02/jquery.png',
            },
            {
              name: 'Typescript',
              points: 70,
              color: '#007ACC',
              bullet: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
            },
            {
              name: 'Node',
              points: 60,
              color: '#8CC74B',
              bullet:
                'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
            },
            {
              name: 'PHP',
              points: 70,
              color: '#777CB4',
              bullet: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png',
            },
            {
              name: 'Vue',
              points: 40,
              color: '#41B883',
              bullet: 'https://vuejs.org/images/logo.png',
            },
          ],
          valueAxes: [
            {
              maximum: 100,
              minimum: 0,
              axisAlpha: 0,
              dashLength: 4,
              position: 'left',
            },
          ],
          startDuration: 1,
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
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          autoMargins: false,
          categoryField: 'name',
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: true,
            tickLength: 0,
          },
          export: {
            enabled: false,
          },
        })

        makeChart('db', {
          type: 'serial',
          theme: 'light',
          dataProvider: [
            {
              name: 'MySQL',
              points: 60,
              color: '#03596F',
              bullet: 'http://www.stickpng.com/assets/images/5848104fcef1014c0b5e4950.png',
            },
            {
              name: 'MSSQL',
              points: 60,
              color: '#AD2223',
              bullet: 'https://www.logolynx.com/images/logolynx/58/5875edb5eecea731a30ee1118b52470d.png',
            },
            {
              name: 'MongoDB',
              points: 40,
              color: '#149B50',
              bullet:
                'https://www.mongodb.com/assets/images/global/leaf.png',
            },
          ],
          valueAxes: [
            {
              maximum: 100,
              minimum: 0,
              axisAlpha: 0,
              dashLength: 4,
              position: 'left',
            },
          ],
          startDuration: 1,
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
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          autoMargins: false,
          categoryField: 'name',
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: true,
            tickLength: 0,
          },
          export: {
            enabled: false,
          },
        })

        makeChart('tools', {
          type: 'serial',
          theme: 'light',
          dataProvider: [
            {
              name: 'Gulp',
              points: 70,
              color: '#DA4648',
              bullet: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gulp.js_Logo.svg/463px-Gulp.js_Logo.svg.png',
            },
            {
              name: 'NPM',
              points: 70,
              color: '#CB3837',
              bullet: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png',
            },
            {
              name: 'Bower',
              points: 60,
              color: '#FFCC30',
              bullet:
                'https://bower.io/img/bower-logo.png',
            },
            {
              name: 'Webpack',
              points: 60,
              color: '#1C78C0',
              bullet:
                'https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png',
            },
            {
              name: 'Git',
              points: 70,
              color: '#F34E2A',
              bullet:
                'https://stickeroid.com/uploads/pic/full/thumb/stickeroid_5bf5475aa0ad1.png',
            },
            {
              name: 'Jenkins',
              points: 40,
              color: '#335061',
              bullet:
                'https://wiki.jenkins.io/download/attachments/2916393/logo.png?version=1&modificationDate=1302753947000&api=v2',
            },
            {
              name: 'AWS',
              points: 30,
              color: '#F8981D',
              bullet:
                'https://www.appythings.nl/wp-content/uploads/2018/06/aws-logo-icon-PNG-Transparent-Background.png',
            },
            {
              name: 'Azure',
              points: 20,
              color: '#2075B8',
              bullet:
                'http://www.freelogovectors.net/wp-content/uploads/2016/03/Microsoft_Azure_Logo2017.png',
            },
          ],
          valueAxes: [
            {
              maximum: 100,
              minimum: 0,
              axisAlpha: 0,
              dashLength: 4,
              position: 'left',
            },
          ],
          startDuration: 1,
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
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          autoMargins: false,
          categoryField: 'name',
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: true,
            tickLength: 0,
          },
          export: {
            enabled: false,
          },
        })

        makeChart('mm', {
          type: 'serial',
          theme: 'light',
          dataProvider: [
            {
              name: 'Photoshop',
              points: 40,
              color: '#08014E',
              bullet: 'http://www.stickpng.com/assets/images/586d7ac125738d9f2d793e92.png',
            },
            {
              name: 'Flash',
              points: 20,
              color: '#512832',
              bullet: 'https://purepng.com/public/uploads/large/purepng.com-adobe-flash-logo-iconadobeflashadobe-flashaiillustratoradobe-iconicontiffadobe-logologologo-icon-231519333479uog7f.png',
            },
            {
              name: 'MAYA',
              points: 20,
              color: '#015050',
              bullet:
                'https://seeklogo.com/images/A/autodesk-maya-logo-4B9E2A913A-seeklogo.com.png',
            },
          ],
          valueAxes: [
            {
              maximum: 100,
              minimum: 0,
              axisAlpha: 0,
              dashLength: 4,
              position: 'left',
            },
          ],
          startDuration: 1,
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
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          autoMargins: false,
          categoryField: 'name',
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: true,
            tickLength: 0,
          },
          export: {
            enabled: false,
          },
        })

        makeChart('testing', {
          type: 'serial',
          theme: 'light',
          dataProvider: [
            {
              name: 'Jest - Enzyme',
              points: 80,
              color: '#5697CF',
              bullet: 'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png',
            },
            {
              name: 'CoffeeScript - Jasmine',
              points: 70,
              color: '#28334B',
              bullet: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/03/1427207179CoffeeScriptLogo.png',
            },
            {
              name: 'Protractor - Selenium',
              points: 80,
              color: '#B43031',
              bullet:
                'https://i2.wp.com/qavalidation.com/wp-content/uploads/2017/02/protractor-logo.png',
            },
            {
              name: 'Karma - Jasmine',
              points: 70,
              color: '#349B8A',
              bullet:
                'https://avatars3.githubusercontent.com/u/3284117?s=400&v=4',
            },
            {
              name: 'Puppeteer',
              points: 80,
              color: '#01D7A1',
              bullet:
                'https://developers.google.com/web/tools/images/puppeteer.png',
            },
          ],
          valueAxes: [
            {
              maximum: 100,
              minimum: 0,
              axisAlpha: 0,
              dashLength: 4,
              position: 'left',
            },
          ],
          startDuration: 1,
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
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          autoMargins: false,
          categoryField: 'name',
          categoryAxis: {
            axisAlpha: 0,
            gridAlpha: 0,
            inside: true,
            tickLength: 0,
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
      <div id="page-wrapper">
        <div className="content">
          <div className="content-header">
            <div className="header-icon">
              <i className="pe-7s-gleam" />
            </div>
            <div className="header-title">
              <h1>Technologies</h1>
              <small>Technologies</small>
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

export default Technologies
