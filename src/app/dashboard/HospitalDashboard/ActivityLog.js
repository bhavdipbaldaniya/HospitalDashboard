"use client";
import Medium from "@/src/Typography/text/Medium";
import styles from "./hospital.module.css";
import SubHeading from "@/src/Typography/text/SubHeading";
import Caption from "@/src/Typography/text/Caption";

const activityData = [
  {
    name: "Mangal Singh Pandey",
    description: "Doctor Added by",
    actionBy: "Rohan Singh",
    statusClass: styles.main_dic_name_caption,
  },
  {
    name: "Robby Vadra",
    description: "Doctor application",
    actionBy: "Rejected",
    statusClass: styles.main_dic_name_caption_Rejected,
  },
  {
    name: "Karishma",
    description: "Staff on Leave",
    actionBy: "",
    statusClass: "",
  },
  {
    name: "Sanaya Malik",
    description: "Doctor application sent",
    actionBy: "",
    statusClass: "",
  },
  {
    name: "Mangal Singh Pandey",
    description: "Doctor Added by",
    actionBy: "Rohan Singh",
    statusClass: styles.main_dic_name_caption,
  },
  {
    name: "Robby Vadra",
    description: "Doctor application",
    actionBy: "Rejected",
    statusClass: styles.main_dic_name_caption_Rejected,
  },
  {
    name: "Karishma",
    description: "Staff on Leave",
    actionBy: "",
    statusClass: "",
  },
  {
    name: "Sanaya Malik",
    description: "Doctor application sent",
    actionBy: "",
    statusClass: "",
  },
  {
    name: "Sanaya Malik",
    description: "Doctor application sent",
    actionBy: "",
    statusClass: "",
  },
];

const ActivityLog = () => {
  return (
    <div className={styles.main_div_for_Calander_ravanu}>
      <div className={styles.Data_table_contener_ravanu}>
        <div className={styles.main_div_hading_content_table}>
          <div className={styles.main_div_data_table_content}>
            <SubHeading
              className={styles.main_div_hading_patiotant}
              text={"Activity Log"}
            />
          </div>
        </div>
        <div className={styles.main_div_data_table_data_activity}>
          {activityData.map((activity, index) => (
            <div key={index} className={styles.main_div_data_contener}>
              <div className={styles.main_div_for_description}>
                <div className={styles.main_div_Activity_img}></div>
                <div>
                  <Medium text={activity.name} />
                  <div className={styles.main_div_data_caption}>
                    <Caption text={activity.description} />
                    {activity.actionBy && (
                      <div className={activity.statusClass}>
                        {activity.actionBy}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Caption className={styles.main_div_today_text} text={"Today"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
