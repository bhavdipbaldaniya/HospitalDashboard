"use client";
import React, { useEffect, useState } from "react";
import InfoCount from "@/src/Component/InfoCount/page";
import PageLayout from "@/src/Component/Layout/PageLayout";
import TableLayout from "@/src/Component/TableLayout/page";
import DataTable from "react-data-table-component";

const jsonData = [
  {
    Name: "Department 1",
    Doctors: "25",
    Staff: "12",
  },
  {
    Name: "Department 2",
    Doctors: "30",
    Staff: "20",
  },
  {
    Name: "Department 3",
    Doctors: "15",
    Staff: "28",
  },
];

const columns = [
  { name: "Name", selector: (row) => row["Name"], sortable: true },
  { name: "Doctors", selector: (row) => row["Doctors"], sortable: true },
  { name: "Staff", selector: (row) => row["Staff"], sortable: true },
];
const handleRowClick = (row) => {
  console.log("Hello");
  console.log("Clicked row data:", row);
};
const Department = () => {
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
      <PageLayout>
        <InfoCount value={5} label="Departments" />
        <TableLayout
          Heading={"Department List"}
          Description={"A descriptive body text comes here"}
          Search
          Delete
          Filters
          Export
          ButtonTitle={"Add New Department"}
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

export default Department;
