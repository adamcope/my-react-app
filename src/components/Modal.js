import "./Modal.css";
function Modal({ children, handleClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
      <button onClick={handleClose}>close</button>
      </div>
    </div>
  );
}

export default Modal;
