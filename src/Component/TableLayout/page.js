"use client";
import React, { useState } from "react";
import style from "./tablelayout.module.css";
import Large from "@/src/Typography/text/Large";
import Small from "@/src/Typography/text/Small";
import {
  ic_Add_Button,
  Ic_Delete_black,
  Ic_Export_black,
  Ic_Filter_black,
  Ic_Search,
} from "@/src/Utils/svg";
import SearchInput from "../SearchInput/page";

const TableLayout = ({
  children,
  className,
  Heading,
  Description,
  ButtonTitle,
  Delete,
  Filters,
  Export,
  onClickAdd,
  onClickExport,
  onClickFilters,
  onClickDelete,
  Search,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <>
      <div className={style.main_div_table_layout}>
        <div className={style.mainDivForAllHadings}>
          <div className={style.main_div_contenerText}>
            <Large text={Heading} />
            <Small className={style.Description_div} text={Description} />
          </div>
          <div className={style.main_div_contener}>
            {Search && (
              <SearchInput
                svg={Ic_Search.icon()}
                value={searchTerm}
                onChange={setSearchTerm}
              />
            )}
            {Delete && (
              <div className={style.main_div_delete} onClick={onClickDelete}>
                {Ic_Delete_black.icon()} <Small text={"Delete"} />
              </div>
            )}
            {Filters && (
              <div className={style.main_div_delete} onClick={onClickFilters}>
                {Ic_Filter_black.icon()} <Small text={"Filters"} />
              </div>
            )}
            {Export && (
              <div className={style.main_div_Export} onClick={onClickExport}>
                {Ic_Export_black.icon()} <Small text={"Export"} />
              </div>
            )}
            {ButtonTitle && (
              <div className={style.button_main_div} onClick={onClickAdd}>
                {ic_Add_Button.icon()} {ButtonTitle}
              </div>
            )}
          </div>
        </div>
        <div className={`${style.TableLayout} ${className}`}>{children}</div>
      </div>
    </>
  );
};

export default TableLayout;
