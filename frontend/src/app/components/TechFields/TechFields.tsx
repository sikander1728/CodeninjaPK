import React from "react";
import ServicesCard from '../ServicesCard/ServicesCard'
import techFieldsData from "@/app/Data/techFieldsData.json"

function TechFields() {
  const fieldArray = [
    
  ];

  return (
    <section className="cn-fluid-container">
        <h2 className="text-primary">
        Transformative Tech Fields
        </h2>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8'>
            {
                techFieldsData?.map((data, index) => (
                    <ServicesCard key={index} item={data} />
                ))
            }
        </div>

    </section>
)
  // return (
  //   <div className="bg-grey-light">
  //     <div className="container mx-auto py-20">
  //       <h2 className="text-4xl font-semibold text-codeninja pb-16">
  //         Transformative Tech Fields
  //       </h2>
  //       <div className="flex flex-wrap">
  //         {fieldArray.map((item) => (
  //           <div className="lg:w-1/3 sm:w-1/2 w-full">
  //             <div className="border border-neutral py-14 px-8">
  //               <div className="flex justify-center w-auto rounded-full bg-indigo-100 text-indigo-500 mb-4">
  //                 <img src={item.imgLink} alt={item.altText} />
  //               </div>
  //               <h2 className="text-4xl text-center text-stone-light font-medium title-font mb-2">
  //                 {item.heading}
  //               </h2>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default TechFields;
