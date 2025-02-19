// "use client";
// import React from "react";
// import Services from "./HospitalServices_Facilities/Services";
// import StatusTabView from "@/src/Component/StatusTabView/page";
// import Facilites from "./HospitalServices_Facilities/Facilites";
// import { useSearchParams } from "next/navigation";

// const page = () => {
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");

//   return (
//     <>
//       <StatusTabView
//         paths={[
//           { name: "Services", route: "/services&facilities" },
//           { name: "Facilites", route: `/services&facilities?id=${"1"}` },
//         ]}
//       />
//       {id ? <Facilites /> : <Services />}
//     </>
//   );
// };

// export default page;

"use client";
import React, { Suspense } from "react";
import Services from "./HospitalServices_Facilities/Services";
import StatusTabView from "@/src/Component/StatusTabView/page";
import Facilites from "./HospitalServices_Facilities/Facilites";
import { useSearchParams } from "next/navigation";

const PageContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <StatusTabView
        paths={[
          { name: "Services", route: "/services&facilities" },
          { name: "Facilites", route: `/services&facilities?id=1` },
        ]}
      />
      {id ? <Facilites /> : <Services />}
    </>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />       
    </Suspense>
  );
};

export default Page;
