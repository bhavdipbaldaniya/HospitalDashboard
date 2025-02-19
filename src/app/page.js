"use client";
import React, { useState } from "react";
import Heading from "../Typography/text/Heading";
import SubHeading from "../Typography/text/SubHeading";
import Lable from "../Typography/text/Lable";
import MainTitleHeading from "../Typography/text/MainTitleHeading";
import Medium from "../Typography/text/Medium";
import Regular from "../Typography/text/Regular";
import Small from "../Typography/text/Small";
import Large from "../Typography/text/Large";
import Caption from "../Typography/text/Caption";
import PageLayout from "../Component/Layout/PageLayout";
import StatusTabView from "../Component/StatusTabView/page";
import InfoCount from "../Component/InfoCount/page";
import Button from "../Component/Button/page";
import PackageCard from "../Component/PackageCard/page";
import { Grid4 } from "../Utils/images";
import TableLayout from "../Component/TableLayout/page";
import ToggleSwitch from "../Component/ToggleSwitch/page";
import ProgressSteps from "../Component/Stepper/page";
import Input from "../Component/Input/page";
import ErrorText from "../Typography/text/ErrorText";
import Dropdown from "../Component/Dropdown/page";
import SvgButton from "../Component/SvgButton/page";
import LoginInput from "../Component/LoginInput/page";
import StatusBadge from "../Component/StatusBadge/page";
import SearchInput from "../Component/SearchInput/page";
import { Ic_Email, Ic_Search } from "../Utils/svg";
// import Sidebar from "../Component/Sidebar/page";

const page = ({ isActive, onToggle }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [file, setFile] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClick = () => {
    console.log("Button clicked");
  };

  const [packageData] = useState([
    {
      imageSrc: Grid4,
      packageName: "Basic Health Checkup",
      description:
        "A comprehensive health checkup package covering essential tests.",
      originalPrice: 2000,
      offerPrice: 1500,
      numberOfSessions: 1,
      doctorAssigned: "Dr. Bhavdip",
    },
  ]);

  const demoSteps = [
    { title: "Basic Information" },
    { title: "Profile & Services" },
    { title: "Address & Media" },
    { title: "Admin Details" },
  ];
  const handleStepChange = (newStep) => {
    setActiveStep(newStep);
  };

  const options = [
    { name: "HR", value: "hr" },
    { name: "Finance", value: "finance" },
    { name: "Engineering", value: "engineering" },
    { name: "Marketing", value: "marketing" },
  ];
  const countryList = [
    {
      name: "Qatar",
      code: "QA",
      dial_code: "+974",
      flag: "https://flagcdn.com/w40/qa.png",
    },
    {
      name: "United States",
      code: "US",
      dial_code: "+1",
      flag: "https://flagcdn.com/w40/us.png",
    },
    {
      name: "India",
      code: "IN",
      dial_code: "+91",
      flag: "https://flagcdn.com/w40/in.png",
    },
  ];
  return (
    <>
      {/* <Sidebar /> */}
      <div className="text-red-500">INDEX PAGE</div>
      <PageLayout>
        <SearchInput svg={Ic_Search.icon()} />
        <div>
          <StatusBadge text="Completed" color="#007BFF" />
          <StatusBadge text="Scheduled" color="#28A745" />
          <StatusBadge text="Rescheduled" color="#FFA500" />
          <StatusBadge text="Cancelled" color="#DC3545" />
        </div>
        <LoginInput countries={countryList} />
        <SvgButton
          // className={styles.EditButton}
          type={"submit"}
          // svg={Ic_Email.icon()}
          text={"Edit"}
        />
        <SvgButton
          // className={styles.EditButton}
          type={"submit"}
          svg={Ic_Email.icon()}
          text={"Edit"}
        />
        <Dropdown
          data={options}
          value={selectedValue}
          setValue={setSelectedValue}
          Select="Select Department"
        />
        {/* <Dropdown
          icon={Ic_Department.icon()}
          label="Select Department"
          options={["HR", "Finance", "Engineering", "Marketing"]}
          onSelect={handleSelect}
        /> */}

        <ErrorText text={"Error Text"} />

        <MainTitleHeading text={"MainTitleHeading"} />
        <Heading text={"Heading"} />
        <SubHeading text={"SubHeading"} />
        <Medium text={"Medium"} />
        <Lable text={"Lable"} />
        <Large text={"Large"} />
        <Regular text={"Regular"} />
        <Small text={"Small"} />
        <Caption text={"Caption"} />
        <ToggleSwitch checked={isActive} onChange={onToggle} />

        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          setValue={setName}
          name="name"
          svg={Ic_Email.icon()}
        />

        {/* Email Input */}
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
          name="email"
          svg={Ic_Email.icon()}
        />
        {/* Password Input */}
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          setValue={setPassword}
          name="password"
          svg={Ic_Email.icon()}
        />
        <Input
          type="number"
          placeholder="Enter Number"
          value={number}
          setValue={setNumber}
          name="number"
        />
        <Input
          type="file"
          className="!border-none"
          svg={Ic_Email.icon()}
          value={file}
          setValue={setFile}
        />
        <StatusTabView
          paths={[
            { name: "Available", route: "/" },
            { name: "All", route: `/?${"1"}` },
          ]}
        />
        <StatusTabView back paths={[]} />
        <InfoCount
          value={402}
          label="Staff"
          ButtonTitle="Add Offer"
          onClick={() => handleClick()}
        />
        <Button text={"Get OTP"} disabled={true} />
        <Button text={"Get OTP"} onClick={() => handleClick()} />
        {packageData.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
        <TableLayout
          Heading={"Department List"}
          Description={"A descriptive body text comes here"}
          ButtonTitle={"Add New Department"}
          Delete
          Export
          Filters
          onClickAdd={() => handleClick()}
          onClickExport={() => handleClick()}
          onClickFilters={() => handleClick()}
          onClickDelete={() => handleClick()}
          Search
        >
          DATA Table Content
        </TableLayout>
        <ProgressSteps
          steps={demoSteps}
          initialStep={activeStep}
          onStepChange={handleStepChange}
        />
        {/* <ProgressSteps
          steps={steps}
          initialStep={2}
          onStepChange={(step) => console.log(`Step ${step}`)}
        /> */}
      </PageLayout>
    </>
  );
};

export default page;
