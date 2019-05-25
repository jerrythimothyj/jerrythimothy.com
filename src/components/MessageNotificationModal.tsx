import React from 'react'

const MessageNotificationModal: React.FC = () => 
   (
    <div className="modal fade" id="messageNotificationModal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <p>Hey! there I'm available for freelancing and part time consulting.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )


export default MessageNotificationModal
