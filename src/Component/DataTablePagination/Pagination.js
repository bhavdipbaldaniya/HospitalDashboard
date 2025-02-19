import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({
  totalRecords,
  recordsPerPage,
  currentPage,
  onPageChange,
  onRowsPerPageChange,
  recordsPerPageOptions = [5, 10, 20, 50],
}) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const renderPageNumbers = () => {
    let pages = [];
    const maxVisiblePages = 3;

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= maxVisiblePages) {
        pages = [1, 2, 3, "...", totalPages];
      } else if (
        currentPage > maxVisiblePages &&
        currentPage < totalPages - 2
      ) {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      } else {
        pages = [
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      }
    }
    return pages;
  };

  return (
    <div className={styles["pagination-container"]}>
      <select
        value={recordsPerPage}
        onChange={onRowsPerPageChange}
        className={styles["pagination-select"]}
      >
        {recordsPerPageOptions.map((option) => (
          <option key={option} value={option}>
            {option}  
            {/* per page */}
          </option>
        ))}
      </select>

      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={styles["pagination-button"]}
      >
        {"<<"}
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles["pagination-button"]}
      >
        {"<"}
      </button>

      {renderPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
          className={`${styles["pagination-button"]} ${
            currentPage === page ? styles["active"] : ""
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles["pagination-button"]}
      >
        {">"}
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={styles["pagination-button"]}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
