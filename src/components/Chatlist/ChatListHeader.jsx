'use client'
import React, { useEffect, useState } from "react";
import Avatar from "../common/Avatar";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/router";
import {BsFillChatLeftTextFill, BsThreeDotsVertical} from "react-icons/bs"
import { reducercases } from "@/context/constants";
function ChatListHeader() {
  const [user, setuser] = useState("");
  const [{userInfo},dispatch] = useStateProvider();
  const router = useRouter();
  const handleallcontact = ()=>{
    dispatch({type:reducercases.SET_ALL_CONTACT_PAGE});
  }
 useEffect(() => {
  const data = JSON.parse(localStorage.getItem("userInfo"));
  if (!data) {
    router.push("/login");
  }
  setuser(data);
 }, [])
 
 
  
  return <div className="h-16 px-4 py-3 flex justify-between items-center">
    <div className="cursor-pointer">
      <Avatar type="sm" image={user?.profileImage} name={user?.name} />
    </div>
    <div className="flex gap-6">
      <BsFillChatLeftTextFill
      className=" text-panel-header-icon cursor-pointer text-xl" title="New chat"
      onClick={handleallcontact}
      />
      <>
      
      <BsThreeDotsVertical 
      className=" text-panel-header-icon cursor-pointer text-xl"
      title="Menu"
      />
      </>
    </div>
    
    
  </div>;
}



export default ChatListHeader;
