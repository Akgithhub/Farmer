import React, { useState } from "react";

const Log = ({ setUser }) => {
  const [signUP, setSignUP] = useState("signup");
  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevents form submission
    setSignUP("login");
  };

  const handleSignupClick = (e) => {
    e.preventDefault(); // Prevents form submission
    setSignUP("signup");
  };
  return (
    <div className="form w-[20vw] h-[30vh] bg-[white] flex justify-center items-center gap-6 flex-col">
      <form>
        <div>
          <button
            onClick={() => {
              setUser(false);
            }}
            className="absolute top-0 right-0 text-black text-[1.5rem] p-6 font-semibold"
          >
            X
          </button>
        </div>
        <div>
          {signUP === "signup" ? (
            <>
              <form className="flex flex-col justify-center items-center pt-4">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="border-[#8ba17f] border-2 m-2 rounded-lg py-2 px-5"
                />
                <input
                  type="text"
                  placeholder="Enter your Email"
                  c
                  className="border-[#8ba17f] border-2 m-2 rounded-lg py-2 px-5"
                />
                <input
                  type="text"
                  placeholder="Enter your Password"
                  className="border-[#8ba17f] border-2 m-2 rounded-lg py-2 px-5"
                />
                <button className="text-[1.2rem] border-2 border-[#8ba17f] px-2 rounded-md bg-[#b1bea9] mt-3 mb-4">
                  Submit
                </button>
              </form>
            </>
          ) : (
            <>
              <form className="flex flex-col justify-center items-center pt-4">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="border-[#8ba17f] border-2 m-2 rounded-lg py-2 px-5"
                />
                <input
                  type="text"
                  placeholder="Enter your Password"
                  className="border-[#8ba17f] border-2 m-2 rounded-lg py-2 px-5"
                />
                <button className="text-[1.2rem] border-2 border-[#8ba17f] px-2 rounded-md bg-[#b1bea9] mt-3 mb-4">
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
        <div>
          <p>
            {signUP === "signup" ? (
              <>
                <div className="flex gap-4">
                  <p>Already have an account?</p>
                  <button
                    onClick={handleLoginClick}
                    className="text-[#55634e] font-bold"
                  >
                    Login
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-4">
                  <p>Don't have an account?</p>
                  <button
                    onClick={handleSignupClick}
                    className="text-[#55634e] font-bold"
                  >
                    Signup
                  </button>
                </div>
              </>
            )}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Log;
