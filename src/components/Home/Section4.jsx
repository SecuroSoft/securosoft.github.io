import React, { useState, useRef } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const arr = [
  {
    id: 1,
    title: "Source Code Analysis",
    img: "/assets/qr-code.png",
  },
  {
    id: 2,
    title: "Hosting & Domain Services",
    img: "/assets/qr-code.png",
  },
  {
    id: 3,
    title: "Website Development",
    img: "/assets/qr-code.png",
  },
  {
    id: 4,
    title: "Smart Contact Development",
    img: "/assets/qr-code.png",
  },
  {
    id: 5,
    title: "Smart Contact Security",
    img: "/assets/qr-code.png",
  },
  {
    id: 6,
    title: "Smart Contact Development",
    img: "/assets/qr-code.png",
  },
  {
    id: 7,
    title: "Smart Contact Security",
    img: "/assets/qr-code.png",
  },
  {
    id: 8,
    title: "Source Code Analysis",
    img: "/assets/qr-code.png",
  },
];

const Cards = ({ item, activeCardIndex, index }) => {
  return (
    <>
      <div
        className={`m-3 py-[18px] px-4 md:p-6 flex gap-5 flex-col rounded-lg 
      gradient-border-white bg-gray-50% backdrop-blur-[2px]
      transition-all duration-300 ease-in-out 
       hover:scale-110  hover:gradient-border group min-w-[200px] md:min-w-[245px]`}
      >
        <div
          className="p-[6px] service-card flex items-center justify-center h-[36px] w-[36px]
        rounded-[4px] 
        "
        >
          <img src={`${item?.img}`} className="w-6 h-6" alt="" />
        </div>
        <h3 className="font-semibold text-base md:text-[24px] leading-8">
          {item?.title}
        </h3>

        <button
          className={`py-[6px] md:py-[8px] px-[18px] md:px-5 flex items-center justify-center 
        border-[1px] border-white w-fit rounded-[26px] font-semibold text-sm
        group-hover:bg-purple-dark group-hover:border-purple-dark
        `}
        >
          Know More
        </button>
      </div>
    </>
  );
};

const Section4 = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(1);
  const scrollRef = useRef(null);

  const handleNextBtn = () => {
    scrollRef.current.scrollLeft += 250;
  };
  const handlePrevBtn = () => {
    scrollRef.current.scrollLeft -= 250;
  };

  const handlreScroll = () => {};
  return (
    <>
      <div className=" md:hidden">
        <div className=" py-[18px] flex flex-col items-center justify-center gap-[72px] px-[20px] lg:px-0">
          <div className="space-y-[12px]">
            <h1 className="text-clash-display linear-text text-center text-[32px] lg:text-5xl font-semibold leading-[42px] lg:leading-[64px]">
              Our Services
            </h1>
            <div className="text-[10px] lg:text-lg font-normal text-center max-w-[770px]">
            We distinguish ourselves in Quality and Timely Delivery. We deliver Cyber Security Services, IT Solutions, Websites and Mobile Apps tailored to the need of our customers. And we provide these at the MOST COMPETITIVE PRICE.
            </div>
          </div>
        </div>

        <div className="sliderBody pt-[20px] scrollbar-hide">
          <div
            ref={scrollRef}
            onScroll={handlreScroll}
            className="flex  overflow-scroll py-2 scroll-smooth"
          >
            {arr.map((item, index) => (
              <Cards
                key={index}
                index={index}
                activeCardIndex={activeCardIndex}
                item={item}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end px-5 md:px-20 w-full pt-[20px]">
          <div className="flex gap-5">
            <button
              className="flex items-center justify-center rounded-[32px] gradient-border-white  p-1 md:p-[6px]"
              onClick={handlePrevBtn}
            >
              <ArrowLeftIcon className="h-[18px] w-[18px] md:h-6 md:w-6 text-white" />
            </button>
            <button
              className="bg-purple-40% rounded-[32px] flex items-center justify-center p-1  md:p-[6px]
            gradient-border border-[1px]"
              onClick={handleNextBtn}
            >
              <ArrowRightIcon className="h-[18px] w-[18px] md:h-6 md:w-6 text-white" />
            </button>
          </div>
        </div>

        <div className="flex justify-center pt-[20px]">
          <button className="py-[6px] px-[18px] lg:py-[10px] lg:px-[24px] rounded-[26px] border border-white text-xs lg:text-base font-semibold">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default Section4;
