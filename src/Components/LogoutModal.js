import React,{useContext} from 'react'
import NoteContext from '../Contexts/notes/NoteContext'

const LogoutModal = props => {
    const contextProps = useContext(NoteContext)
  return (
    <>
    <div className="modal fade" id='LogoutModal' tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Are you sure you want to logout</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-prime" data-bs-dismiss="modal" onClick={contextProps.logout}>Confirm</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}


export default LogoutModal