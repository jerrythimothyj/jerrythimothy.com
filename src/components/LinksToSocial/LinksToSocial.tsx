import React from 'react'
import './LinksToSocial.scss'

const LinksToSocial: React.FC = () => (
  <div id="linksToSocial" className="social-widget">
    <ul>
      <li>
        <a href="https://www.facebook.com/jerrythimothyj" target="_blank">
          <div className="fb_inner">
            <i className="fa fa-facebook" />
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jerrythimothyj/" target="_blank">
          <div className="twitter_inner">
            <i className="fa fa-linkedin" />
          </div>
        </a>
      </li>
      <li>
        <a href="https://github.com/jerrythimothyj" target="_blank">
          <div className="g_plus_inner">
            <i className="fa fa-github" />
          </div>
        </a>
      </li>
    </ul>
  </div>
)

export default LinksToSocial
