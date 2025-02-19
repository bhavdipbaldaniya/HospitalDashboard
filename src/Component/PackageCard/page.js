"use client";

import React from "react";
import Image from "next/image";
import style from "./packagecard.module.css";
import { manageicon } from "@/src/Utils/svg";
import ToggleSwitch from "../ToggleSwitch/page";

const PackageCard = ({
  imageSrc,
  packageName,
  description,
  originalPrice,
  offerPrice,
  numberOfSessions,
  doctorAssigned,
  isActive,
  onToggle,
}) => {
  return (
    <>
      <div className={style.div_for_cards}>
        <div className={style.card}>
          <div>
            <div className={style.imageContainer}>
              <Image
                src={imageSrc}
                alt={packageName}
                width={300}
                height={180}
                className={style.image}
              />
            </div>
            <div className={style.content}>
              <h2 className={style.title}>{packageName}</h2>
              <p className={style.description}>{description}</p>
              <div className={style.price}>
                <span className={style.oldPrice}>${originalPrice}</span>
                <span className={style.newPrice}>${offerPrice}</span>
              </div>
              <div className={style.sessions}>
                <div className={style.sessionsnumber}>No. of Sessions</div>
                <div className={style.number}>{numberOfSessions}</div>
              </div>
              <div className={style.doctor}>
                <div className={style.doctortitle}>Doctor</div>
                <div className={style.doctorName}>{doctorAssigned}</div>
              </div>
            </div>
          </div>
          <div className={style.manageSection}>
            <span className={style.styles_for_manage_icon}>
              {manageicon.icon()} Manage
            </span>
            <ToggleSwitch checked={isActive} onChange={onToggle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
