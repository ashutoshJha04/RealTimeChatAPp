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
    socket:undefined
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
        default:
            return state;
    }
}