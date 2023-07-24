import React from "react"
const Modal = ({onClose}) => {
    return(
        <div className="modal-overlay">
            <button className="modal-close" onClick={() => onClose(false)}>Close</button>
            <p>This is the content of the modal.</p>
        </div>
    )
}

export default Modal
