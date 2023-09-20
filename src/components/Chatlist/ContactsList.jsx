import { useStateProvider } from "@/context/StateContext";
import { reducercases } from "@/context/constants";
import { GET_ALL_CONTACTS } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiSearchAlt2 } from "react-icons/bi";
import ChatList from "./ChatList";
import ChatLIstItem from "./ChatLIstItem";

function ContactsList() {
  const [allcontacts, setallcontacts] = useState({});
  const [{},dispatch] = useStateProvider();
  useEffect(()=>{
    
    const getDetails = async()=>{
      try {
        const data = await axios.get(GET_ALL_CONTACTS);
        setallcontacts(data.data.users);
      
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  },[])
  return <div className="h-full flex flex-col">
    <div className="h-24 flex items-end px-3 py-4
    ">
      <div className="flex items-center gap-12 text-white">
        <BiArrowBack
        className="cursor-pointer text-xl"
        onClick={()=>dispatch({type:reducercases.SET_ALL_CONTACT_PAGE})} 
        />
        <span>New chat</span>
      </div>
    </div>
   <div className=" bg-search-input-container-background h-full flex-auto overflow-auto custom-scrollbar">
    <div className="flex py-3 items-center gap-3 h-14 px-4">
    <div className=" bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow">
        <div>
          <BiSearchAlt2
      className=" text-panel-header-icon cursor-pointer text-xl" title="Search"
          
          />
        </div>
        <div>
          <input type="text" name="Searchbar" placeholder="Search contacts" className=" bg-transparent text-sm focus:outline-none text-white w-full" />
        </div>
      </div>
    </div>
    {Object.entries(allcontacts).map(([initletter,users])=>{
      return (
        <div key = {Date.now()+initletter}>
          <div className=" text-teal-light pl-10 py-5">
            {initletter}
          </div>
          {
            users.map(contact=>{
              return (
                <ChatLIstItem
                data={contact}
                isContactPage={true}
                key={contact.id}
                />
              )
            })
          }
        </div>
      )
    })}
   </div>
  </div>;
}

export default ContactsList;
