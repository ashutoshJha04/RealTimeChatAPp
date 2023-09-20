import React from "react";
import Avatar from "../common/Avatar";
import {useStateProvider} from "@/context/StateContext";
import { reducercases } from "@/context/constants";
function ChatLIstItem({data,isContactPage = false}) {
  const [{userInfo,currentChatUser},dispatch] = useStateProvider();
  const handleContactclick =()=>{
   
      dispatch({type:reducercases.CHANGE_CURRENT_USER,user:{data}});
      dispatch({type:reducercases.SET_ALL_CONTACT_PAGE})
      
    
  };
  return <div className={`flex cursor-pointer items-center hover:bg-background-default-hover`} onClick={handleContactclick}>
    <div className=" min-w-fit px-5 pt-3 pb-1">
      <Avatar type="lg" image={data?.profilePicture} />
    </div>
    <div className="min-h-full flex flex-col justify-center mt-3 pr-2 w-full">
      <div className="flex justify-between">
        <div>
          <span className="text-white">{data?.name}</span>
        </div>
      </div>
      <div className="flex border-b border-conversation-border pb-2 pt-1 pr-2">
      <div className="flex justify-between w-full">
        <span className="text-secondary line-clamp-1 text-sm">{data?.about || "\u00A0"}</span>
      </div>
      </div>
    </div>
  </div>;
}

export default ChatLIstItem;
