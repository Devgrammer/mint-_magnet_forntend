import Image from "next/image";
import React from "react";
import { AiFillRightCircle } from "react-icons/ai";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className="subscribe-main-container text-slate-200 flex flex-col md:flex-row items-center bg-gradient-to-tr from-slate-950 to-slate-900  gap-y-12 md:gap-y-0 md:gap-x-8 w-full max-h-auto min-h-[700px] justify-center p-16  rounded-none md:rounded-2xl drop-shadow-2xl">
      {/* SUBSCRIBE LEFT PART */}
      <div className="subscribe-main-container-left-part w-full md:w-[40%] space-y-12">
        <div className="subscribe-left-header space-y-2">
          <div className="subscribe-heading text-4xl font-semibold">
            Never miss a drop!
          </div>
          <div className="subscribe-sub-heading text-slate-500">
            Subcribe to our super-exclusive drop list and be the first to know
            abour upcoming drops
          </div>
        </div>

        {/* SUBSCRIBE LEFT HEADER */}
        <div className="subscribe-left-bullet-point-contianer space-y-4 ">
          {/* BULLET POINTS */}
          <div className="subscribe-bullet-item flex items-center gap-x-4 gap-y-8 ">
            <span className="subscribe-bullet-item-point p-1 text-sm font-normal px-2  border text-purple-500 w-fit h-fit bg-purple-200 rounded-full border-purple-600">
              01.
            </span>
            <span className="bullet-item-content">Get more discount</span>
          </div>

          <div className="subscribe-bullet-item flex items-center gap-x-4 ">
            <span className="subscribe-bullet-item-point p-1 text-sm font-normal px-2  border text-purple-500 w-fit h-fit bg-purple-200 rounded-full border-purple-600">
              02.
            </span>
            <span className="bullet-item-content">Get premium magazines</span>
          </div>
        </div>
        {/* SUBSCIPTION EMAIL INPUT */}
        <div className="subscription-email-input-contianer w-[350px] outline outline-2 outline-slate-500 rounded-full flex items-center bg-slate-900 justify-between  pl-4">
          <input
            type="text"
            className="subscription-email-input-contianer-field bg-transparent w-full  outline-none border-none "
            placeholder="Enter your email"
          />
          <AiFillRightCircle size={44} />
        </div>
      </div>

      {/* SUBSCRIBE RIGHT PART */}
      <div className="subscribe-main-container-right-part w-full md:w-[60%]">
        <Image
          src={images.Subscribe}
          alt="subscribe-illustration"
          width={600}
          height={100}
        />
      </div>
    </div>
  );
};

export default Subscribe;
