import React, { useRef } from "react";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const Horizontalcard = ({ data = [], heading }) => {
  const containerRef = useRef();

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full my-40 container">
      <h2 className="text-xl sm:text-2xl font-bold my-4">{heading}</h2>

      <div className="relative overflow-hidden">
        {/* Scrollable cards */}
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,235px)] gap-7 grid-flow-col no-scrollbar overflow-y-hidden scrollbar-hide"
        >
          {data.map((item,index) => (
            <Card key={item.id} data={item} trending={true} index={index+1}/>
          ))}
        </div>

        {/* Overlay buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center -translate-y-1/2 px-6">
          <button
            onClick={scrollLeft}
            className="bg-blue-100 text-black rounded-full p-2 cursor-pointer shadow-md"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="bg-blue-100 text-black rounded-full p-2 cursor-pointer shadow-md"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Horizontalcard;

