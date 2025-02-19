// "use client";
// import React from "react";
// import PageLayout from "@/src/Component/Layout/PageLayout";
// import style from "./report.module.css";
// import { Ic_Excle_inmport, Ic_Info_toltip } from "@/src/Utils/svg";
// import SubHeading from "@/src/Typography/text/SubHeading";
// import Small from "@/src/Typography/text/Small";
// import SvgButton from "@/src/Component/SvgButton/page";

// const HospitalReport = () => {
//   return (
//     <>
//       <PageLayout>
//         <div className={style.main_div_for_report_cart}>
//           <div className={style.main_div_ander_content}>
//             <div className={style.main_div_for_img_info}>
//               <div className={style.main_div_for_img_box}></div>
//               <div>{Ic_Info_toltip.icon()}</div>
//             </div>
//             <div className={style.main_div_heding_contener}>
//               <SubHeading
//                 className={style.main_div_hading}
//                 text={"Appointment Report"}
//               />
//               <Small text={"A descriptive body text comes here"} />
//             </div>
//           </div>
//           <div className={style.main_div_button_section}>
//             <div>
//               <SvgButton
//                 svg={Ic_Excle_inmport.icon()}
//                 text={"Generate Report "}
//               />
//             </div>
//           </div>
//         </div>
//       </PageLayout>
//     </>
//   );
// };

// export default HospitalReport;

"use client";
import React from "react";
import PageLayout from "@/src/Component/Layout/PageLayout";
import style from "./report.module.css";
import { Ic_Excle_inmport, Ic_Info_toltip } from "@/src/Utils/svg";
import SubHeading from "@/src/Typography/text/SubHeading";
import Small from "@/src/Typography/text/Small";
import SvgButton from "@/src/Component/SvgButton/page";

const HospitalReport = () => {
  const reportData = [
    {
      id: 1,
      title: "Appointment Report",
      description: "Detailed report of all appointments",
    },
    {
      id: 2,
      title: "Billing Report",
      description: "Summary of all billing transactions",
    },
    {
      id: 3,
      title: "Doctor Performance Report",
      description: "Analysis of doctors' performance and reviews",
    },
    {
      id: 4,
      title: "Doctor Performance Report",
      description: "Analysis of doctors' performance and reviews",
    },
    {
      id: 5,
      title: "Doctor Performance Report",
      description: "Analysis of doctors' performance and reviews",
    },
    {
      id: 6,
      title: "Doctor Performance Report",
      description: "Analysis of doctors' performance and reviews",
    },
  ];

  return (
    <PageLayout>
      <div className={style.report_container}>
        {reportData.map((report) => (
          <div key={report.id} className={style.main_div_for_report_cart}>
            <div className={style.main_div_ander_content}>
              <div className={style.main_div_for_img_info}>
                <div className={style.main_div_for_img_box}></div>
                <div>{Ic_Info_toltip.icon()}</div>
              </div>
              <div className={style.main_div_heding_contener}>
                <SubHeading
                  className={style.main_div_hading}
                  text={report.title}
                />
                <Small text={report.description} />
              </div>
            </div>
            <div className={style.main_div_button_section}>
              <div>
                <SvgButton
                  svg={Ic_Excle_inmport.icon()}
                  text={"Generate Report "}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default HospitalReport;
