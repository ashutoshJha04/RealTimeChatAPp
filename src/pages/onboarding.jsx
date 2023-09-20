import Avatar from "@/components/common/Avatar";
import Input from "@/components/common/Input";
import { useStateProvider } from "@/context/StateContext";
import { reducercases } from "@/context/constants";
import { ONBOARD_USER_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function onboarding() {
  const [{userInfo,newUser},dispatch] = useStateProvider();
  const router = useRouter();
  const [name, setname] = useState(userInfo?.name || "");
  const [about, setabout] = useState("");
  const [image, setimage] = useState("/default_avatar.png");
useEffect(() => {
  if(!newUser && !userInfo?.email ){
    router.push("/login");

  }
  else if(!newUser && userInfo?.email){
    router.push("/");
  } 
}, [userInfo,newUser,router])

  const onboardUser = async()=>{
    if (validateDetails) {
      const email = userInfo.email;
      try {
        const {data} = await axios.post(ONBOARD_USER_ROUTE,{
          name,about,email,image
        });
        if(data.status){
          dispatch({
            type:reducercases.SET_NEW_USER_INFO,newUser:true
          })
          dispatch({
            type:reducercases.SET_USER_INFO,
            userInfo:{
              name,email,profileImage:image,status:about
            }
          })
          
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const validateDetails = ()=>{
    if (name.length<3) {
      return false;
    }
    return true;
  }
  return <>

  <Head>
    <title>
      Whatapp - registration
    </title>
  </Head>
  
  <div className=" bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
    <div className="sm:flex sm:flex-row flex flex-col items-center gap-2 justify-center">

     <div className=" h-40 md:h-60 w-40 md:w-60 relative">
      <Image src={"/whatsapp.gif"} alt="Whatsapp" fill/>
      </div>

      <span className="text-4xl md:text-7xl">Whatsapp</span>
    </div>
    <h2 className="text-lg sm:text-3xl mt-2 sm:mt-0  ">Create your profile</h2>
    <div className="sm:flex sm:flex-row flex flex-col-reverse gap-0 sm:gap-5 mt-2 sm:mt-6">
      <div className="flex justify-center mt-5 gap-6 flex-col items-center">
        <Input name="Display name" state={name} setState={setname} Label/>
        <Input name="About" state={about} setState={setabout} Label/>
        <div className="flex items-center justify-center" onClick={onboardUser}>
          <button className="flex items-center justify-center gap-3 bg-search-input-container-background p-4 rounded-lg" onClick={onboardUser}>Create Profile 😊</button>
        </div>
      </div>
      <div>
        <Avatar type="xl" image={image} setImage={setimage} className=""/>
      </div>
    </div>
 
 
  </div>
  
  </>
}

export default onboarding;
