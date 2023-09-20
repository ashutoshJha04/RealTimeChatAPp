import { useStateProvider } from "@/context/StateContext";
import { reducercases } from "@/context/constants";
import { CHECKUSER } from "@/utils/ApiRoutes";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {FcGoogle} from "react-icons/fc"
function login() {
  const router = useRouter();
  const [{userInfo,newUser},dispatch] = useStateProvider();
  useEffect(() => {
    if(userInfo?.id && !newUser) router.push("/");
  }, [userInfo,newUser])
  
  const handleLogin = async() =>{
   
    const provider = new GoogleAuthProvider();
    const {user:{displayName:name,email,photoURL:profileImage}} = await signInWithPopup(firebaseAuth,provider);
    try {
      if(email){
        const {data} = await axios.post(CHECKUSER,{email});
       
        if(!data.status){
          dispatch({
            type:reducercases.SET_NEW_USER_INFO,newUser:true
          })
          dispatch({
            type:reducercases.SET_USER_INFO,
            userInfo:{
              name,email,profileImage,status:""
            }
          })
          router.push('/onboarding');
        }else{
          router.push("/");
          dispatch({
            type:reducercases.SET_USER_INFO,
            userInfo:{
              name:data.data.name,email:data.data.email,profileImage:data.data.profilePicture,status:data.data.about,id:data.data.id
            }
          })
          localStorage.setItem('userInfo', JSON.stringify({ name:data.data.name,email:data.data.email,profileImage:data.data.profilePicture,status:data.data.about,id:data.data.id}));
          
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <>
  <Head>
    <title>Whatsapp - login</title>
  </Head>
  <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
    <div className="sm:flex sm:flex-row flex flex-col  justify-center gap-2 items-center text-white ">
      <div className=" h-40 md:h-60 w-40 md:w-60 relative">
      <Image src={"/whatsapp.gif"} alt="Whatsapp" fill/>
      </div>
      <span className="text-5xl md:text-7xl">Whatsapp</span>
    </div>

    <button className="mt-10 sm:mt-5 flex items-center justify-center gap-7 bg-search-input-container-background p-3 sm:p-4 rounded-xl" onClick={handleLogin}>
      <FcGoogle className="text-4xl"/>
      <span className="text-white text-xl sm:text-2xl">Login with Google</span>
    </button>

  </div>
  </>
}

export default login;
