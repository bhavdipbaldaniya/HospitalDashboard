"use client";
import Input from "@/src/Component/Input/page";
import Tabs from "@/src/Component/Tabs/page";
import Lable from "@/src/Typography/text/Lable";
import Medium from "@/src/Typography/text/Medium";
import Small from "@/src/Typography/text/Small";
import { HospitalProfile } from "@/src/Utils/images";
import {
  Ic_Calender,
  Ic_Cross,
  Ic_Diploma,
  Ic_Documnet,
  Ic_Email,
  Ic_Hospital,
  Ic_Id,
  Ic_Phone,
  Ic_Upload,
  Ic_Website,
} from "@/src/Utils/svg";
import Image from "next/image";
import React, { useState } from "react";
import style from "./Setting.module.css";
import Dropdown from "@/src/Component/Dropdown/page";
import PageLayout from "@/src/Component/Layout/PageLayout";
import SubHeading from "@/src/Typography/text/SubHeading";
import ToggleSwitch from "@/src/Component/ToggleSwitch/page";

const Setting = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [file, setFile] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [fileError, setFileError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const tabsData = [
    { title: "Basic Information", content: <p>Basic Information Content</p> },
    { title: "About & Media", content: <p>About & Media Content</p> },
    { title: "Bank Details", content: <p>Bank Details Content</p> },
  ];
  const tabsData1 = [
    { title: "Hospital", content: <p>Basic Information Content</p> },
    { title: "Calendar", content: <p>About & Media Content</p> },
    { title: "General Settings", content: <p>Bank Details Content</p> },
  ];

  const validateFile = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      return "Only JPG, JPEG, PNG files are allowed";
    }

    if (file.size > maxSize) {
      return "File size should be less than 5MB";
    }

    return null;
  };

  const handleFileChange = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    let newPreviews = [];
    let errors = [];

    for (const file of selectedFiles) {
      const error = validateFile(file);
      if (error) {
        errors.push(`${file.name}: ${error}`);
        continue;
      }

      const preview = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });

      newPreviews.push({ preview, file });
    }

    if (errors.length > 0) {
      setFileError(errors.join("\n"));
      return;
    }

    setPreviewImages([...previewImages, ...newPreviews]);
    setFileError("");
  };

  const handleRemoveImage = (index) => {
    const newPreviews = previewImages.filter((_, i) => i !== index);
    setPreviewImages(newPreviews);
  };
  const options = [
    { name: "Saving", value: "saving" },
    { name: "Current", value: "current" },
  ];

  return (
    <div className="bg-white h-[calc(100vh-69px)]">
      <Tabs
        className={style.main_tab_div}
        tabsData={tabsData1}
        classNameB={`${style.main_tabs_view} border-b-4 border-[--alerts_success_text] font-semibold text-black`}
        classNameC={style.sub_tab_div}
      >
        {{
          Hospital: (
            <>
              <PageLayout>
                <div>
                  <div className="flex items-center space-x-4 mb-16">
                    <Image
                      src={HospitalProfile}
                      alt="Profile Image"
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                    <div>
                      <h2 className="text-xl font-bold">Hospital Name</h2>
                      <p className="text-gray-600">hospitalname@email.com</p>
                    </div>
                  </div>
                </div>
                <Tabs
                  className={style.main_tab_div_First}
                  tabsData={tabsData}
                  classNameB="border-b-2 border-black font-semibold text-black pb-2"
                  classNameC="pb-2"
                >
                  {{
                    "Basic Information": (
                      <div className="sm:grid sm:grid-cols-2 gap-4 md:gap-8 mt-8 flex flex-col">
                        <div>
                          <Lable text={" Account Holder Name"} />
                          <Input
                            className="!border-none"
                            type="text"
                            placeholder="Enter hospital name"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                            svg={Ic_Hospital.icon()}
                          />
                        </div>
                        <div>
                          <Lable text={"Hospital Email"} />
                          <Input
                            className="!border-none"
                            type="email"
                            placeholder="Enter email"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                            svg={Ic_Email.icon()}
                          />
                        </div>
                        <div>
                          <Lable text={"Hospital Website"} />
                          <Input
                            className="!border-none"
                            type="text"
                            placeholder="Enter website link"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                            svg={Ic_Website.icon()}
                          />
                        </div>
                        <div>
                          <Lable text={"Establish Date"} />
                          <Input
                            className="!border-none"
                            type="date"
                            // placeholder="Enter website link"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                            svg={Ic_Calender.icon()}
                          />
                        </div>
                        <div>
                          <Lable text={"Tax ID Number"} />
                          <Input
                            className="!border-none"
                            type="text"
                            placeholder="Enter Tax ID Number"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                            svg={Ic_Id.icon()}
                          />
                        </div>
                        <div>
                          <Lable text={"Registration Number"} />
                          <Input
                            className="!border-none"
                            type="text"
                            placeholder="Enter Registration Number"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                            svg={Ic_Diploma.icon()}
                          />
                        </div>
                        <div>
                          <Lable text={"Upload Tax ID Document"} />
                          <Input
                            className="!border-none"
                            type="file"
                            // placeholder="Enter website link"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                            svg={Ic_Documnet.icon()}
                            filename="Upload Tax ID Documentr"
                          />
                        </div>
                        <div>
                          <Lable text={"Upload Registration Number"} />
                          <Input
                            className="!border-none"
                            type="file"
                            // placeholder="Enter website link"
                            // value={name}
                            value={file}
                            setValue={setFile}
                            svg={Ic_Documnet.icon()}
                            filename="Upload Registration Number"
                          />
                        </div>
                        <div>
                          <Lable text={"Hospital Phone Number"} />
                          <Input
                            className="!border-none"
                            type="number"
                            placeholder="+1 (555) 123-4567"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                            svg={Ic_Phone.icon()}
                          />
                        </div>
                      </div>
                    ),

                    "About & Media": (
                      <div>
                        {/* About Hospital */}
                        <div className="mt-8 rounded-lg">
                          <Medium
                            className={style.about_hospital_title}
                            text={"About Hospital"}
                          />
                          <div className={style.description_div}>
                            <div>{Ic_Hospital.icon()}</div>
                            <Small
                              className={style.about_default_description}
                              text={
                                " Fortis Healthcare is a leading integrated healthcare provider, renowned for its world-class medical expertise, advanced technology, and patient-centric approach. With a network of hospitals offering multi-specialty care, Fortis is committed to excellence in healthcare and enhancing the lives of patients globally."
                              }
                            />
                          </div>
                        </div>

                        <div className="mt-14">
                          <Medium
                            className={style.about_hospital_title}
                            text={"Hospital Photos"}
                          />
                          <div className="flex gap-4  flex-wrap">
                            {/* Display Uploaded Images */}
                            {previewImages.map((item, index) => (
                              <div key={index} className="relative w-72">
                                <Image
                                  src={item.preview}
                                  alt="Uploaded Image"
                                  width={120}
                                  height={80}
                                  className="object-cover w-full max-h-[134px]"
                                />
                                <button
                                  className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
                                  onClick={() => handleRemoveImage(index)}
                                >
                                  {Ic_Cross.icon()}
                                </button>
                              </div>
                            ))}

                            {/* Upload File Box */}
                            <label className="border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer h-20 px-12 py-16">
                              <Input
                                type="file"
                                className="!hidden"
                                accept="image/jpeg, image/png, image/jpg"
                                onChange={handleFileChange}
                              />
                              <div className="text-center flex items-center gap-2">
                                {Ic_Upload.icon()}
                                <div>
                                  <div className={style.upload_hospital_photo}>
                                    Upload your file
                                  </div>
                                  <div className="text-gray-400 text-sm">
                                    5 MB max
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>

                          {/* Error Message */}
                          {fileError && (
                            <p className="text-red-500 text-sm mt-2">
                              {fileError}
                            </p>
                          )}
                        </div>
                      </div>
                    ),

                    "Bank Details": (
                      <div className="sm:grid sm:grid-cols-2 gap-4 md:gap-8 mt-8 flex flex-col">
                        <div>
                          <Lable text={"Account Holder Name"} />
                          <Input
                            className="!border-none"
                            type="text"
                            placeholder="Enter name"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                          />
                        </div>
                        <div>
                          <Lable text={"Bank Name"} />
                          <Input
                            className="!border-none"
                            type="text"
                            placeholder="Enter name"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                          />
                        </div>
                        <div>
                          <Lable text={"Account Number"} />
                          <Input
                            className="!border-none"
                            type="number"
                            placeholder="1234 5678 9101 1213"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                          />
                        </div>
                        <div>
                          <Lable text={"Account Type"} />
                          <Dropdown
                            className="!border-none"
                            data={options}
                            value={selectedValue}
                            setValue={setSelectedValue}
                            Select="saving"
                          />
                        </div>
                        <div>
                          <Lable text={"IFSC Code"} />
                          <Input
                            className="!border-none"
                            type="text"
                            placeholder="Enter code"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                          />
                        </div>
                        <div>
                          <Lable text={"SWIFT Code"} />
                          <Input
                            className="!border-none"
                            type="text"
                            placeholder="Enter code"
                            // value={name}
                            // setValue={setName}
                            // name="name"
                          />
                        </div>
                      </div>
                    ),
                  }}
                </Tabs>
              </PageLayout>
            </>
          ),
          Calendar: (
            <>
              <PageLayout>
                <SubHeading
                  className={style.general_setting_heading}
                  text={"Preferences"}
                />
              </PageLayout>
            </>
          ),
          "General Settings": (
            <PageLayout>
              <div>
                <SubHeading
                  className={style.general_setting_heading}
                  text="Preferences"
                />
                <div className="sm:grid sm:grid-cols-2 flex flex-col gap-6 mt-4">
                  <div>
                    <Lable text={"Currency"} />
                    <Input placeholder={"country"} />
                  </div>
                  <div>
                    <Lable text={"Language"} />
                    <Input placeholder={"Language"} />
                  </div>
                </div>

                <SubHeading
                  className={style.general_setting_notification}
                  text="Notification"
                />
                <div className="mt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Medium text="Email Notification" />
                      <Small text="Some text to elaborate notification type" />
                    </div>
                    <ToggleSwitch
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <Medium text="SMS Notification" />
                      <Small text="Some text to elaborate notification type" />
                    </div>
                    <ToggleSwitch
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <Medium text="System Notification" />
                      <Small text="Some text to elaborate notification type" />
                    </div>
                    <ToggleSwitch
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                  </div>
                </div>
              </div>
            </PageLayout>
          ),
        }}
      </Tabs>
    </div>
  );
};

export default Setting;
