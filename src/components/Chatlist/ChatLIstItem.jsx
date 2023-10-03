import React from "react";
import Avatar from "../common/Avatar";
import {useStateProvider} from "@/context/StateContext";
import { reducercases } from "@/context/constants";
import { reducer } from "@/context/StateReducers";
import { calculateTime } from "@/utils/CalculateTime";
import MessageStatus from "../common/MessageStatus";
import { FaCamera } from "react-icons/fa";
function ChatLIstItem({data,isContactPage = false}) {
  const [{userInfo,currentChatUser},dispatch] = useStateProvider();
  
  const handleContactclick =()=>{
    if(!isContactPage){
      dispatch({
        type:reducercases.CHANGE_CURRENT_USER,
        user:{
          name:data.name,
          about:data.about,
          profilePicture:data.profilePicture,
          email:data.email,
          id:userInfo.id === data.senderId ? data.recieverId : data.senderId,
        },
      })

    }else{
    
      dispatch({type:reducercases.CHANGE_CURRENT_USER,user:{...data}});
      dispatch({type:reducercases.SET_ALL_CONTACT_PAGE})
    }

    
      
      
    
  };
  return <div className={`flex cursor-pointer items-center hover:bg-background-default-hover`} onClick={handleContactclick}>
    <div className=" min-w-fit px-5 pt-3 pb-1 rounded-full">
      <Avatar type="lg" image={data?.profilePicture} />
    </div>
    <div className="min-h-full flex flex-col justify-center mt-3 pr-2 w-full">
      <div className="flex justify-between">
        <div>
          <span className="text-white">{data?.name}</span>
        </div>
        {
          !isContactPage && (
            <div className={`${!data?.totalunreadmsg > 0 ? "text-secondary" : "text-icon-green"} text-sm`}>
              {calculateTime(data.createdAt)}
            </div>
          )
        }
      </div>
      <div className="flex border-b border-conversation-border pb-2 pt-1 pr-2">
      <div className="flex justify-between w-full">
        
        <span className="text-secondary line-clamp-1 text-sm">{isContactPage ? data?.about || "\u00A0" : (<div className="flex items-center gap-1 max-w-[200px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[200px] xl:max-w-[300px]">
          {
            data?.senderId === userInfo?.id && <MessageStatus messageStatus={data?.messageStatus}/>
          }
          {
            data?.type === "text" && <span className="truncated">{data?.message}</span>
          }
          {
            data?.type === "image" && <span className="flex gap-1 items-center">
              <FaCamera className=" text-panel-header-icon"/>
              Image
            </span>
          }
          </div>)}</span>
          {
            data.totalunreadmsg > 0 && <span className=" bg-icon-green px-[5px] rounded-full text-sm">{data?.totalunreadmsg}</span>
          }
      </div>
      </div>
    </div>
  </div>;
}

export default ChatLIstItem;
