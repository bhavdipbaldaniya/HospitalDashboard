"use client";
import PageLayout from "@/src/Component/Layout/PageLayout";
import React, { useEffect, useMemo, useState } from "react";
import style from "./hospital.module.css";
import {
  Ic_profit_Down,
  Ic_profit_up,
  Ic_Right_icon,
  Ic_Right_icon_dropdwon,
  Ic_Three_Dotsh,
} from "@/src/Utils/svg";
import SubHeading from "@/src/Typography/text/SubHeading";
import MainTitleHeading from "@/src/Typography/text/MainTitleHeading";
import Small from "@/src/Typography/text/Small";
import Calendar from "@/src/Component/Calendar/page";
import Regular from "@/src/Typography/text/Regular";
import HospitalDashboardVideoChart from "./HospitalDashboardVideoChart";
import ActivityLog from "./ActivityLog";
import HospitalDashboardInRevenue from "./HospitalDashboardInRevenue";
import HospitalDashboardInWalk from "./HospitalDashboardInWalk";
import DataTable from "react-data-table-component";
import StatusBadge from "@/src/Component/StatusBadge/page";

const jsonData = [
  {
    Patient: "John Doe",
    Doctor: "Raj Malhotra",
    Department: "Cardiology",
    Time: "10:15 AM",
    Status: "Completed",
    Type: "X-ray",
  },
  {
    Patient: "Emily Clark",
    Doctor: "Amit Sharma",
    Department: "Neurology",
    Time: "11:30 AM",
    Status: "Rescheduled",
    Type: "MRI scan",
  },
  {
    Patient: "Michael Smith",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "02:00 PM",
    Status: "Scheduled",
    Type: "Vaccination",
  },
  {
    Patient: "Sarah Johnson",
    Doctor: "Nina Gupta",
    Department: "Pediatrics",
    Time: "09:00 AM",
    Status: "Completed",
    Type: "Check-up",
  },
  {
    Patient: "Robert Wilson",
    Doctor: "Sanjay Kumar",
    Department: "Cardiology",
    Time: "10:45 AM",
    Status: "Cancelled",
    Type: "ECG",
  },
  {
    Patient: "Lisa Brown",
    Doctor: "Raj Malhotra",
    Department: "Cardiology",
    Time: "11:15 AM",
    Status: "Completed",
    Type: "Consultation",
  },
  {
    Patient: "James Anderson",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "01:30 PM",
    Status: "Completed",
    Type: "X-ray",
  },
  {
    Patient: "Emma Davis",
    Doctor: "Amit Sharma",
    Department: "Neurology",
    Time: "02:45 PM",
    Status: "Completed",
    Type: "CT scan",
  },
  {
    Patient: "William Taylor",
    Doctor: "Nina Gupta",
    Department: "Pediatrics",
    Time: "03:15 PM",
    Status: "Scheduled",
    Type: "Vaccination",
  },
  {
    Patient: "Olivia Martinez",
    Doctor: "Sanjay Kumar",
    Department: "Cardiology",
    Time: "09:30 AM",
    Status: "Completed",
    Type: "Stress Test",
  },
  {
    Patient: "Daniel Lee",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "10:00 AM",
    Status: "Completed",
    Type: "MRI scan",
  },
  {
    Patient: "Sophia Chen",
    Doctor: "Raj Malhotra",
    Department: "Cardiology",
    Time: "11:45 AM",
    Status: "Completed",
    Type: "Check-up",
  },
  {
    Patient: "Alexander White",
    Doctor: "Amit Sharma",
    Department: "Neurology",
    Time: "01:00 PM",
    Status: "Completed",
    Type: "EEG",
  },
  {
    Patient: "Isabella Garcia",
    Doctor: "Nina Gupta",
    Department: "Pediatrics",
    Time: "02:30 PM",
    Status: "Completed",
    Type: "Check-up",
  },
  {
    Patient: "Lucas Thompson",
    Doctor: "Sanjay Kumar",
    Department: "Cardiology",
    Time: "03:45 PM",
    Status: "Scheduled",
    Type: "Consultation",
  },
  {
    Patient: "Ava Rodriguez",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "09:15 AM",
    Status: "Completed",
    Type: "Physical Therapy",
  },
  {
    Patient: "Ethan Miller",
    Doctor: "Raj Malhotra",
    Department: "Cardiology",
    Time: "10:30 AM",
    Status: "Completed",
    Type: "Angiogram",
  },
  {
    Patient: "Mia Wilson",
    Doctor: "Amit Sharma",
    Department: "Neurology",
    Time: "11:00 AM",
    Status: "Completed",
    Type: "Consultation",
  },
  {
    Patient: "Benjamin Moore",
    Doctor: "Nina Gupta",
    Department: "Pediatrics",
    Time: "01:45 PM",
    Status: "Completed",
    Type: "Immunization",
  },
  {
    Patient: "Charlotte King",
    Doctor: "Sanjay Kumar",
    Department: "Cardiology",
    Time: "02:15 PM",
    Status: "Completed",
    Type: "ECG",
  },
  {
    Patient: "Mason Scott",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "03:30 PM",
    Status: "Scheduled",
    Type: "X-ray",
  },
  {
    Patient: "Amelia Adams",
    Doctor: "Raj Malhotra",
    Department: "Cardiology",
    Time: "09:45 AM",
    Status: "Completed",
    Type: "Check-up",
  },
  {
    Patient: "Henry Jackson",
    Doctor: "Amit Sharma",
    Department: "Neurology",
    Time: "10:15 AM",
    Status: "Completed",
    Type: "MRI scan",
  },
  {
    Patient: "Evelyn Nelson",
    Doctor: "Nina Gupta",
    Department: "Pediatrics",
    Time: "11:30 AM",
    Status: "Completed",
    Type: "Check-up",
  },
  {
    Patient: "Sebastian Hill",
    Doctor: "Sanjay Kumar",
    Department: "Cardiology",
    Time: "01:15 PM",
    Status: "Rescheduled",
    Type: "Stress Test",
  },
  {
    Patient: "Scarlett Carter",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "02:45 PM",
    Status: "Rescheduled",
    Type: "Consultation",
  },
  {
    Patient: "Jack Phillips",
    Doctor: "Raj Malhotra",
    Department: "Cardiology",
    Time: "03:00 PM",
    Status: "Rescheduled",
    Type: "X-ray",
  },
  {
    Patient: "Victoria Rogers",
    Doctor: "Amit Sharma",
    Department: "Neurology",
    Time: "09:30 AM",
    Status: "Completed",
    Type: "CT scan",
  },
  {
    Patient: "David Cooper",
    Doctor: "Nina Gupta",
    Department: "Pediatrics",
    Time: "10:45 AM",
    Status: "Completed",
    Type: "Vaccination",
  },
  {
    Patient: "Luna Morgan",
    Doctor: "Sanjay Kumar",
    Department: "Cardiology",
    Time: "11:15 AM",
    Status: "Completed",
    Type: "Consultation",
  },
  {
    Patient: "Owen Reed",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "01:30 PM",
    Status: "Scheduled",
    Type: "MRI scan",
  },
  {
    Patient: "Elena Bailey",
    Doctor: "Raj Malhotra",
    Department: "Cardiology",
    Time: "02:00 PM",
    Status: "Completed",
    Type: "ECG",
  },
  {
    Patient: "Christopher Kelly",
    Doctor: "Amit Sharma",
    Department: "Neurology",
    Time: "03:15 PM",
    Status: "Completed",
    Type: "EEG",
  },
  {
    Patient: "Aria Howard",
    Doctor: "Nina Gupta",
    Department: "Pediatrics",
    Time: "09:00 AM",
    Status: "Completed",
    Type: "Check-up",
  },
  {
    Patient: "Thomas Ward",
    Doctor: "Sanjay Kumar",
    Department: "Cardiology",
    Time: "10:30 AM",
    Status: "Completed",
    Type: "Angiogram",
  },
  {
    Patient: "Zoe Cox",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "11:45 AM",
    Status: "Scheduled",
    Type: "Physical Therapy",
  },
  {
    Patient: "Nathan Ross",
    Doctor: "Raj Malhotra",
    Department: "Cardiology",
    Time: "01:00 PM",
    Status: "Completed",
    Type: "Stress Test",
  },
  {
    Patient: "Stella Gray",
    Doctor: "Amit Sharma",
    Department: "Neurology",
    Time: "02:30 PM",
    Status: "Completed",
    Type: "Consultation",
  },
  {
    Patient: "Adrian Watson",
    Doctor: "Nina Gupta",
    Department: "Pediatrics",
    Time: "03:45 PM",
    Status: "Completed",
    Type: "Immunization",
  },
  {
    Patient: "Chloe Brooks",
    Doctor: "Sanjay Kumar",
    Department: "Cardiology",
    Time: "09:15 AM",
    Status: "Completed",
    Type: "X-ray",
  },
  {
    Patient: "Xavier Price",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "10:45 AM",
    Status: "Scheduled",
    Type: "Consultation",
  },
  {
    Patient: "Lily Bennett",
    Doctor: "Raj Malhotra",
    Department: "Cardiology",
    Time: "11:00 AM",
    Status: "Completed",
    Type: "ECG",
  },
  {
    Patient: "Felix Wood",
    Doctor: "Amit Sharma",
    Department: "Neurology",
    Time: "01:45 PM",
    Status: "Completed",
    Type: "MRI scan",
  },
  {
    Patient: "Layla Barnes",
    Doctor: "Nina Gupta",
    Department: "Pediatrics",
    Time: "02:15 PM",
    Status: "Completed",
    Type: "Check-up",
  },
  {
    Patient: "Gabriel Fisher",
    Doctor: "Sanjay Kumar",
    Department: "Cardiology",
    Time: "03:30 PM",
    Status: "Completed",
    Type: "Consultation",
  },
  {
    Patient: "Nora Coleman",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "09:45 AM",
    Status: "Scheduled",
    Type: "X-ray",
  },
  {
    Patient: "Leo Harrison",
    Doctor: "Raj Malhotra",
    Department: "Cardiology",
    Time: "10:15 AM",
    Status: "Completed",
    Type: "Stress Test",
  },
  {
    Patient: "Aurora Peters",
    Doctor: "Amit Sharma",
    Department: "Neurology",
    Time: "11:30 AM",
    Status: "Completed",
    Type: "CT scan",
  },
  {
    Patient: "Maxwell Gordon",
    Doctor: "Nina Gupta",
    Department: "Pediatrics",
    Time: "01:15 PM",
    Status: "Completed",
    Type: "Vaccination",
  },
  {
    Patient: "Ruby Ferguson",
    Doctor: "Sanjay Kumar",
    Department: "Cardiology",
    Time: "02:45 PM",
    Status: "Completed",
    Type: "ECG",
  },
  {
    Patient: "Julian Hayes",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "03:00 PM",
    Status: "Scheduled",
    Type: "Physical Therapy",
  },
  {
    Patient: "Clara Murray",
    Doctor: "Raj Malhotra",
    Department: "Cardiology",
    Time: "09:30 AM",
    Status: "Completed",
    Type: "Angiogram",
  },
];

const columns = [
  { name: "Patient", selector: (row) => row["Patient"], sortable: true },
  { name: "Doctor", selector: (row) => row["Doctor"], sortable: true },
  { name: "Department", selector: (row) => row["Department"], sortable: true },
  { name: "Type", selector: (row) => row["Type"], sortable: true },
  // { name: "Status", selector: (row) => row["Status"], sortable: true },


  {
    name: "Status",
    selector: (row) => row["Status"],
    sortable: true,
    cell: (row) => (
      <>
        {row.Status === "Completed" && <StatusBadge text="Completed" color="#007BFF" />}
        {row.Status === "Scheduled" && <StatusBadge text="Scheduled" color="#28A745" />}
        {row.Status === "Rescheduled" && <StatusBadge text="Rescheduled" color="#FFA500" />}
        {row.Status === "Cancelled" && <StatusBadge text="Cancelled" color="#DC3545" />}
      </>
    ),
  },
  { name: "Time", selector: (row) => row["Time"], sortable: true },
];
const handleRowClick = (row) => {
  console.log("Hello");
  console.log("Clicked row data:", row);
};

const HospitalDashboard = () => {
  const [activeTab, setActiveTab] = useState("walk");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <>
      <PageLayout>
        <div className={style.main_div_for_hospital_count_cart}>
          <div className={style.main_div_hospital_cart}>
            <div className={style.main_div_hospital_hading_icon}>
              <SubHeading
                className={style.main_div_hading_patiotant}
                text={"Today’s Patient"}
              />
              <div>{Ic_Three_Dotsh.icon()}</div>
            </div>
            <div className={style.main_div_content}>
              <div className={style.main_div_profit_up}>
                <MainTitleHeading text={"1,234"} />
                <div className={style.main_div_profitup}>
                  {Ic_profit_up.icon()}10%
                </div>
              </div>
              <Small text={"+123 from last month"} />
            </div>
          </div>
          <div className={style.main_div_hospital_cart}>
            <div className={style.main_div_hospital_hading_icon}>
              <SubHeading
                className={style.main_div_hading_patiotant}
                text={"Today’s Revenue"}
              />
              <div>{Ic_Three_Dotsh.icon()}</div>
            </div>
            <div className={style.main_div_content}>
              <div className={style.main_div_profit_up}>
                <MainTitleHeading text={"$52,340"} />
                <div className={style.main_div_profitdwon}>
                  {Ic_profit_Down.icon()}10%
                </div>
              </div>
              <Small text={" $120.48 less than yesterday"} />
            </div>
          </div>
          <div className={style.main_div_hospital_cart}>
            <div className={style.main_div_hospital_hading_icon}>
              <SubHeading
                className={style.main_div_hading_patiotant}
                text={"Doctors"}
              />
              <div>{Ic_Three_Dotsh.icon()}</div>
            </div>
            <div className={style.main_div_content}>
              <div className={style.main_div_profit_up}>
                <MainTitleHeading text={"18"} />
              </div>
              <Small
                className={style.main_div_description}
                text={"3 on leave today"}
              />
            </div>
          </div>
          <div className={style.main_div_hospital_cart}>
            <div className={style.main_div_hospital_hading_icon}>
              <SubHeading
                className={style.main_div_hading_patiotant}
                text={"Staffs"}
              />
              <div>{Ic_Three_Dotsh.icon()}</div>
            </div>
            <div className={style.main_div_content}>
              <div className={style.main_div_profit_up}>
                <MainTitleHeading text={"138"} />
              </div>
              <Small
                className={style.main_div_description}
                text={"5 on leave today"}
              />
            </div>
          </div>
        </div>
        <div className={style.main_div_for_Calander_table}>
          <div className={style.Data_table_contener}>
            <div className={style.main_div_hading_content_table}>
              <div className={style.main_div_data_table_content}>
                <SubHeading
                  className={style.main_div_hading_patiotant}
                  text={"Today’s Appointments "}
                />
                <div className={style.main_div_count}>12</div>
              </div>
              <div className={style.main_div_Button_drop}>
                <div className={style.main_div_view_button}>
                  <Regular
                    className={style.main_div_Create_Event}
                    text={"View All"}
                  />
                  <div>{Ic_Right_icon.icon()}</div>
                </div>
              </div>
            </div>
            <div className={style.main_div_data_table_data}>
              {isClient && (
                <DataTable
                  columns={columns}
                  data={jsonData}
                  pagination
                  highlightOnHover
                  onRowClicked={handleRowClick}
                  paginationPerPage={5}
                  paginationRowsPerPageOptions={[5, 10, 15, 20]}
                />
              )}
            </div>
          </div>
          <Calendar className={style.main_div_calander} />
        </div>

        <div className={style.main_div_graph_manages}>
          <div className={style.Data_table_contener_Patients}>
            <div className={style.main_div_hading_content_table}>
              <div className={style.main_div_data_table_content}>
                <SubHeading
                  className={style.main_div_hading_patiotant}
                  text={"Patients’ Visit"}
                />
              </div>
              <div className={style.main_div_Button_drop}>
                <div className={style.main_div_tab_view}>
                  <Small
                    className={
                      activeTab === "walk"
                        ? style.main_div_for_video
                        : style.main_div_for_Walk
                    }
                    text={"In-Walk"}
                    onClick={() => setActiveTab("walk")}
                  />
                  <Small
                    className={
                      activeTab === "video"
                        ? style.main_div_for_video
                        : style.main_div_for_Walk
                    }
                    text={"Video Consult"}
                    onClick={() => setActiveTab("video")}
                  />
                </div>
              </div>
            </div>
            {activeTab === "walk" ? (
              <HospitalDashboardInWalk />
            ) : (
              <HospitalDashboardVideoChart />
            )}
          </div>

          <HospitalDashboardInRevenue />
          <ActivityLog />
        </div>
      </PageLayout>
    </>
  );
};

export default HospitalDashboard;
