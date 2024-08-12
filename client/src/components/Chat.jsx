import React from "react";
import Typewriter from "typewriter-effect";
const Chat = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center flex-col gap-7">
        <div className="py-10 w-[70%] h-auto">
          <img
            src="./farmer_ai.jpg"
            alt=""
            className="w-[25vw] h-[40vh] border-1 rounded-3xl m-auto"
          />
          <h1 className="chat-h flex justify-center items-center gap-3 text-[#8ba17f] text-[2rem]  font-semibold">
            Here's your Chat Buddy Ask Me Anything !{" "}
            <img src="./leaf_green.svg" alt="" className="h-[4vh] w-[3vw]" />
          </h1>
          <div className="chat-h flex justify-center items-center text-[#8ba17f] text-[2rem] font-semibold">
            <h1>Get to know About...</h1>
            <Typewriter
              options={{
                strings: [
                  ,
                  "Upload Image",
                  "Plant Info",
                  "Medicine Info",
                  "Fertilizer Info",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="bg-white border-2 rounded-xl p-4">chat</div>
      </div>
    </>
  );
};

export default Chat;
