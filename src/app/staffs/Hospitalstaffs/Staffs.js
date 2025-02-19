"use client";
import React, { useEffect, useState } from "react";
import InfoCount from "@/src/Component/InfoCount/page";
import PageLayout from "@/src/Component/Layout/PageLayout";
import StatusTabView from "@/src/Component/StatusTabView/page";
import TableLayout from "@/src/Component/TableLayout/page";
import DataTable from "react-data-table-component";

const jsonData = [
  {
    Name: "Dr. Bhavdip Baldaniya",
    Assigned_Department: "Department name",
    Role: "Ward Boy",
    Contact: "+9199999999999",
    Date_Joined: "12/12/2024",
  },
  {
    Name: "Dr. Harshal Bhoi",
    Assigned_Department: "Department name",
    Role: "Nurse",
    Contact: "+919888888888",
    Date_Joined: "12/12/2024",
  },
];

const columns = [
  { name: "Name", selector: (row) => row["Name"], sortable: true },
  { name: "Contact", selector: (row) => row["Contact"], sortable: true },
  {
    name: "Date Joined",
    selector: (row) => row["Date_Joined"],
    sortable: true,
  },
  { name: "Role", selector: (row) => row["Role"], sortable: true },
  {
    name: "Assigned Department",
    selector: (row) => row["Assigned_Department"],
    sortable: true,
  },
];
const handleRowClick = (row) => {
  console.log("Hello");
  console.log("Clicked row data:", row);
};

const Staffs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredData = jsonData.filter((row) =>
    row.Name?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <>
      <StatusTabView
        paths={[
          { name: "Available", route: "/staffs" },
          { name: "All", route: `/staffs?${"1"}` },
        ]}
      />
      <PageLayout>
        <InfoCount value={25} label="Staff" />
        <TableLayout
          Heading={"General Staff"}
          Description={"A descriptive body text comes here"}
          Search
          Delete
          Filters
          Export
          ButtonTitle={"Add new staff"}
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
            />
          )}
        </TableLayout>
      </PageLayout>
    </>
  );
};

export default Staffs;
