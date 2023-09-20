
import Main from "@/components/Main";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function index() {
 
  const router = useRouter();
  const [{userInfo,newUser},dispatch] = useStateProvider();
 
  useEffect(() => {
    if(!userInfo?.id && !newUser) router.push("/login");
   
  }, [userInfo,newUser])

  return <Main/>;
}

export default index;
