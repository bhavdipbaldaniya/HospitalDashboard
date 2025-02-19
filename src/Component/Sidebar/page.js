"use client";
import React, { useState } from "react";
import style from "./sidebar.module.css";
import { Hospitallogo, Mzadlogo } from "@/src/Utils/images";
import Image from "next/image";
import {
  Ic_Appointment,
  Ic_Dashboard,
  Ic_Department,
  Ic_desbord_coleps,
  Ic_Discounts_Offers,
  Ic_Doctors,
  Ic_Logout,
  Ic_Nev_dropdwon,
  Ic_notification,
  Ic_Packages,
  Ic_Patients,
  Ic_Report,
  Ic_Revenue_Wallet,
  Ic_Services_Facilities,
  Ic_Setting,
} from "@/src/Utils/svg";
import Small from "@/src/Typography/text/Small";
import Large from "@/src/Typography/text/Large";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { icon: Ic_Dashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Ic_Appointment, label: "Appointment", path: "/appointment" },
  { icon: Ic_Patients, label: "Patients", path: "/patients" },
  { icon: Ic_Doctors, label: "Doctors", path: "/doctors" },
  { icon: Ic_Patients, label: "Staffs", path: "/staffs" },
  { icon: Ic_Department, label: "Department", path: "/department" },
  { icon: Ic_Report, label: "Report", path: "/report" },
  {
    icon: Ic_Services_Facilities,
    label: "Services & Facilities",
    path: "/services&facilities",
  },
  { icon: Ic_Setting, label: "Setting", path: "/setting" },
  {
    icon: Ic_Revenue_Wallet,
    label: "Revenue & Wallet",
    path: "/revenue&wallet",
  },
  {
    icon: Ic_Discounts_Offers,
    label: "Discounts & Offers",
    path: "/discountoffer",
  },
  { icon: Ic_Packages, label: "Packages", path: "/packages" },
];
const Sidebar = ({ children }) => {
  const [fedIn, setFedIN] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const TogalSidbar = () => {
    setFedIN(!fedIn);
  };
  console.log(fedIn);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className={style.main_div_sidebar_navbar}>
        <div
          className={`${
            !fedIn
              ? style.main_div_sidebar_content
              : style.main_div_sidebar_content_close
          }`}
        >
          <div className={style.main_div_logo_content}>
            <Image
              className={style.mazad_logo}
              src={Mzadlogo}
              width={100}
              height={100}
              alt="Mzadlogo"
            />
            <Image
              className={style.Hospitallogo_logo}
              src={Hospitallogo}
              width={100}
              height={100}
              alt="Hospitallogo"
            />
          </div>
          <div className={style.sidbar_select_content}>
            {menuItems.map((item, index) => {
              const isActive = pathname.startsWith(item.path);
              return (
                <div
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  className={
                    isActive
                      ? style.main_div_logo_Sidbar_value_select
                      : style.main_div_logo_Sidbar_value
                  }
                >
                  {item.icon.icon()}
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.main_div_childeren}>
          <div className={style.main_div_navbar_content}>
            <div onClick={() => TogalSidbar()}>{Ic_desbord_coleps.icon()}</div>
            <div className={style.main_div_profile_content}>
              <div className={style.main_div_notification}>
                {Ic_notification.icon()}
              </div>
              <div className={style.main_div_profile_contener}>
                <div className={style.main_div_profile_details}>
                  <div className={style.main_div_profile_pic}></div>
                  <div className={style.main_div_name_position}>
                    <Large text={"Bhvadip Baldaniya"} />
                    <Small text={"Super Admin"} />
                  </div>
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="cursor-pointer"
                  >
                    {Ic_Nev_dropdwon.icon()}
                  </div>
                  {isDropdownOpen && (
                    <div className={style.dropdown_menu}>
                      <div className={style.dropdown_item}>Profile</div>
                      <div className={style.dropdown_item}>Logout</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={style.children_div}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
