import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";


function CapturePhoto({hide,setImage}) {

  const videoref = useRef(null);
  useEffect(() => {
    let stream;
    const Startcamera = async()=>{
        stream = await navigator.mediaDevices.getUserMedia({video:true,audio:false});
        videoref.current.srcObject = stream;
    }
    Startcamera();
    return ()=>{
      stream?.getTracks().forEach(track => {
        track.stop();
      });
    }
  }, []);
  
   const capturePhoto = ()=>{
      const canvas = document.createElement("canvas");
      canvas.getContext("2d").drawImage(videoref.current,0,0,300,150);
      setImage(canvas.toDataURL("image/jpeg"));
      hide(false);
   }
  return <div className="h-4/6 absolute left-1/3 top-1/4 w-2/6 bg-gray-900 gap-3 rounded-lg pt-2 flex items-center justify-center">
    <div className="flex flex-col justify-center items-center gap-4 w-full ">
    <div className="pt-2 pr-2 cursor-pointer flex items-end justify-end" onClick={()=>hide(false)}>
        <FaTimes  onClick={()=>hide(false)} className="h-10 w-10"/>
      </div>
      <div className="flex justify-center">
        <video id="video" autoPlay ref={videoref} width={400}></video>
      </div>
        <button className="h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-teal-light p-2 mb-10" onClick={capturePhoto}></button>
    </div>
  </div>
}

export default CapturePhoto;
