import ReactDOM  from "react-dom"

export default function Modal({children, handleClose}) { //or props with props.children down there
    return ReactDOM.createPortal(( //to move it's place in the html
      <div className="modal-backdrop">
           <div className="modal"> 
              {children}  
              <button onClick={handleClose}>close</button>
          </div>     
          {/* handle close is defined in the parent component */}
      </div>
    ), document.body /*moves it to the bottom of the body tag */)
  }