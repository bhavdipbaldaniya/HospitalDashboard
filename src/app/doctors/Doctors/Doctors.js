"use client";
import InfoCount from "@/src/Component/InfoCount/page";
import PageLayout from "@/src/Component/Layout/PageLayout";
import StatusTabView from "@/src/Component/StatusTabView/page";
import TableLayout from "@/src/Component/TableLayout/page";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const jsonData = [
  {
    Name: "Dr. Bhavdip Baldaniya",
    Date_Joined: "12/12/2024",
    Contact: "209-555-0104",
    Assigned_Department: "Department name",
    Working_Days: [
      { day: "S", available: false },
      { day: "M", available: true },
      { day: "T", available: true },
      { day: "W", available: false },
      { day: "T", available: true },
      { day: "F", available: true },
      { day: "S", available: false },
    ],
  },
  {
    Name: "Dr. fenil Savani",
    Date_Joined: "11/12/2024",
    Contact: "109-108-0107",
    Assigned_Department: "Department name",
    Working_Days: [
      { day: "S", available: false },
      { day: "M", available: false },
      { day: "T", available: true },
      { day: "W", available: false },
      { day: "T", available: true },
      { day: "F", available: true },
      { day: "S", available: false },
    ],
  },
  {
    Name: "Dr. Harshal Bhoi",
    Date_Joined: "10/12/2024",
    Contact: "209-555-0104",
    Assigned_Department: "Department name",
    Working_Days: [
      { day: "S", available: false },
      { day: "M", available: true },
      { day: "T", available: false },
      { day: "W", available: false },
      { day: "T", available: true },
      { day: "F", available: false },
      { day: "S", available: false },
    ],
  },
  {
    Name: "Dr. Raj Pawar",
    Date_Joined: "08/12/2024",
    Contact: "209-555-0104",
    Assigned_Department: "Department name",
    Working_Days: [
      { day: "S", available: false },
      { day: "M", available: true },
      { day: "T", available: true },
      { day: "W", available: false },
      { day: "T", available: true },
      { day: "F", available: true },
      { day: "S", available: false },
    ],
  },
];

const columns = [
  {
    name: "Name",
    selector: (row) => row["Name"],
    sortable: true,
  },
  {
    name: "Date Joined",
    selector: (row) => row["Date_Joined"],
    sortable: true,
  },
  { name: "Contact", selector: (row) => row["Contact"], sortable: true },
  {
    name: "Assigned Department",
    selector: (row) => row["Assigned_Department"],
    sortable: true,
  },
  {
    name: "Working Days",
    selector: (row) => row["Working_Days"],
    sortable: true,
    cell: (row) => {
      if (!Array.isArray(row.Working_Days)) {
        return <span style={{ color: "gray" }}>N/A</span>;
      }

      return (
        <>
          {row.Working_Days.map((day, index) => (
            <span
              key={index}
              className={day.available ? "dayActiv" : "dayDeactiv"}
            >
              {day.day}
            </span>
          ))}
        </>
      );
    },
  },
];

const handleRowClick = (row) => {
  console.log("Hello");
  console.log("Clicked row data:", row);
};

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredData = jsonData.filter((row) =>
    row.Name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const handleRowSelected = (state) => {
    if (!state.selectedRows) return;
    const selectedIds = state.selectedRows.map((row) => row["Transaction ID"]);
    setSelectedRows(selectedIds);
    console.log("Selected Transaction IDs:", selectedIds);
  };

  return (
    <>
      <StatusTabView
        paths={[
          { name: "All", route: "/doctors" },
          { name: "Unverified", route: `/doctors?${"1"}` },
        ]}
      />
      <PageLayout>
        <InfoCount value={25} label="Doctors" />
        <TableLayout
          Heading={"Doctors"}
          Description={"A descriptive body text comes here"}
          ButtonTitle={"Add new doctor"}
          Export
          Filters
          Search
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
  );
};

export default Doctors;
