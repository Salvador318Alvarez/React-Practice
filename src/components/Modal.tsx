export default function Modal({children}) { //or props with props.children down there
    return (
      <div className="modal-backdrop">
           <div className="modal"> 
              {children}  
          </div>      
      </div>
    )
  }