"use client";
import React, { useEffect, useState } from "react";
import InfoCount from "@/src/Component/InfoCount/page";
import PageLayout from "@/src/Component/Layout/PageLayout";
import TableLayout from "@/src/Component/TableLayout/page";
import DataTable from "react-data-table-component";
import Pagination from "@/src/Component/DataTablePagination/Pagination";

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
  {
    Name: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "₹ 700",
  },
  {
    Name: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "₹ 700",
  },
  {
    Name: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "₹ 700",
  },
  {
    Name: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "₹ 700",
  },
  {
    Name: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "₹ 700",
  },
  {
    Name: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "₹ 700",
  },
  {
    Name: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "₹ 700",
  },
  {
    Name: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "₹ 700",
  },
  {
    Name: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "₹ 700",
  },
  {
    Name: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "₹ 700",
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
function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredData = jsonData.filter((row) =>
    row.Name?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  // pagination content
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalRecords = jsonData?.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleRowsPerPageChange = (event) => {
    setRecordsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <PageLayout>
        <InfoCount value={11} label="Services" />
        <TableLayout
          Heading={"Services List"}
          Description={"A descriptive body text comes here"}
          Search
          Delete
          Filters
          Export
          ButtonTitle={"Add New Service"}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        >
          {isClient && (
            <DataTable
              columns={columns}
              data={paginatedData}
              pagination
              selectableRows
              highlightOnHover
              onRowClicked={handleRowClick}
              paginationPerPage={10000000} //pagination remove
            />
          )}
        <Pagination
          totalRecords={totalRecords}
          recordsPerPage={recordsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
        </TableLayout>
      </PageLayout>
    </>
  );
}

export default Services;
