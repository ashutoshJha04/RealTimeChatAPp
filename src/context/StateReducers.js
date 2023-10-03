import { useState } from "react";
import { reducercases } from "./constants";

const data = ()=>{
    try {
        const localdata = JSON.parse(localStorage.getItem("userInfo"));
        return localdata;
    } catch (error) {
        
    }
}

export const initialState = {
    userInfo: data(),
    newUser:false,
    contactsPage:false,
    currentChatUser:undefined,
    messages:[],
    socket:undefined,
    search:undefined,
    userContacts:[],
    onlineusers:[],
    filteredContacts:[],
    contactSearch:undefined,
    videoCall:undefined,
    voiceCall:undefined,
    incomingVoiceCall:undefined,
    incomingVideoCall:undefined,
}

export const reducer = (state,action)=>{
    switch (action.type) {
        case reducercases.SET_USER_INFO:
            return {
                ...state,
                userInfo:action.userInfo,
            }   
        
        case reducercases.SET_NEW_USER_INFO:
            return {
                ...state,
                newUser:action.newUser,
            }
        case reducercases.SET_ALL_CONTACT_PAGE:
            return{
                ...state,
                contactsPage:!state.contactsPage,
            }
        case reducercases.CHANGE_CURRENT_USER:
            return{
                ...state,
                currentChatUser:action.user,
            }
        case reducercases.SET_MESSAGES:
            return{
                ...state,
                messages:action.messages
            }
        case reducercases.SET_SOCKET:
            return{
                ...state,
                socket:action.socket,
            }
        case reducercases.ADD_MESSAGE:
            return{
                ...state,
                messages:[...state.messages,action.newMessage]
            }
        case reducercases.SEARCH:
            return{
                ...state,
                search:action.search
            }
        case reducercases.SET_USER_CONTACTS:
            return{
                ...state,
                userContacts:action.userContacts,
            }
        case reducercases.SET_ONLINE_USERS:
            return{
                ...state,
                onlineusers:action.onlineusers
            }
        case reducercases.SET_CONTACTS_SEARCH:{
            const filteredContacts = state.userContacts.filter((contact)=> contact.name.toLowerCase().includes(action.contactSearch.toLowerCase()));
            return {
                ...state,
                contactSearch:action.contactSearch,
                filteredContacts
            }
        }
        case reducercases.SET_VIDEO_CALL:
            return{
                ...state,
                videoCall:action.videoCall,
            };
        case reducercases.SET_VOICE_CALL:
            return{
                ...state,
                voiceCall:action.voiceCall,
            }
        
        default:
            return state;
    }
}