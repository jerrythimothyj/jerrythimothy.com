import React, { useState } from 'react'
import { getMessageNotificationCount, setMessageNotificationCount } from '../services'

const MessageNotification: React.FC = () => {
  const notificationCount = getMessageNotificationCount()

  const [notiCount, setRead] = useState(notificationCount)

  const markAsRead = () => {
    setMessageNotificationCount(0)
    setRead(getMessageNotificationCount())
  }

  return (
    <li className="dropdown" onClick={markAsRead}>
      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
        <i className="material-icons">chat</i>
        {notiCount > 0 && <span className="label label-danger">{notiCount}</span>}
      </a>
      <ul className="dropdown-menu dropdown-messages">
        <li className="rad-dropmenu-header">
          <a href="#">New Messages</a>
        </li>
        <li>
          <a href="/pricing" className="rad-content">
            <div className="inbox-item">
              <div className="inbox-item-img">
                <img
                  src="https://scontent.fmaa1-3.fna.fbcdn.net/v/t1.0-9/23795105_1589920687731844_1829251260142633526_n.jpg?_nc_cat=101&_nc_ht=scontent.fmaa1-3.fna&oh=c4ee6c17317473112117c2b2dbf67d17&oe=5D9C3499"
                  className="img-circle"
                  alt=""
                />
              </div>
              <strong className="inbox-item-author">Jerry Thimothy</strong>
              <span className="inbox-item-date">-13:40 PM</span>
              <p className="inbox-item-text">Hey! there I'm available...</p>
              <span className="profile-status available pull-right" />
            </div>
          </a>
        </li>
      </ul>
    </li>
  )
}

export default MessageNotification
