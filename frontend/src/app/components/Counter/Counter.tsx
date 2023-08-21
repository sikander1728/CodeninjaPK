import React from "react";


const items = [
  {
    title: "Projects Delivered",
    value: "260",
  },
  {
    title: "Excellent Code",
    value: "239",
  },
  {
    title: "Talented Experts",
    value: "288",
  },
  {
    title: "Happy Clients",
    value: "140",
  },
  {
    title: "Communication",
    value: "102",
  },
  {
    title: "Talented Experts",
    value: "90",
  },
];

function Counter() {

  return (
    <section className="cn-fluid-container flex justify-end my-0 items-center py-20 px-3">
      <div className="w-3/4">
        <h2 className="text-4xl font-semibold text-primary pb-16">Numbers</h2>
        <div className="grid grid-cols-3 gap-x-8 gap-y-20">
          {items.map((item, index) => (
            
            <div key={index} className="">
              <h2 className="border-b-4 border-b-primary text-stone-light font-medium text-7xl pb-6">
                {item.value}
              </h2>
              <p className="text-stone-light font-medium text-3xl mt-2">
                {item.title}
              </p>
            </div>
          ))};
        </div>
      </div>
    </section>
  );
}

export default Counter;
