"use client";
import Link from "next/link";
import { useState } from "react";

const Profile = () => {
  
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Home page
        </h2>
        <p>welcome your home page</p>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
         
          <div>
            <button
              type="submit"
              onClick={(e) => onLogout(e)}
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Logout
            </button>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default Profile;
