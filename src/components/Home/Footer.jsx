import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-[36px] px-[20px] lg:px-[100px] gap-6 flex items-start flex-wrap justify-between">
        <div className="max-w-[566px]">
          <div className="space-y-6 max-w-[397px]">
            <h1>SecuroSoft</h1>
            <div className="font-normal leading-[24px]">
              We're a young and dynamic startup specializing in leveraging cutting-edge technology to automate and enhance the operations of small and medium businesses. Our focus areas include machine learning, data science, and creating custom solutions.
              {/* <span className="font-bold">Read More</span> */}
            </div>
          </div>
        </div>
        <div className=" space-y-[20px]">
          <h1 className="text-clash-display text-[20px] font-semibold">
            Quick Links
          </h1>
          <div className="space-y-[6px]">
            <div>Contact Us</div>
            <div>About Us</div>
            <div>Careers</div>
            <div>Events</div>
            <div>Privacy</div>
          </div>
        </div>
        <div className="space-y-[20px]">
          <h1 className="text-clash-display text-[20px] font-semibold">
            Contact Us
          </h1>
          <div className="space-y-[10px]">
            <div className="flex space-x-[2px] items-start">
              <img
                className="w-[32px] h-[32px]"
                src="./assets/phone.svg"
                alt=""
              />
              <div className="space-y-[2px] ">
                <div className="text-[20px] font-semibold">UAE:</div>
                <div className="font-medium">+971 509361672</div>
              </div>
            </div>
            <div className="flex space-x-[2px] items-start">
              <img
                className="w-[32px] h-[32px]"
                src="./assets/email.svg"
                alt=""
              />
              <div className="space-y-[2px] ">
                <div className="text-[20px] font-semibold">Email:</div>
                <div className="font-medium">contact@securosoft.com</div>
              </div>
            </div>
            <div className="flex space-x-[2px] items-center">
              <img
                className="w-[32px] h-[32px] p-[6px]"
                src="./assets/whatsapp.svg"
                alt=""
              />
              <div className="space-y-[2px] ">
                <div className="text-[20px] font-semibold">Whatsapp Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-5 md:px-[100px] flex gap-4 items-center justify-between border-t border-white">
        <div className="flex items-center gap-2">
          <div className="w-[25px] h-[25px] md:h-fit md:w-fit">
            <img src="/assets/facebook-icon.svg" alt="" />
          </div>
          <div className="w-[25px] h-[25px] md:h-fit md:w-fit">
            <img src="/assets/yt-icon.svg" alt="" />
          </div>
          <div className="hidden md:inline-block">
            <img src="/assets/dribble-icon.svg" alt="" />
          </div>
          <div className="w-[25px] h-[25px] md:h-fit md:w-fit">
            <img src="/assets/figma-icon.svg" alt="" />
          </div>
          <div className="hidden md:inline-block">
            <img src="/assets/whats-icon.svg" alt="" />
          </div>
        </div>
        <p className="font-normal text-xs md:text-base leading-4 md:leading-6 text-[#8C8C8C]">
          © 2019-{new Date().getFullYear()}, All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
