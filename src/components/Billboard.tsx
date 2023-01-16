import React from "react";

const Billboard = ({title, subtitle}) => { //the props property the call it with .theNameYouGaveIt
    //React.Fragment need when passing props
    // shorthand <>  </>
    return ( 
        <React.Fragment> 
            <h5>{title? title : 'no title'}</h5>
            <p>{subtitle? subtitle : 'no subtitle'}</p>
        </React.Fragment>
     );
}
 
export default Billboard;