import Image from "next/image";
import React from "react";

const Card = (props) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-6 gap-4 flex flex-row lg:overflow-x-hidden overflow-x-scroll py-4 lg:py-0">
      {props.data.map((d, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl flex flex-col items-center lg:justify-between justify-center gap-6 px-12 py-2 lg:py-12 lg:gap-3 lg:px-2"
        >
          <Image src={d.icon} height={60} width={60} />
          <h2 className="font-bold lg:text-2xl text-sm text-center w-full lg:w-11/12">
            {d.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
