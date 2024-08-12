import React, { useState } from "react";

const Log = ({ setUser }) => {
  const [signUP, setSignUP] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitClick = (e) => {
    e.preventDefault(); // Prevents form submission
    // Handle form submission logic here
    const data = {
      name,
      email,
      password,
    };
    console.log(data);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSignUpClick = () => {
    setSignUP("signup");
    // Clear inputs when switching to signup
    setEmail("");
    setPassword("");
  };

  const handleLoginClick = () => {
    setSignUP("login");
    // Clear inputs when switching to login
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form w-[20vw] h-[45vh] bg-[white] flex justify-center items-center gap-6 flex-col relative">
      <button
        onClick={() => setUser(false)}
        className="absolute top-0 right-0 text-black text-[1.5rem] p-6 font-semibold"
      >
        X
      </button>
      <form
        className="flex flex-col justify-center items-center pt-4"
        onSubmit={handleSubmitClick}
      >
        {signUP === "signup" ? (
          <>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              className="border-[#8ba17f] border-2 m-2 rounded-lg py-2 px-5"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="border-[#8ba17f] border-2 m-2 rounded-lg py-2 px-5"
            />
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="border-[#8ba17f] border-2 m-2 rounded-lg py-2 px-5"
            />
            <button
              type="submit"
              className="text-[1.2rem] border-2 border-[#8ba17f] px-2 rounded-md bg-[#b1bea9] mt-3 mb-4"
            >
              Submit
            </button>
            <p className="text-center">OR</p>
            <button className="text-center">
              <img
                src="./google.svg"
                alt="Google"
                className="h-[vh] w-[2vw] pb-2"
              />
            </button>
          </>
        ) : (
          <>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="border-[#8ba17f] border-2 m-2 rounded-lg py-2 px-5"
            />
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="border-[#8ba17f] border-2 m-2 rounded-lg py-2 px-5"
            />
            <button
              type="submit"
              className="text-[1.2rem] border-2 border-[#8ba17f] px-2 rounded-md bg-[#b1bea9] mt-3 mb-4"
            >
              Submit
            </button>
            <p className="text-center">OR</p>
            <button className="text-center">
              <img
                src="./google.svg"
                alt="Google"
                className="h-[vh] w-[2vw] pb-2"
              />
            </button>
          </>
        )}
        <div>
          {signUP === "signup" ? (
            <div className="flex gap-4">
              <p>Already have an account?</p>
              <button
                type="button"
                onClick={handleLoginClick}
                className="text-[#55634e] font-bold"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <p>Don't have an account?</p>
              <button
                type="button"
                onClick={handleSignUpClick}
                className="text-[#55634e] font-bold"
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Log;
