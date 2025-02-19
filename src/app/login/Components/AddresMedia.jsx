import Button from "@/src/Component/Button/page";
import MultiSelectInput from "@/src/Component/Input/Multiinput";
import Input from "@/src/Component/Input/page";
import Heading from "@/src/Typography/text/Heading";
import Lable from "@/src/Typography/text/Lable";
import { doctoreiconimd, HospitalProfile } from "@/src/Utils/images";
import { Ic_Cross, Ic_Map, Ic_Upload } from "@/src/Utils/svg";
import Image from "next/image";
import React, { useState } from "react";
import style from "../../setting/Components/Setting.module.css";
import Regular from "@/src/Typography/text/Regular";
import Caption from "@/src/Typography/text/Caption";
import SelectInput from "@/src/Component/Input/SelectInput";

const AddresMedia = ({ setCurrentStep }) => {
  const [previewImages, setPreviewImages] = useState([]);
  const [fileError, setFileError] = useState("");

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

  const [profileImage, setProfileImage] = useState(HospitalProfile);
  return (
    <div className="pb-10 p-4">
      <Heading
        text={"Profile & Services"}
        className={"pb-[10px] border-b border-[--border_colours_light_border]"}
      />
      <div className="sm:grid sm:grid-cols-1 gap-4 md:gap-8 mt-8 flex flex-col">
        <div>
          <Lable text={"Hospital Logo"} />
          <div className="flex gap-3 items-center ">
            <Image
              src={profileImage}
              alt="Profile Image"
              width={100}
              height={100}
              className="rounded-full bg-[--surface_colours_light_gray_surf]"
            />
            <div>
              <div className="flex gap-2 items-center">
                <label>
                  <Input
                    type="file"
                    className="!hidden"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      console.log(e.target.files);
                      validateFile(file);
                      const profile = URL.createObjectURL(file);
                      setProfileImage(profile);
                    }}
                  />
                  <Regular
                    text={"Upload photo"}
                    className={"p-[5px] !text-[#003B3E]"}
                  />
                </label>
                <button
                  className="text-base p-[5px] font-normal text-[--alerts_error_text]"
                  onClick={() => setProfileImage(null)}
                >
                  Delete
                </button>
              </div>
              <Caption text={"   Max file size 4 MB"} className={"p-[5px]"} />
            </div>
          </div>
        </div>
        <div>
          <Lable text={"Services "} />
          <Input
            type="text"
            placeholder="Hospital Address"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Map.icon()}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-8">
          <SelectInput
            placeholder="Country"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Map.icon()}
            options={["USA", "Canada", "UK", "Germany", "India"]}
          />
          <SelectInput
            placeholder="City"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Map.icon()}
            options={["USA", "Canada", "UK", "Germany", "India"]}
          />
          <Input
            type="Number"
            placeholder="Zip Code"
            // value={name}
            // setValue={setName}
            // name="name"
          />
        </div>
        <div>
          <Lable text={"Hospital Phone Number "} />
          <Input
            type="text"
            placeholder="Enter Phone Number"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Map.icon()}
            className={"!max-w-lg"}
          />
        </div>
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
                <div className="text-gray-400 text-sm">5 MB max</div>
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between">
        <Button
          text={"Back"}
          disabled={false}
          onClick={() => {
            setCurrentStep(1);
          }}
          className={
            "mt-8  sm:!w-fit !bg-transparent !border border-[--border_colours_light_border] !text-[--text_colours_dark_text] !hover:bg-[--background_colours_light_background] !hover:text-[--text_colours_light_text]"
          }
        />
        <Button
          text={"Save & Continue"}
          disabled={false}
          onClick={() => {
            setCurrentStep(3);
          }}
          className={"mt-8  sm:!w-fit"}
        />
      </div>
    </div>
  );
};

export default AddresMedia;
