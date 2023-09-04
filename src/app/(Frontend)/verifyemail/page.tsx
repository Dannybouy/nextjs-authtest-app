"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import congratulations from "@/assets/images/correct.png";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    console.log(urlToken);
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="dark:bg-slate-900 bg-gray-100 flex flex-col justify-center h-screen items-center">
      <Image src={congratulations} alt="success" className="mb-3 w-20" />
      <div className="text-center ">
        <h2 className="text-4xl mb-2">Congratulations!</h2>
        <p className="text-2xl">Your Email has been Verified</p>
        <div className="my-10 border-slate-500 border"></div>
      </div>
      <Link
        href="/login"
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 "
      >
        Login
      </Link>
    </div>
  );
}
