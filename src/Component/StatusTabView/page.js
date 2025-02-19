"use client";
import React from "react";
import style from "./status.module.css";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Medium from "@/src/Typography/text/Medium";
import Regular from "@/src/Typography/text/Regular";
import { ic_Back } from "@/src/Utils/svg";

const StatusTabView = ({ paths, back }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className={style.mainDivForButtoneSubTitle}>
      {back && (
        <div className={style.main_div_back} onClick={() => router.back()}>
          <div>{ic_Back.icon()}</div>
          <Medium className={style.Back_Button} text={"Back"} />
        </div>
      )}

      {paths.map((path, index) => {
        const pathUrl = new URL(`http://localhost:3000${path.route}`);
        const isActive =
          pathname === pathUrl.pathname &&
          searchParams.toString() === pathUrl.searchParams.toString();

        return (
          <div key={index}>
            {path.route ? (
              <span
                className={`${isActive ? style.activeTab : ""}`}
                onClick={() => router.push(path.route)}
              >
                {isActive ? (
                  <Medium className={style.BackHadiengText} text={path.name} />
                ) : (
                  <Regular
                    className={style.BackHadiengTextInactiv}
                    text={path.name}
                  />
                )}
              </span>
            ) : (
              <Regular text={path.name} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StatusTabView;
