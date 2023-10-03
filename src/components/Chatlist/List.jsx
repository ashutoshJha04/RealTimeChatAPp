import { useStateProvider } from "@/context/StateContext";
import { reducercases } from "@/context/constants";
import { GET_INITIAL_CONTACTS } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect } from "react";
import ChatLIstItem from "./ChatLIstItem";

function List() {
  const [{userInfo,userContacts,filteredContacts},dispatch] = useStateProvider();
  useEffect(() => {
    const getContacts = async()=>{
      try {
        const {data:{Users,onlineUsers}} = await axios(`${GET_INITIAL_CONTACTS}/${userInfo?.id}`);
        dispatch({type:reducercases.SET_USER_CONTACTS,userContacts: Users});
        dispatch({type:reducercases.SET_ONLINE_USERS,onlineUsers});

      } catch (error) {
        console.log(error);
      }
    }
    if(userInfo?.id){

      getContacts();
    }
  }, [userInfo]);
  
  return <div className=" bg-search-input-container-background flex-auto overflow-auto max-h-full custom-scrollbar ">
      {
        filteredContacts && filteredContacts.length>0 ? (filteredContacts.map((contact)=> <ChatLIstItem data={contact} key={contact.id} />)):(userContacts.map((contact)=> <ChatLIstItem data={contact} key={contact.id} />))
      }
     
  </div>;
}

export default List;
