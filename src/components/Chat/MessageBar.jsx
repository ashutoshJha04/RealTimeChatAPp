import { useStateProvider } from "@/context/StateContext";
import { reducercases } from "@/context/constants";
import { ADD_IMAGE_MESSAGE, ADD_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import {ImAttachment} from "react-icons/im"
import { MdSend } from "react-icons/md";
import EmojiPicker from "emoji-picker-react"
import PhotoPicker from "../common/PhotoPicker";
function MessageBar() {
  const [{currentChatUser,userInfo,socket},dispatch] = useStateProvider();
  const [message, setmessage] = useState("");
  const [showemojiPicker, setshowemojiPicker] = useState(false);
  const [grabphoto, setgrabphoto] = useState(false);

  const emojiPickerRef = useRef(null);

  useEffect(() => {
    if(grabphoto){
      const data = document.getElementById("photo-picker");
      data.click();
      document.body.onfocus =(e)=>{
        setTimeout(() => {
          setgrabphoto(false);
        }, 1000);
      }
    }
  
    
  }, [grabphoto]);

  const photoPickerChange = async(e)=>{
   try {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image",file);
    const response = await axios.post(ADD_IMAGE_MESSAGE,formData,{headers:{
      "Content-Type":"multipart/form-data",
    },
    params:{
      from:userInfo.id,
      to:currentChatUser?.id
    }
  })

  if(response.status===201){
    socket.current.emit("send-msg",{
      to:currentChatUser?.id,
      from:userInfo?.id,
      message:response.data.message,
    });
   dispatch({
    type:reducercases.ADD_MESSAGE,
    newMessage:{
      ...response.data.message,
    },
    fromSelf:true
   })
  }

   } catch (error) {
    console.log(error);
   }
  };
  useEffect((event) => {
    const handleoutsideClick = (event)=>{
      if (event.target.id !== "emoji-opener") {
        if(emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)){
          setshowemojiPicker(false);
        }
      }
    }
  document.addEventListener('click',handleoutsideClick);
  return ()=>{
    document.removeEventListener('click',handleoutsideClick);
  }
    
  }, [])
  
  const handleemojimodel = ()=>{
    setshowemojiPicker(!showemojiPicker);
  }
  const handleemojiClick = (emoji)=>{
    setmessage((prev)=>(prev+=emoji.emoji));
  }
  const sendMsg = async()=>{
   try {
    const {data} = await axios.post(ADD_MESSAGE_ROUTE,{
      to:currentChatUser?.id,
      from:userInfo?.id,
      message
    }).then(console.log("sent successfully"))
    socket.current.emit("send-msg",{
      to:currentChatUser?.id,
      from:userInfo?.id,
      message:data.message,
    });
   dispatch({
    type:reducercases.ADD_MESSAGE,
    newMessage:{
      ...data.message,
    },
    fromSelf:true
   })
    setmessage("");
   } catch (error) {
    console.log(error);
   }
  }
  return <div className=" bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
    <>
    <div className="flex gap-6">
      <BsEmojiSmile
       className=" text-panel-header-icon cursor-pointer text-xl" title="Emoji" id="emoji-opener" onClick={handleemojimodel}
      />
      {
        showemojiPicker && <div className="absolute bottom-24 left-14 z-40" ref={emojiPickerRef}>
          <EmojiPicker onEmojiClick={handleemojiClick} theme="dark" />
        </div>
      }
      <ImAttachment onClick={()=>{setgrabphoto(true)}} className=" text-panel-header-icon cursor-pointer text-xl" title="Attach File" />
    </div>
    <div className="w-full rounded-lg h-10 flex items-center">
      <input type="text" placeholder="Type your message" onChange={(e)=>setmessage(e.target.value)} value={message} className=" bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full" />
    </div>
    <div className="flex w-10 items-center justify-center ">
      <button>
        <MdSend className=" text-panel-header-icon cursor-pointer text-xl" title="Send message" onClick={sendMsg}/>
        {/* <FaMicrophone className=" text-panel-header-icon cursor-pointer text-xl" title="Record"/> */}
      </button>
    </div>
    </>
    {grabphoto && <PhotoPicker onChange={photoPickerChange} />}

  </div>;
}

export default MessageBar;
