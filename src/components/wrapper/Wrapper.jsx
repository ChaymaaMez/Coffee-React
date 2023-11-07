import './Wrapper.scss';
 import React from 'react'
 
 const Wrapper = ({className, children}) => {
   return (
     <div className={`wrapper ${className || ""}`}>{children}

     </div>
   )
 }
 
 export default Wrapper