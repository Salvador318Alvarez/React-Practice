export default function Modal({children, handleClose}) { //or props with props.children down there
    return (
      <div className="modal-backdrop">
           <div className="modal"> 
              {children}  
              <button onClick={handleClose}>close</button>
          </div>     
   
          {/* handle close is defined in the parent component */}
      </div>
    )
  }