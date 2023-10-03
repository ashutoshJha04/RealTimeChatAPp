import { useStateProvider } from "@/context/StateContext";
import { calculateTime } from "@/utils/CalculateTime";
import React from "react";
import MessageStatus from "../common/MessageStatus";
import ImageMessage from "./ImageMessage";

function ChatContainer() {
  const [{ messages, currentChatUser, userInfo, search }] = useStateProvider();
  console.log(search);

  // Function to highlight text containing the search term
  function highlightText(text, searchTerm) {
    if (!searchTerm) {
      return text; // If search term is empty, return the original text
    }
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, index) =>
      part.match(regex) ? <span key={index} className=" text-red-600">{part}</span> : part
    );
  }

  return (
    <div className="h-[80vh] w-full relative flex-grow overflow-auto custom-scrollbar">
      <div className="flex w-full ">
        <div className="flex flex-col justify-end w-full gap-1 overflow-auto custom-scrollbar">
          {messages.map((message, index) => (
            <div
              key={message?.id}
              className={`px-4 flex ${
                message?.senderId === currentChatUser?.id
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              {message.type === "text" && (
                <div
                  className={`text-white my-2 px-2 py-[5px] text-sm rounded-md flex gap-2 items-end max-w-[45%] ${
                    message?.senderId === currentChatUser?.id
                      ? "bg-incoming-background"
                      : "bg-outgoing-background"
                  }`}
                >
                  <span className="break-all py-1">
                    {highlightText(message?.message, search)}
                  </span>
                  <div className="flex gap-1 items-end">
                    <span className="text-bubble-meta text-[11px] pt-1 min-w-fit">
                      {calculateTime(message.createdAt)}
                    </span>
                    <span>
                      {message?.senderId === userInfo?.id && (
                        <MessageStatus messageStatus={message.messageStatus} />
                      )}
                    </span>
                  </div>
                </div>
              )}
              {message.type === "image" && <ImageMessage message={message} />}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-chat-background bg-fixed h-full w-full opacity-5 fixed left-0 top-0 z-[-10]"></div>
    </div>
  );
}

export default ChatContainer;
