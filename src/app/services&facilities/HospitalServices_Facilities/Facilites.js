"use client";
import React, { useEffect, useState } from "react";
import InfoCount from "@/src/Component/InfoCount/page";
import PageLayout from "@/src/Component/Layout/PageLayout";
import TableLayout from "@/src/Component/TableLayout/page";
import DataTable from "react-data-table-component";

const jsonData = [
  {
    Name: "General Check-Up",
    Department: "General Medicine",
    Price: "₹ 500",
  },
  {
    Name: "Blood Test",
    Department: "Pathology",
    Price: "₹ 300 ",
  },
  {
    Name: "X-Ray Imaging",
    Department: "Radiology",
    Price: "₹ 800",
  },
  {
    Name: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "₹ 700",
  },
];

const columns = [
  { name: "Name", selector: (row) => row["Name"], sortable: true },
  { name: "Department", selector: (row) => row["Department"], sortable: true },
  { name: "Price", selector: (row) => row["Price"], sortable: true },
];
const handleRowClick = (row) => {
  console.log("Hello");
  console.log("Clicked row data:", row);
};
function Facilites() {
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
        <InfoCount value={5} label="Facilities" />
        <TableLayout
          Heading={"Facilites List"}
          Description={"A descriptive body text comes here"}
          Search
          Delete
          Filters
          Export
          ButtonTitle={"Add New Facilities"}
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
}

export default Facilites;
