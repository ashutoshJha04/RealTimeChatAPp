import React, { useEffect, useState } from "react";
import Avatar from "../common/Avatar";
import { MdCall } from "react-icons/md"
import { IoVideocam } from "react-icons/io5"
import { BiSearchAlt2 } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { useStateProvider } from "@/context/StateContext";
import { FaTimes } from "react-icons/fa";
import { reducercases } from "@/context/constants";

function ChatHeader() {
  const [{ currentChatUser, socket },dispatch] = useStateProvider();
  const [searchBar, setsearchBar] = useState(false);
  const [search, setsearch] = useState("");
  const value = null;
 
  
  console.log(search);
  useEffect(() => {
    console.log(socket.current);
  }, [socket])
  useEffect(() => {
    console.log(currentChatUser?.data);

  }, [currentChatUser])
  const handlesearchChanga = (e)=>{
    setsearch(e.target.value);
  }
  const handleSearchClick = () => {
    setsearch("");
    setsearchBar(!searchBar);
  }
  const handleClose = () => {
    if(searchBar === true){
      setsearch("");
      setsearchBar(false);
      dispatch({type:reducercases.SEARCH,value});
   

    };
  }
  useEffect(() => {
   
    dispatch({type:reducercases.SEARCH,search});

  }, [search])
 

  return <div className="h-16 relative px-4 py-3 flex justify-between items-center bg-panel-header-background z-10">
    <div className="flex items-center justify-center gap-6">
      <Avatar type="sm" image={currentChatUser?.profilePicture} />
      <div className="flex flex-col">
        <span className="text-primary-strong">{currentChatUser?.name}</span>
        <span className=" text-secondary text-sm">
          online
        </span>
      </div>

    </div>
    <div className="flex gap-6 ">
      <MdCall
        className=" text-panel-header-icon cursor-pointer text-xl"
      />
      <IoVideocam
        className=" text-panel-header-icon cursor-pointer text-xl"

      />
      <BiSearchAlt2
        className=" text-panel-header-icon cursor-pointer text-xl"
        onClick={handleSearchClick}
      />
      <BsThreeDotsVertical
        className=" text-panel-header-icon cursor-pointer text-xl"

      />

    </div>
    {searchBar && <div className="absolute top-20 bottom-2 right-20 flex justify-around px-2 items-center w-[90] h-12 rounded-md bg-panel-header-background z-10">
      <div><input className="bg-input-background cursor-text bg-transparent focus:outline-none p-1 text-white caret-transparent" type="text" placeholder="Search here" value={search} onChange={(e)=>{handlesearchChanga(e)}} /></div>
      <div className="text-white cursor-pointer" onClick={handleClose}><FaTimes/></div>
      </div>}
  </div>;
}

export default ChatHeader;
