import React, { useEffect, useRef } from "react";

function ContextMenu({options,cord,contextMenu,setcontextMenu}) {
useEffect(()=>{
  const handleOutsideClick = (e)=>{
    if(e.target.id !== "context-opener"){
      if(contextMenuRef.current && !contextMenuRef.current.contains(e.target)){
        setcontextMenu(false);
        console.log("event run");
      }
    }
  }
  document.addEventListener("click", handleOutsideClick);
  return ()=>{
    document.removeEventListener("click", handleOutsideClick);
  }
},[])
  const contextMenuRef = useRef(null);
  const handleClick = (e,callback)=>{
    e.stopPropagation();
    setcontextMenu(false);
    callback();
  };
return <div ref={contextMenuRef} style={{top:cord.y,left:cord.x}} className={` rounded-md z-99 bg-dropdown-background fixed   shadow-xl]`} >
  <ul>
    {options.map(({name,callback})=>(
      <li key={name} className="px-5 py-3 cursor-pointer hover:bg-background-default-hover" onClick={(e)=>handleClick(e,callback)}><span className="text-white ">{name}</span></li>
    ))}
    
  </ul>
  </div>
}

export default ContextMenu;
