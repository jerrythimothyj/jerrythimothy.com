import classNames from 'classnames'
import * as R from 'ramda'
import React, { useEffect, useState } from 'react'
import { fetchUdemyCertificates } from '../services'

const Learning: React.FC = () => {
  const mapIndexed = R.addIndex(R.map)
  const [udemyCertificates, setUdemyCertificates] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetchUdemyCertificates()
      setUdemyCertificates(response)
    }
    fetchEvents()
  }, [])
  return (
    <div id="page-wrapper">
      <div className="content">
        <div className="content-header">
          <div className="header-icon">
            <i className="pe-7s-sun" />
          </div>
          <div className="header-title">
            <h1>Learning</h1>
            <small>Learning</small>
          </div>
        </div>
        <div className="row">
          {mapIndexed((val: any, index) => {
            console.log('val=', val)
            return (
              <div className="col-sm-4" key={index}>
                <div className="panel panel-bd">
                  <div className="panel-body">
                    <div id={`carousel-${index}`} className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        {mapIndexed((innerVal: any, innerIndex) => {
                          return (
                            <li
                              data-target={`#carousel-${innerIndex}`}
                              data-slide-to={innerIndex}
                              className={classNames({ active: innerIndex === 0 })}
                              key={innerIndex}
                            />
                          )
                        }, val)}
                      </ol>

                      <div className="carousel-inner" role="listbox">
                        {mapIndexed((innerVal: any, innerIndex) => {
                          return (
                            <div
                              className={classNames('item', { active: innerIndex === 0 })}
                              key={innerIndex}
                            >
                              <img src={innerVal} alt="..." />
                            </div>
                          )
                        }, val)}
                      </div>

                      <a
                        className="left carousel-control"
                        href={`#carousel-${index}`}
                        role="button"
                        data-slide="prev"
                      >
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="right carousel-control"
                        href={`#carousel-${index}`}
                        role="button"
                        data-slide="next"
                      >
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          }, udemyCertificates)}
        </div>
      </div>
    </div>
  )
}

export default Learning
