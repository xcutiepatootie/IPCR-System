import Dashboard from "@/components/CampusDirector/Dashboard";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

import React, { useState } from "react";


export default function dashboard() {

  return (
    <SessionProvider>
      <div>
        <Navbar />
        <Dashboard />
      </div>


    </SessionProvider>

  );
}
