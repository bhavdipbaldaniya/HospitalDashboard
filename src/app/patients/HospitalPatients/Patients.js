"use client";
import InfoCount from "@/src/Component/InfoCount/page";
import PageLayout from "@/src/Component/Layout/PageLayout";
import StatusTabView from "@/src/Component/StatusTabView/page";
import TableLayout from "@/src/Component/TableLayout/page";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const jsonData = [
  {
    Patient_ID: "TXN12345",
    full_Name: "Bhavdip Baldaniya",
    Age: "24",
    Gender: "Male",
    Contact: "+9199999999999",
    Last_Appointment: "10-Jan-2025",
    Doctor_Assigned: "Dr. Sarah Thompson",
    Treatment_Status: "Active",
  },
  {
    Patient_ID: "TXN12346",
    full_Name: "Harshal Bhoi",
    Age: "25",
    Gender: "Male",
    Contact: "+919898989898",
    Last_Appointment: "10-Jan-2025",
    Doctor_Assigned: "Dr. Matthew Perez",
    Treatment_Status: "Inactive",
  },
  {
    Patient_ID: "TXN12347",
    full_Name: "Raj Pawar",
    Age: "26",
    Gender: "Male",
    Contact: "+919696969696",
    Last_Appointment: "10-Jan-2025",
    Doctor_Assigned: "Dr. Sarah Thompson",
    Treatment_Status: "Inactive",
  },
];

const columns = [
  { name: "Patient ID", selector: (row) => row["Patient_ID"], sortable: true },
  { name: "Full name", selector: (row) => row["full_Name"], sortable: true },
  { name: "Age", selector: (row) => row["Age"], sortable: true },
  { name: "Gender", selector: (row) => row["Gender"], sortable: true },
  { name: "Contact", selector: (row) => row["Contact"], sortable: true },
  {
    name: "Last Appointment",
    selector: (row) => row["Last_Appointment"],
    sortable: true,
  },
  {
    name: "Doctor Assigned",
    selector: (row) => row["Doctor_Assigned"],
    sortable: true,
  },
  {
    name: "Treatment Status",
    selector: (row) => row["Treatment_Status"],
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => row["Action"],
    sortable: true,
    cell: (row) => (
      <div>
        <button onClick={() => handleAddClick(row)} className="view">
          View
        </button>
      </div>
    ),
  },
];
const handleRowClick = (row) => {
  console.log("Hello");
  console.log("Clicked row data:", row);
};
const handleAddClick = (row) => {
  console.log(`Add clicked for:`, row);
};

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredData = jsonData.filter((row) =>
    row.full_Name?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const handleRowSelected = (state) => {
    if (!state.selectedRows) return;
    const selectedIds = state.selectedRows.map((row) => row["Transaction ID"]);
    setSelectedRows(selectedIds);
    console.log("Selected Transaction IDs:", selectedIds);
  };
  return (
    <>
      <PageLayout>
        <InfoCount value={1250} label="Patients" />
        <TableLayout
          Heading={"Patients"}
          Description={"A descriptive body text comes here"}
          Export
          Filters
          Delete
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

export default Patients;
