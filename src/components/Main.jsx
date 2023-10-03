import React, { useEffect, useRef, useState } from "react";
import ChatList from "./Chatlist/ChatList";
import Empty from "./Empty";
import Chat from "./Chat/Chat";
import { useStateProvider } from "@/context/StateContext";
import axios from "axios";
import { GET_ALL_MESSAGES, HOST } from "@/utils/ApiRoutes";
import { reducercases } from "@/context/constants";
import { io } from "socket.io-client";

function Main() {
  const [{userInfo,currentChatUser},dispatch] = useStateProvider();
  const [socketEvent, setsocketEvent] = useState(false);
  const socket = useRef();
  useEffect(() => {
    
  if(userInfo){
    socket.current = io(HOST);
    socket.current.emit("add-user",userInfo.id);
    dispatch({type:reducercases.SET_SOCKET,socket});
  }
    
  }, [userInfo])
  
  useEffect(()=>{
    if(socket.current&&!socketEvent){
      socket.current.on("msg-recieve",(data)=>{
        dispatch({type:reducercases.ADD_MESSAGE,
        newMessage:{
          ...data.message,
        }
        })
      })
      setsocketEvent(true)
    }
  },[socket.current]);

  useEffect(()=>{
    const getMessages = async ()=>{
      const {data:{messages}} = await axios.get(`${GET_ALL_MESSAGES}/${userInfo?.id}/${currentChatUser?.id}`);
     
      dispatch({type:reducercases.SET_MESSAGES,messages});
    }
    if (currentChatUser?.id) {
      getMessages();
      console.log("hi");
    }
  },[currentChatUser]);

  return <>
  
  <div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden">
      <ChatList />
    {
      currentChatUser ? <Chat/> : <Empty/>
    }

  </div>
  
  </>;
}

export default Main;
