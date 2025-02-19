"use client";
import React, { useEffect, useState } from "react";
import PageLayout from "@/src/Component/Layout/PageLayout";
import style from "./revenue.module.css";
import SubHeading from "@/src/Typography/text/SubHeading";
import MainTitleHeading from "@/src/Typography/text/MainTitleHeading";
import Small from "@/src/Typography/text/Small";
import HospitalDashboardVideoChart from "../../dashboard/HospitalDashboard/HospitalDashboardVideoChart";
import TableLayout from "@/src/Component/TableLayout/page";
import SvgButton from "@/src/Component/SvgButton/page";
import DepartmentChart from "./DepartmentChart";
import TotalChart from "./TotalChart";
import DataTable from "react-data-table-component";

const jsonData = [
  {
    "Transaction ID": "TXN12345",
    "Doctor/Package": "John Doe",
    Patient: "John Doe",
    Amount: "₹ 500",
    Date: "15-Jan-2025",
    "Payment Method": "Credit Card",
    Status: "Completed",
    Remark: "Routine health examination",
  },
  {
    "Transaction ID": "TXN12346",
    "Doctor/Package": "Emily Clark",
    Patient: "Emily Clark",
    Amount: "₹ 300",
    Date: "15-Jan-2025",
    "Payment Method": "UPI",
    Status: "Pending",
    Remark: "Comprehensive blood analysis",
  },
  {
    "Transaction ID": "TXN12347",
    "Doctor/Package": "Raj Malhotra",
    Patient: "Raj Malhotra",
    Amount: "₹ 800",
    Date: "14-Jan-2025",
    "Payment Method": "Cash",
    Status: "Failed",
    Remark: "Diagnostic imaging for fractures",
  },
  {
    "Transaction ID": "TXN12347",
    "Doctor/Package": "Raj Malhotra",
    Patient: "Raj Malhotra",
    Amount: "₹ 800",
    Date: "14-Jan-2025",
    "Payment Method": "Cash",
    Status: "Failed",
    Remark: "Diagnostic imaging for fractures",
  },
  {
    "Transaction ID": "TXN12347",
    "Doctor/Package": "Raj Malhotra",
    Patient: "Raj Malhotra",
    Amount: "₹ 800",
    Date: "14-Jan-2025",
    "Payment Method": "Cash",
    Status: "Failed",
    Remark: "Diagnostic imaging for fractures",
  },
  {
    "Transaction ID": "TXN12347",
    "Doctor/Package": "Raj Malhotra",
    Patient: "Raj Malhotra",
    Amount: "₹ 800",
    Date: "14-Jan-2025",
    "Payment Method": "Cash",
    Status: "Failed",
    Remark: "Diagnostic imaging for fractures",
  },
  {
    "Transaction ID": "TXN12347",
    "Doctor/Package": "Raj Malhotra",
    Patient: "Raj Malhotra",
    Amount: "₹ 800",
    Date: "14-Jan-2025",
    "Payment Method": "Cash",
    Status: "Failed",
    Remark: "Diagnostic imaging for fractures",
  },
  {
    "Transaction ID": "TXN12347",
    "Doctor/Package": "Raj Malhotra",
    Patient: "Raj Malhotra",
    Amount: "₹ 800",
    Date: "14-Jan-2025",
    "Payment Method": "Cash",
    Status: "Failed",
    Remark: "Diagnostic imaging for fractures",
  },
  {
    "Transaction ID": "TXN12347",
    "Doctor/Package": "Raj Malhotra",
    Patient: "Raj Malhotra",
    Amount: "₹ 800",
    Date: "14-Jan-2025",
    "Payment Method": "Cash",
    Status: "Failed",
    Remark: "Diagnostic imaging for fractures",
  },
  {
    "Transaction ID": "TXN12347",
    "Doctor/Package": "Raj Malhotra",
    Patient: "Raj Malhotra",
    Amount: "₹ 800",
    Date: "14-Jan-2025",
    "Payment Method": "Cash",
    Status: "Failed",
    Remark: "Diagnostic imaging for fractures",
  },
  {
    "Transaction ID": "TXN12347",
    "Doctor/Package": "Raj Malhotra",
    Patient: "Raj Malhotra",
    Amount: "₹ 800",
    Date: "14-Jan-2025",
    "Payment Method": "Cash",
    Status: "Failed",
    Remark: "Diagnostic imaging for fractures",
  },
  {
    "Transaction ID": "TXN12347",
    "Doctor/Package": "Raj Malhotra",
    Patient: "Raj Malhotra",
    Amount: "₹ 800",
    Date: "14-Jan-2025",
    "Payment Method": "Cash",
    Status: "Failed",
    Remark: "Diagnostic imaging for fractures",
  },
  {
    "Transaction ID": "TXN12347",
    "Doctor/Package": "Raj Malhotra",
    Patient: "Raj Malhotra",
    Amount: "₹ 800",
    Date: "14-Jan-2025",
    "Payment Method": "Cash",
    Status: "Failed",
    Remark: "Diagnostic imaging for fractures",
  },
];

const columns = [
  {
    name: "Transaction ID",
    selector: (row) => row["Transaction ID"],
    sortable: true,
  },
  {
    name: "Doctor/Pake",
    selector: (row) => row["Doctor/Pake"],
    sortable: true,
    cell: (row) => (
      <div>
        <button
          onClick={() => handleAddClick(row)}
          style={{
            marginRight: "5px",
            padding: "5px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
        <button
          onClick={() => handleDeleteClick(row)}
          style={{
            padding: "5px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    ),
  },
  { name: "Patient", selector: (row) => row["Patient"], sortable: true },
  { name: "Amount", selector: (row) => row["Amount"], sortable: true },
  { name: "Date", selector: (row) => row["Date"], sortable: true },
  {
    name: "Payment Method",
    selector: (row) => row["Payment Method"],
    sortable: true,
  },
  { name: "Status", selector: (row) => row["Status"], sortable: true },
  { name: "Remark", selector: (row) => row["Remark"], sortable: true },
];
const handleRowClick = (row) => {
  console.log("Hello");
  console.log("Clicked row data:", row);
};

const handleAddClick = (row) => {
  console.log(`Add clicked for:`, row);
};

// Function to handle Delete button click
const handleDeleteClick = (row) => {
  console.log(`Delete clicked for:`, row);
};

const Revenue = () => {
  const [activeTab, setActiveTab] = useState("Total");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredData = jsonData.filter((row) =>
    row.Remark.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.Status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.Patient.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const handleRowSelected = (state) => {
    if (!state.selectedRows) return;
    const selectedIds = state.selectedRows.map((row) => row["Transaction ID"]);
    setSelectedRows(selectedIds);
    console.log("Selected Transaction IDs:", selectedIds);
  };

  return (
    <>
      <>
        <PageLayout>
          <div className={style.main_div_for_hospital_count_cart}>
            <div className={style.main_div_for_witdro}>
              <Small className={style.main_div_for_balance} text={"Balance"} />
              <MainTitleHeading
                className={style.main_div_for_balance_walete}
                text={"$52,340"}
              />
              <div className={style.main_div_button}>
                <SvgButton
                  className={style.Recharge}
                  type={"submit"}
                  text={"Recharge"}
                />
                <SvgButton
                  className={style.Withdraw}
                  type={"submit"}
                  text={"Withdraw"}
                />
              </div>
            </div>
            <div className={style.main_div_hospital_cart}>
              <div className={style.main_div_hospital_hading_icon}>
                <SubHeading
                  className={style.main_div_hading_patiotant}
                  text={"Total Revenue"}
                />
              </div>
              <div className={style.main_div_content}>
                <div className={style.main_div_profit_up}>
                  <MainTitleHeading text={"$52,340"} />
                </div>
                <Small text={" $120.48 less than yesterday"} />
              </div>
            </div>
            <div className={style.main_div_hospital_cart}>
              <div className={style.main_div_hospital_hading_icon}>
                <SubHeading
                  className={style.main_div_hading_patiotant}
                  text={"Total Revenue"}
                />
              </div>
              <div className={style.main_div_content}>
                <div className={style.main_div_profit_up}>
                  <MainTitleHeading text={"$52,340"} />
                </div>
                <Small text={" $120.48 less than yesterday"} />
              </div>
            </div>
            <div className={style.main_div_hospital_cart}>
              <div className={style.main_div_hospital_hading_icon}>
                <SubHeading
                  className={style.main_div_hading_patiotant}
                  text={"Total Revenue"}
                />
              </div>
              <div className={style.main_div_content}>
                <div className={style.main_div_profit_up}>
                  <MainTitleHeading text={"$52,340"} />
                </div>
                <Small text={" $120.48 less than yesterday"} />
              </div>
            </div>
          </div>

          <div className={style.main_div_graph_manages}>
            <div className={style.Data_table_contener_Patients}>
              <div className={style.main_div_hading_content_table}>
                <div className={style.main_div_data_table_content}>
                  <SubHeading
                    className={style.main_div_hading_patiotant}
                    text={"Revenue"}
                  />
                </div>
                <div className={style.main_div_Button_drop}>
                  <div className={style.main_div_tab_view}>
                    <Small
                      className={
                        activeTab === "By Department"
                          ? style.main_div_for_video
                          : style.main_div_for_Walk
                      }
                      text={"By Department"}
                      onClick={() => setActiveTab("By Department")}
                    />
                    <Small
                      className={
                        activeTab === "Total"
                          ? style.main_div_for_video
                          : style.main_div_for_Walk
                      }
                      text={"Total"}
                      onClick={() => setActiveTab("Total")}
                    />
                  </div>
                </div>
              </div>
              {activeTab === "By Department" ? (
                <DepartmentChart />
              ) : (
                <TotalChart />
              )}
            </div>
          </div>
          <TableLayout
            Heading={"Transactions"}
            Description={"A descriptive body text comes here"}
            Search
            Delete
            Filters
            Export
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          >
            {isClient && (
              <DataTable
                columns={columns}
                data={filteredData}
                pagination
                selectableRows
                highlightOnHover
                onRowClicked={handleRowClick}
                onSelectedRowsChange={handleRowSelected}
              />
            )}
          </TableLayout>
        </PageLayout>
      </>
    </>
  );
};

export default Revenue;