import Image from "next/image";
import React, { lazy, useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa"
import ContextMenu from "./ContextMenu";
import PhotoPicker from "./PhotoPicker";
import PhotoLibrary from "./PhotoLibrary.jsx";
import CapturePhoto from "./CapturePhoto";
function Avatar({ type, image, setImage , name }) {
  const [hover, sethover] = useState(false)
  const [contextmenuvisible, setcontextmenuvisible] = useState(false);
  const [grabphoto, setgrabphoto] = useState(false);
  const [Showphotolibrary, setShowphotolibrary] = useState(false)
  const [showCapturePhoto, setshowCapturePhoto] = useState(false)
  const contextmenuoptions = [
    { name: "Take Photo", callback: () => {
      setshowCapturePhoto(true);
     } },
   { name: "Choose from library", callback: () => { 

    setShowphotolibrary(true);

   } },
    { name: "Upload Photo", callback: () => { 
      setgrabphoto(true);
    } }, 
    { name: "Remove Photo", callback: () => {setImage("/default_avatar.png"); } }
  ];
  const photoPickerChange = async(e)=>{
    const file =e.target.files[0];
    const reader = new FileReader();
    const data = document.createElement("img");
    reader.onload = (e)=>{
      data.src = e.target.result;
      data.setAttribute("data-src", e.target.result);
      
    }
      reader.readAsDataURL(file);
      setTimeout(()=>{
        setImage(data.src);

      },100);
  };
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
  
    
  }, [grabphoto])
  
  const [contextmenuCord, setcontextmenuCord] = useState({
    x: 0,
    y: 0,
  });
  const showContextmenu = (e) => {
    e.preventDefault();
    setcontextmenuvisible(true);
    setcontextmenuCord({ x: e.pageX, y: e.pageY });

  }
  return <>
    <div className="flex items-center justify-center">
      {type === "sm" && (
        <div className="relative h-10 w-10">
          <Image src={image} title={name} alt="avatar" className="rounded-full" fill />
        </div>
      )}
      {type === "lg" && (
        <div className="relative h-14 w-14">
          <Image src={image} alt="avatar" className="rounded-full" fill />
        </div>
      )}
      {type === "xl" && (
        <div className="relative cursor-pointer z-0" id="context-opener" onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}>
          <div onClick={(e) => showContextmenu(e)} id="context-opener" className={`z-10 bg-photopicker-overlay-background h-[${100}px] w-[${100}px] absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 ${hover ? "visible" : "hidden"}`}>
            <FaCamera onClick={(e) => showContextmenu(e)} className=" text-lg sm:text-2xl text-white" id="context-opener" />
            <span id="context-opener" className="text-sm sm:text-2xl" onClick={(e) => showContextmenu(e)}>
              Change Profile Photo
            </span>
          </div>
          <div id="context-opener" className=" flex items-center justify-center h-[100px] w-[100px]">
            <Image src={image} alt="avatar" id="context-opener" className="rounded-full overflow-hidden" fill />
          </div>
        </div>
      )}
    </div>
    {contextmenuvisible && <ContextMenu options={contextmenuoptions} cord={contextmenuCord} contextMenu={contextmenuvisible} setcontextMenu={setcontextmenuvisible} />}
    {grabphoto && <PhotoPicker onChange={photoPickerChange} />}
    {Showphotolibrary && (<PhotoLibrary setImage={setImage} hidePhotoLibrary={setShowphotolibrary} />)}
    {showCapturePhoto && <CapturePhoto setImage={setImage} hide={setshowCapturePhoto} />}
  </>
}

export default Avatar;
