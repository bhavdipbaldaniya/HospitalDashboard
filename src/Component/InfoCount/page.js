import MainTitleHeading from "@/src/Typography/text/MainTitleHeading";
import Small from "@/src/Typography/text/Small";
import style from "./infocount.module.css";
import { ic_Add_Button } from "@/src/Utils/svg";

const InfoCount = ({ value, label, ButtonTitle, onClick }) => {
  return (
    <>
      <div className={style.main_div_for_contener}>
        <div className={style.Main_div_lable_value}>
          <MainTitleHeading text={value} />
          <Small text={label} />
        </div>
        {ButtonTitle && (
          <div className={style.button_main_div} onClick={onClick}>
            {ic_Add_Button.icon()} {ButtonTitle}
          </div>
        )}
      </div>
    </>
  );
};

export default InfoCount;
