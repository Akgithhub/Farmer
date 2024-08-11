import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Typewriter from "typewriter-effect";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function App() {
  const parallax = useRef(null);

  return (
    <>
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "white" }}
          />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />

          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <img
              src="/vegi_leaf.svg"
              style={{ width: "15%", marginLeft: "70%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer>

          {/* <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer> */}

          {/* <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer> */}

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <img src={url("earth")} style={{ width: "60%" }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
              // backgroundImage: url("clients", true),
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="flex flex-col justify-center items-center mt-[50vh]">
              <div className="flex justify-center items-center">
                <div className="text-white pl-[10vw]">
                  <h1 className="text-[#8ba17f] text-[82px] font-bold">
                    <Typewriter
                      options={{
                        strings: ["Welcome to Farm Buzz !"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>

                  <br />
                  <br />
                  <p className="home-p text-white w-[40%] text-[1rem] leading-10">
                    Farm Buzz connects farmers with the latest trends and
                    innovations in agriculture. <br /> Explore our resources for
                    cutting-edge farming techniques, industry news, and expert
                    advice to boost your productivity and sustainability.
                    Whether you're a seasoned farmer or just starting out, Farm
                    Buzz is here to support your journey toward agricultural
                    excellence.
                  </p>
                </div>

                <img
                  src="./vegi_leaf2.svg"
                  style={{ width: "20%" }}
                  className="pr-[10vw]"
                />
              </div>
              <div className="text-white flex flex-col justify-center items-center font-extrabold text-[3rem] pt-[20vh] w-[50%] m-auto gap-3">
                <h1>
                  <strong className="text-[#8ba17f] text-[4rem]">
                    {" "}
                    Farm Buzz
                  </strong>{" "}
                  is your go-to platform for all things agriculture.
                </h1>

                <hr className="w-[80%] bg-white" />
                <br />
                <h1>From crop management to sustainable farming techniques.</h1>

                <hr className="w-[80%] bg-white" />
                <br />
                <h1>Join our community and stay ahead</h1>

                <hr className="w-[80%] bg-white" />
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="chatbot flex justify-center items-center gap-6 flex-col text-[2rem] font-bold">
              <div>Chat With the ChatBot & Upload Images.</div>
              <hr className="w-[80%] bg-black" />
              <br />
              <div>
                Upload Images and photos with others for better understanding.
              </div>
              <hr className="w-[80%] bg-black" />
              <br />
              <div>Get new Experience with Farm Buzz.</div>
            </div>
            {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <img src="/leaf.svg" style={{ width: "10%" }} /> */}
            <div className="flex flex-row justify-center items-center">
              <h1 className="last-p text-white text-[3rem] font-bold">
                Access The Farm Buzz Throughout the Globe !
                <Typewriter
                  options={{
                    strings: ["ChatBot...", "Images...", "Community..."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
      
    </>
  );
}
