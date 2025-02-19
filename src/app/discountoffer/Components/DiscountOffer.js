"use client";
import Tabs from "@/src/Component/Tabs/page";
import React, { useState } from "react";
import style from "./DiscountOffer.module.css";
import PageLayout from "@/src/Component/Layout/PageLayout";
import InfoCount from "@/src/Component/InfoCount/page";
import ToggleSwitch from "@/src/Component/ToggleSwitch/page";
import Small from "@/src/Typography/text/Small";
import SubHeading from "@/src/Typography/text/SubHeading";
import { Ic_Discount, Ic_Manage } from "@/src/Utils/svg";
import AddRecordModel from "@/src/Model/AddRecordModel";
import Lable from "@/src/Typography/text/Lable";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/src/Component/Button/page";
import ErrorText from "@/src/Typography/text/ErrorText";
import Input from "@/src/Component/Input/page";

const DiscountOffer = ({ isActive, onToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddRecord = () => {
    setIsModalOpen(!isModalOpen);
  };
  const tabsNames = [
    { title: "Active", content: <p>Active</p> },
    { title: "All", content: <p>All</p> },
  ];
  const [packageData] = useState([
    {
      packageName: "20% Off on Diagnostic Tests",
      companytitle: "DIAG20",
      Expirydate: "Expiry Date",
      offeramount: "20% off on Total Amount",
      discounttitle: "Limited Time",
    },
    {
      packageName: "10% Cashback on Online Payments",
      companytitle: "DIAG20",
      Expirydate: "Expiry Date",
      offeramount: "20% off on Total Amount",
      discounttitle: "New",
    },
  ]);

  const recordInitialValues = {
    offerName: "",
    offerId: "",
    offerRange: "",
  };

  const recordValidationSchema = Yup.object().shape({
    offerName: Yup.string().required("Discount Name is required"),
    offerId: Yup.string().required("Discount Id is required"),
    offerRange: Yup.date().required("Date is required"),
  });

  const formik = useFormik({
    initialValues: recordInitialValues,
    validationSchema: recordValidationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      handleAddRecord();
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    dirty,
    setFieldValue,
  } = formik;

  return (
    <>
      <AddRecordModel
        isOpen={isModalOpen}
        onClose={handleAddRecord}
        text={"Add Records"}
      >
        <form onSubmit={handleSubmit}>
          <div className={`${style.model_body} p-6 bg-[#F3F4F6]`}>
            <div className="mb-4">
              <Lable text={"Discount Name"} />
              <Input
                type="text"
                placeholder="Offer"
                name="offerName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.offerName}
                className={
                  touched.offerName && errors.offerName ? style.red : ""
                }
              />
              {touched.offerName && errors.offerName && (
                <ErrorText text={errors.offerName} />
              )}
            </div>

            <div>
              <Lable text={"Discount ID"} />
              <Input
                type="text"
                placeholder="ID"
                name="offerId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.offerId}
                className={touched.offerId && errors.offerId ? style.red : ""}
              />
              {touched.offerId && errors.offerId && (
                <ErrorText text={errors.offerId} />
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mt-4">
                <Lable text={"Select Date"} />
                <Input
                  type="date"
                  name="offerRange"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.offerRange}
                  className={
                    touched.offerRange && errors.offerRange ? style.red : ""
                  }
                />
                {touched.offerRange && errors.offerRange && (
                  <ErrorText text={errors.offerRange} />
                )}
              </div>
            </div>
            <div className="text-center mt-6">
              <Button
                type="submit"
                text="Add Offer"
                className="mt-7"
                disabled={!(isValid && dirty)}
              />
            </div>
          </div>
        </form>
      </AddRecordModel>
      <Tabs
        tabsData={tabsNames}
        classNameB={`${style.main_tabs_view} border-b-4 border-[--alerts_success_text] font-semibold text-black`}
        classNameC={style.sub_tab_div}
      >
        {{
          Active: (
            <>
              <PageLayout>
                <div>
                  <InfoCount
                    value={4}
                    label="Offers"
                    ButtonTitle="Add Offer"
                    onClick={handleAddRecord}
                  />
                </div>
                <div className={style.div_for_cards}>
                  {packageData.map((pkg, index) => (
                    <div className={style.card} key={index}>
                      <div className={style.content}>
                        <div className={style.Discounts_Offers_main_div}>
                          {Ic_Discount.icon()}
                          <span className={style.Discounts_for_title_div}>
                            <Small
                              className={style.discount_title_div}
                              text={pkg.discounttitle}
                            />
                          </span>
                        </div>
                        <SubHeading
                          className={style.main_div_hading_report}
                          text={pkg.packageName}
                        />
                        <div className={style.companyname_for_expirydate}>
                          <Small
                            className={style.report_descriptive}
                            text={pkg.companytitle}
                          />
                          <Small
                            className={style.report_descriptive}
                            text={pkg.Expirydate}
                          />
                        </div>
                        <div>
                          <Small
                            className={style.amountoffer}
                            text={pkg.offeramount}
                          />
                        </div>
                      </div>

                      <div className={style.manageSection}>
                        <span
                          className={style.manage_main_div}
                          onClick={handleAddRecord}
                        >
                          {Ic_Manage.icon()} Manage
                        </span>
                        <ToggleSwitch checked={isActive} onChange={onToggle} />
                      </div>
                    </div>
                  ))}
                </div>
              </PageLayout>
            </>
          ),
        }}
      </Tabs>
    </>
  );
};

export default DiscountOffer;
