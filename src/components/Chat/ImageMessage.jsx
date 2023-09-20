import { useStateProvider } from "@/context/StateContext";
import { HOST } from "@/utils/ApiRoutes";
import { calculateTime } from "@/utils/CalculateTime";
import Image from "next/image";
import React from "react";
import MessageStatus from "../common/MessageStatus";
import axios from "axios";

function ImageMessage({ message }) {
  const [{ currentChatUser, userInfo }] = useStateProvider();
  const handleClick = () => {
    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = `${HOST}/${message.message}`;
    link.download = 'downloaded_image.jpg';
    link.target = '_blanck' // Set the desired filename

    // Simulate a click on the anchor element to start the download
    link.click();
  }
  
  
    const handleDownloadClick = async () => {
      try {
        const imageUrl = `${HOST}/${message.message}`; // Replace with the actual image URL
        const response = await axios.get(imageUrl, { responseType: 'blob' });
  
        if (response.status === 200) {
          const blob = new Blob([response.data]);
          const url = window.URL.createObjectURL(blob);
  
          const a = document.createElement('a');
          a.href = url;
          a.download = 'downloaded-image.jpg'; // Specify the filename
          a.style.display = 'none';
  
          document.body.appendChild(a);
          a.click();
  
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          handleClick();
        } else {
          console.error('Failed to download image');
        }
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    };

  return <div className={` p-1 rounded-lg ${message?.senderId === currentChatUser?.data.id ? " bg-incoming-background" : "bg-outgoing-background"}`}>
    <div className="relative">
      <img src={`${HOST}/${message.message}`} className="rounded-lg" alt="asset"  onClick={handleDownloadClick} height={300} width={300} />
      <div className="absolute bottom-1 right-1 flex items-end gap-1">
        <span className=" text-bubble-meta text-[11px] pt-1 min-w-fit">
          {
            calculateTime(message.createdAt)
          }
        </span>
        <span className=" text-bubble-meta">
          {
            message?.senderId === userInfo?.id && <MessageStatus messageStatus={message.messageStatus} />
          }
        </span>
      </div>
    </div>
  </div>;
}

export default ImageMessage;
