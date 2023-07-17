
const Modal = ({onClose}) => {
    return(
        <div className="model-overlay">
            <button className="model-close" onClick={() => onClose(false)}>Close</button>
            <p>This is the content of the modal.</p>
        </div>
    )
}

export default Modal