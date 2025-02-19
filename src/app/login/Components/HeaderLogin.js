import { healthlogo } from "@/src/Utils/images";
import Image from "next/image";

const HeaderLogin = ({ className }) => {
  return (
    <div
      className={`${className} fixed md:relative top-0 w-full max-h-20 py-5 md:px-6 bg-[--surface_colours_light_gray_surf] border-b border-[--border_colours_light_border]`}
    >
      <Image
        src={healthlogo}
        alt="MZADA"
        className="mix-blend-multiply"
        height={0}
        width={0}
      />
    </div>
  );
};

export default HeaderLogin;
