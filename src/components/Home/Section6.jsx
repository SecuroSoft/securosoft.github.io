import React, { useState } from "react";
import Plus from "@heroicons/react/24/outline/PlusIcon";
import Minus from "@heroicons/react/24/outline/MinusIcon";

const data = [
  {
    id: 1,
    ques: "How would you handle change requests from us?",
    ans: "Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel pellentesque lobortis pretium tortor semper enim Enim nim sagittis. Sed sed arcu vel Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbiut enim sagittis. Sed sed arcu vel. amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel.",
  },
];

const Card = ({ handleOpen, index, open }) => {
  return (
    <>
      <div
        onClick={() => handleOpen(index)}
        className="py-[8px] lg:py-[20px] px-[12px] lg:px-[32px] rounded-lg gradient-border text-[12px] lg:text-[20px] font-semibold leading-[18px] lg:leading-[26px] cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div>How would you handle change requests from us?</div>
          {open[index] ? (
            <Minus className="w-[20px] lg:w-[32px] h-[20px] lg:h-[32px] " />
          ) : (
            <Plus className="w-[20px] lg:w-[32px] h-[20px] lg:h-[32px] " />
          )}
        </div>
        {open[index] && (
          <div className="mt-[6px] mr-[20px] lg:mr-0 lg:mt-[16px] text-[10px] lg:text-lg font-normal leading-[15px] lg:leading-[27px] text-[#D6D2D2]">
            Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut enim
            sagittis. Sed sed arcu vel pellentesque lobortis pretium tortor
            semper enim Enim nim sagittis. Sed sed arcu vel Lorem ipsum dolor
            sit amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed
            arcu vel. amet consectetur. Sapien sit nec morbi ut enim sagittis.
            Sed sed arcu vel.
          </div>
        )}
      </div>
    </>
  );
};

const Section6 = () => {
  const [open, setOpen] = useState({});

  const handleOpen = (id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="home-six home-bg">
      <div className=" py-[45px] md:py-[96px] max-w-[894px] w-full mx-auto px-[20px] lg:px-0">
        <div className="space-y-[48px] lg:space-y-[72px] flex flex-col items-center">
          <h1 className="max-w-[192px] lg:max-w-[449px] w-full text-clash-display text-center linear-text text-[32px] lg:text-5xl font-semibold">
            Frequently Asked Questions
          </h1>
          <div className="space-y-[18px] lg:space-y-6 max-w-[894px] w-full mx-auto">
            {[...new Array(4)].map((m, i) => (
              <Card handleOpen={handleOpen} index={i} key={i} open={open} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
