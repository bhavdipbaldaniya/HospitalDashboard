"use client";
import React, { useState } from "react";
import LoginWithEmail from "./Components/LoginWithEmail";
import LoginOtp from "./Components/LoginOtp";
import LoginWithNumber from "./Components/LoginWithNumber";
import Registered from "./Components/Registered";
import { Divide } from "lucide-react";
import ProfileSelect from "./Components/ProfileSelect";

const page = () => {
  const [pageChange, setPageChange] = useState(false);
  return (
    <>
      {pageChange ? (
        <>
          {/* <ProfileSelect />
          <LoginOtp /> */}
          <LoginWithEmail setPageChange={setPageChange} />
        </>
      ) : (
        <LoginWithNumber setPageChange={setPageChange} />
      )}
    </>
  );
};

export default page;
