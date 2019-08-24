import * as R from 'ramda'
import React, { useEffect, useState } from 'react'
import { fetchBlogs } from '../../services'
import './Blog.scss'

const Blog: React.FC = () => {
  const mapIndexed = R.addIndex(R.map)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetchBlogs()
      setBlogs(response)
    }
    fetchEvents()
  }, [])
  return (
    <div id="page-wrapper" className="blog">
      <div className="content">
        <div className="content-header">
          <div className="header-icon">
            <i className="pe-7s-menu" />
          </div>
          <div className="header-title">
            <h1>Blog</h1>
            <small>Blog</small>
          </div>
        </div>
        <div className="row">
          {mapIndexed((val: any, index) => {
            return (
              <div className="col-sm-12 col-md-4" key={index}>
                <div className="card">
                  <div
                    className="card-header"
                    style={{
                      backgroundImage: `url("${val.image}")`,
                    }}
                  >
                    <div className="card-header-headshot" />
                  </div>
                  <div className="card-content">
                    <div className="card-content-member">
                      <h4 className="m-t-0">{val.title}</h4>
                    </div>
                    <div className="card-content-languages">
                      <div className="card-content-languages-group">
                        <div>
                          <h4>Tags:</h4>
                        </div>
                        <div>
                          <ul>
                            {mapIndexed((val1: any, index1) => {
                              return (
                                <li key={index1}>{`${val1 +
                                  (index1 < val.tags.length - 1 ? ',' : '')}`}</li>
                              )
                            }, val.tags)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="card-footer-message">
                      <a href={val.link} target="_blank">
                        <h4>
                          <i className="fa fa-eye" /> View more
                        </h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          }, blogs)}
        </div>
      </div>
    </div>
  )
}
export default Blog
