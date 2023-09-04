"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { Spinner } from "@/components/Spinner";

type Owner = {
  _id: string;
  username: string;
  email: string;
};

const ProfilePage = () => {
  const router = useRouter();
  const [owner, setOwner] = useState<Owner | null>(null);
  const [loading, setLoading] = useState(false);
  const onLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.get("/api/users/owner");
      setOwner(res.data.data);
      toast.success("Profile details loaded successfully");
    } catch (error: any) {
      toast.error(error.res.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="dark:bg-slate-900 bg-gray-100 flex h-screen items-center justify-center">
      <div className="w-1/3">
        <h1 className="text-center text-2xl font-medium">Profile Details</h1>

        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="mb-4 sm:mb-8">
            <div className="flex justify-between flex-row-reverse">
              <Link
                href={`/profile/${owner ? owner._id : null}`}
                className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
              >
                Click for user page
              </Link>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                User ID
              </label>
            </div>
            <span className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 border">
              {owner ? owner._id : ""}
            </span>
          </div>
          <div className="mb-4 sm:mb-8">
            <label className="block mb-2 text-sm font-medium dark:text-white">
              User name
            </label>
            <span className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 border">
              {owner ? owner.username : ""}
            </span>
          </div>

          <div className="mb-4 sm:mb-8">
            <label className="block mb-2 text-sm font-medium dark:text-white">
              Email address
            </label>
            <span className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 border">
              {owner ? owner.email : ""}
            </span>
          </div>

          <div className="flex justify-between">
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
              {loading ? <Spinner /> : "GetUser Details"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
