"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";

const ProfilePage = () => {
  const router = useRouter();
  const [owner, setOwner] = useState("");
  const onLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const res = await axios.get("/api/users/owner");
    console.log(res.data);
    setOwner(res.data.data._id);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <hr />
      <h2 className="p-2 rounded bg-slate-400 mt-2">
        {owner === "" ? "Nothing" : <Link href={`/profile/${owner}`}>{owner}</Link>}
      </h2>
      <div>
        <button
          type="button"
          className="py-3 px-4 inline-flex justify-center mt-5 mr-5 items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={onLogout}
        >
          Logout
        </button>

        <button
          type="button"
          className="py-3 px-4 inline-flex justify-center mt-5 items-center gap-2 rounded-md border border-transparent font-semibold bg-teal-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={getUserDetails}
        >
          GetUser Details
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
