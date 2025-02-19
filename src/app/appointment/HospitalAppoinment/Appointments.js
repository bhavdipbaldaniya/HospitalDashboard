"use client";
import InfoCount from "@/src/Component/InfoCount/page";
import Input from "@/src/Component/Input/page";
import PageLayout from "@/src/Component/Layout/PageLayout";
import StatusBadge from "@/src/Component/StatusBadge/page";
import StatusTabView from "@/src/Component/StatusTabView/page";
import TableLayout from "@/src/Component/TableLayout/page";
import FilterModel from "@/src/Model/FilterModel";
import Lable from "@/src/Typography/text/Lable";
import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";

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
    Status: "Scheduled",
    Type: "MRI scan",
  },
  {
    Patient: "Michael Smith",
    Doctor: "Priya Patel",
    Department: "Orthopedics",
    Time: "02:00 PM",
    Status: "Cancelled",
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
    Status: "Scheduled",
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
    Status: "Scheduled",
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
    Status: "Cancelled",
    Type: "Vaccination",
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
        {row.Status === "Completed" && (
          <StatusBadge text="Completed" color="#007BFF" />
        )}
        {row.Status === "Scheduled" && (
          <StatusBadge text="Scheduled" color="#28A745" />
        )}
        {row.Status === "Rescheduled" && (
          <StatusBadge text="Rescheduled" color="#FFA500" />
        )}
        {row.Status === "Cancelled" && (
          <StatusBadge text="Cancelled" color="#DC3545" />
        )}
      </>
    ),
  },
  { name: "Date & Time", selector: (row) => row["Time"], sortable: true },
];
const handleRowClick = (row) => {
  console.log("Hello");
  console.log("Clicked row data:", row);
};

const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(jsonData);
  const [appliedFilter, setAppliedFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    setIsClient(true);
  }, []);

  useMemo(() => {
    const filtered = jsonData.filter(
      (row) =>
        (row.Type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.Status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.Patient.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (appliedFilter
          ? row.Status.toLowerCase() === appliedFilter.toLowerCase()
          : true)
    );

    setFilteredData(filtered);
  }, [searchTerm, appliedFilter]);

  const handleRowSelected = (state) => {
    if (!state.selectedRows) return;
    const selectedIds = state.selectedRows.map((row) => row["Transaction ID"]);
    setSelectedRows(selectedIds);
    console.log("Selected Transaction IDs:", selectedIds);
  };

  const handleApplyFilter = () => {
    console.log("Filter Applied:", statusFilter);
    setAppliedFilter(statusFilter);
    setIsModalOpen(false);
  };

  // 🔹 Reset filter
  const handleResetFilter = () => {
    console.log("Filter Reset");
    setStatusFilter("");
    setAppliedFilter("");
    setIsModalOpen(false);
    setSearchTerm("");
  };
  return (
    <>
      <StatusTabView
        paths={[
          { name: "Upcoming", route: "/appointment" },
          { name: "Completed", route: `/appointment?${"1"}` },
        ]}
      />
      <PageLayout>
        <FilterModel
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          text={"Filters"}
          ApplyClick={handleApplyFilter}
          ResetClick={handleResetFilter}
        >
          <div className="mb-4 p-5">
            <Lable text={"Status"} />
            <select
              className="p-2 border rounded w-full"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="Completed">Completed</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Rescheduled">Rescheduled</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </FilterModel>
        <InfoCount value={2} label="Appointments" />

        <TableLayout
          Heading={"Appointments"}
          Description={"A descriptive body text comes here"}
          Export
          Filters
          onClickFilters={() => handleCloseModal()}
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

export default Appointments;
