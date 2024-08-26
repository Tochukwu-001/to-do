"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
// import { signIn } from "next-auth/react";
import SignIn from '../(guest)/signin/page';
import { RiLoader4Line } from "react-icons/ri";

const GithubSignin = () => {
  const [processing, setProcessing] = useState(false);

  const handleSignIn = () => {
    SignIn("github", { callbackUrl: "/" });
    setProcessing(true);
  };

  return (
    <button
      disabled={processing}
      onClick={handleSignIn}
      className="rounded-full border py-2 px-3 w-full text-lg flex items-center justify-center"
    >
      <FaGithub className="text-2xl" />
      <span className="mx-auto">Continue with Github</span>
      {processing && <RiLoader4Line className="text-2xl animate-spin" />}
    </button>
  );
};

export default GithubSignin;
