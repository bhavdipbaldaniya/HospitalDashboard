// "use client";
// import { useState } from "react";
// import "./calender.css";
// import {
//   format,
//   startOfMonth,
//   endOfMonth,
//   startOfWeek,
//   endOfWeek,
//   addDays,
//   isSameDay,
//   isSameMonth,
// } from "date-fns";

// const Calendar = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedEvents, setSelectedEvents] = useState([]);

//   const events = [
//     { date: "2025-02-08", name: "Appointment", className: "event" },
//     { date: "2025-02-10", name: "Meeting", className: "event" },
//     { date: "2025-02-08", name: "Surgery", className: "event" },
//     { date: "2025-02-02", name: "Meeting", className: "event" },
//   ];

//   const startDate = startOfWeek(startOfMonth(currentDate));
//   const endDate = endOfWeek(endOfMonth(currentDate));

//   const changeMonth = (direction) => {
//     setCurrentDate((prev) => {
//       const newDate = new Date(prev);
//       newDate.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1));
//       return newDate;
//     });
//   };

//   const renderDays = () => {
//     const rows = [];
//     let days = [];
//     let day = startDate;

//     while (day <= endDate) {
//       for (let i = 0; i < 7; i++) {
//         // Find events for the current day
//         const dayEvents = events.filter((event) =>
//           isSameDay(new Date(event.date), day)
//         );

//         days.push(
//           <div
//             key={day.toISOString()}
//             className={`calendar-cell ${
//               !isSameMonth(day, currentDate)
//                 ? "text-gray-400"
//                 : isSameDay(day, new Date())
//                 ? "current-day"
//                 : ""
//             } ${dayEvents.length > 0 ? "calendar-cell_new" : ""}`}
//             onClick={() => {
//               if (dayEvents.length > 0) {
//                 console.log("Events on", ":", dayEvents);
//                 setSelectedEvents(dayEvents);
//               }
//             }}
//           >
//             <span>{format(day, "d")}</span>
//             {dayEvents.length > 0 && (
//               <>
//                 <span className="event-dot"></span>
//                 <div className="tooltip">
//                   <ul>
//                     {dayEvents.map((event, idx) => (
//                       <li key={idx} className="calender_list">
//                         {"◦"} {event.name}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </>
//             )}
//           </div>
//         );
//         day = addDays(day, 1);
//       }
//       rows.push(
//         <div key={day.toISOString()} className="calendar-grid">
//           {days}
//         </div>
//       );
//       days = [];
//     }
//     return rows;
//   };

//   return (
//     <>

//         <div className="calendar-container">
//           <div className="calendar-header">
//             <span className="font-semibold">
//               {format(currentDate, "MMMM yyyy")}
//             </span>

//             <button
//               className="calender-btn"
//               onClick={() => changeMonth("prev")}
//             >
//               ◀
//             </button>
//             <button
//               className="calender-btn"
//               onClick={() => changeMonth("next")}
//             >
//               ▶
//             </button>
//           </div>
//           <div className="calendar-days">
//             <span>S</span>
//             <span>M</span>
//             <span>T</span>
//             <span>W</span>
//             <span>T</span>
//             <span>F</span>
//             <span>S</span>
//           </div>
//           {renderDays()}
//         </div>

//         <div className="selected-events">
//           {selectedEvents.length > 0 ? (
//             <ul>
//               {selectedEvents.map((event, idx) => (
//                 <li key={idx}>
//                   <strong>{event.date}:</strong> {event.name}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No events selected</p>
//           )}
//         </div>

//     </>
//   );
// };

// export default Calendar;

"use client";
import { useState } from "react";
import styles from "./calender.module.css"; // Import CSS module
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isSameMonth,
} from "date-fns";
import SubHeading from "@/src/Typography/text/SubHeading";
import Regular from "@/src/Typography/text/Regular";
import {
  Ic_Create_Event,
  Ic_Incrige_date,
  Ic_Next_Date,
  Ic_Privyes_Date,
} from "@/src/Utils/svg";
import Medium from "@/src/Typography/text/Medium";

const Calendar = ({ className }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvents, setSelectedEvents] = useState([]);

  const events = [
    {
      date: "2025-02-08",
      name: "Appointment",
      time: "8:30 AM",
      className: "event",
    },
    { date: "2025-02-10", name: "Meeting", time: "10 AM", className: "event" },
    {
      date: "2025-02-08",
      name: "Meeting",
      time: "10:30 AM",
      className: "event",
    },
    { date: "2025-02-02", name: "Meeting", time: "10 AM", className: "event" },
  ];

  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));

  const changeMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1));
      return newDate;
    });
  };

  const renderDays = () => {
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = isSameMonth(day, currentDate);
        const dayEvents = isCurrentMonth
          ? events.filter((event) => isSameDay(new Date(event.date), day))
          : [];

        days.push(
          <div
            key={day.toISOString()}
            className={`${styles.calendarCell} ${
              isCurrentMonth
                ? isSameDay(day, new Date())
                  ? styles.currentDay
                  : ""
                : styles.emptyCell
            } ${
              dayEvents.length > 0 && isCurrentMonth
                ? styles.calendarCellNew
                : ""
            }`}
            onClick={() => {
              if (dayEvents.length > 0 && isCurrentMonth) {
                setSelectedEvents(dayEvents);
              }
            }}
          >
            {isCurrentMonth ? <span>{format(day, "d")}</span> : null}
            {dayEvents.length > 0 && isCurrentMonth && (
              <span className={styles.eventDot}></span>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toISOString()} className={styles.calendarGrid}>
          {days}
        </div>
      );
      days = [];
    }
    return rows;
  };

  return (
    <>
      <div className={`${styles.mainDivForcalander} ${className}`}>
        <div className={styles.main_div_cal_month_hading}>
          <SubHeading
            className={styles.main_div_hading_patiotant}
            text={format(currentDate, "MMMM yyyy")}
          />
          <div className={styles.main_div_Pri_next}>
            <button
              className={styles.calenderBtn}
              onClick={() => changeMonth("prev")}
            >
              {Ic_Privyes_Date.icon()}
            </button>
            <button
              className={styles.calenderBtn}
              onClick={() => changeMonth("next")}
            >
              {Ic_Next_Date.icon()}
            </button>
          </div>
          <div className={styles.main_div_Create_Event_button}>
            {Ic_Create_Event.icon()}
            <Regular
              className={styles.main_div_Create_Event}
              text={"Create Event"}
            />
          </div>
        </div>

        <div className={styles.main_div_date_option}>
          <div className={styles.Date_option_div}>
            <div className={styles.calendarDays}>
              <span>Su</span>
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
            </div>
            <div>{renderDays()}</div>
          </div>
          <div className={styles.main_div_open_event}>
            <div className={styles.selectedEvents}>
              {selectedEvents.length > 0 ? (
                <>
                  {selectedEvents.map((event, idx) => (
                    <div key={idx} className={styles.main_div_events_selected}>
                      <div className={styles.Time_date_div}>{event.time}</div>
                      <Medium
                        className={styles.main_div_Event_title}
                        text={event.name}
                      />
                    </div>
                  ))}
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
