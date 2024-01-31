import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import images from "../../img";
import { Button } from "../../components/componentsindex";
import { HiOutlineVideoCamera } from "react-icons/hi2";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(1);

  const sliderData = [
    {
      id: 1,
      title: "Hello NFT",
      name: "Abhinav Rastogi",
      collection: "Gym",
      price: "00000064664 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 27,
        hours: 10,
        minutes: 32,
        seconds: 34,
      },
    },
    {
      id: 2,
      title: "Buddy NFT",
      name: "Shreyansh Rastogi",
      collection: "Gym",
      price: "00000064664 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 27,
        hours: 10,
        minutes: 32,
        seconds: 34,
      },
    },
    {
      id: 3,
      title: "GoodLuck NFT",
      name: "Abhinav Rastogi",
      collection: "Gym",
      price: "00000064664 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 27,
        hours: 10,
        minutes: 32,
        seconds: 32,
      },
    },
    {
      id: 3,
      title: "Great NFT",
      name: "Abhinav Rastogi",
      collection: "Gym",
      price: "00000064664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_4,
      time: {
        days: 27,
        hours: 10,
        minutes: 32,
        seconds: 34,
      },
    },
  ];

  const temp = [1, , 1, 2, 3];

  return (
    <div className="big-nft-slider-container text-slate-300 w-full min-h-screen py-32   flex  ">
      {/* BIG SLIDER LEFT PART */}
      <div className="big-nft-slider-container-box-left space-y-12  z-20 ">
        {/* BIG SLIDER LEFT  INNER PART */}
        <div className="big-nft-slider-container-box-left p-8 min-w-[500px] h-[600px] rounded-3xl px-10 drop-shadow-lg bg-gradient-to-bl from-slate-800 via-slate-800 to-gray-900 backdrop-blur-xl ">
          <h2 className="text-slate-300 text-2xl font-bold mb-8">
            {sliderData[idNumber].title}
          </h2>
          <div className="big-nft-slider-container-box-left-creator space-y-12 ">
            {/* CARD HEADER */}
            <div className="big-nft-slider-container-box-left-creator-profile-wrapper flex justify-between">
              {/* CREATOR PROFILE */}
              <div className="big-nft-slider-container-box-left-creator-profile flex items-center gap-4">
                <Image
                  className="big-nft-slider-container-box-left-creator-profile-img rounded-full"
                  src={sliderData[idNumber].image}
                  alt="profile-image"
                  width={50}
                  height={50}
                />
                <div className="creator-wrapper">
                  <div className="profile-creator text-sm text-slate-400">
                    Creator
                  </div>
                  <div className="profile-creator-name font-semibold">
                    Abhinav Rastogi
                  </div>
                </div>
              </div>
              {/* COLLECTION */}
              <div className="big-nft-slider-container-box-left-creator-collection flex items-center gap-4">
                <Image
                  className="big-nft-slider-container-box-left-creator-collection-img rounded-full"
                  src={sliderData[idNumber].nftImage}
                  alt="collection-image"
                  width={50}
                  height={50}
                />
                <div className="collection-wrapper">
                  <div className="profile-collection text-sm text-slate-400">
                    Collection
                  </div>
                  <div className="profile-collection-name font-semibold">
                    Monospace
                  </div>
                </div>
              </div>
            </div>

            {/* NFT PRICE */}
            <div className="eth-price-wrapper">
              <fieldset className="ntf-price border-4 rounded-lg border-green-700  h-24 p-4 flex items-end gap-x-4">
                <span className="amt text-5xl font-semibold text-green-700">
                  0.0004 ETH
                </span>
                <span className="amt-us-equivlent text-slate-400 text-lg">{`(~$12,234)`}</span>
                <legend className="text-sm text-slate-400 px-2">
                  Current Bid
                </legend>
              </fieldset>
            </div>

            {/* AUCTION TIMER BLOCK */}
            <div className="aution-timer-container space-y-6">
              <div className="auction-timer-head-wrapper flex gap-x-4 items-center">
                <MdTimer />
                <div>Auction ending in:</div>
              </div>

              <div className="auction-countdown-timer-wrapper flex justify-start gap-x-12">
                {temp.map((el, i) => {
                  return (
                    <div className="auction-clock text-center">
                      <div className="hour-fig font-bold text-3xl">11</div>
                      <div className="hour-fig text-slate-400">Days</div>
                    </div>
                  );
                })}
              </div>
              <p>
                <hr className="h-px  bg-slate-800 " />
              </p>
              {/* BID ACTION BT */}
              <div className="place-bid-container flex gap-8 ">
                <Button btnText={"Place a bid"} />
                <Button btnText={"View item"} />
              </div>
            </div>
          </div>
        </div>
        {/* NFT NAVIGATOR BTN */}
        <div className="big-nft-slider-container-box-left-navigator flex gap-8 ml-12   ">
          <BsArrowLeftCircle size={52} className="text-slate-600 stroke-0 " />
          <BsArrowRightCircle size={52} className="text-slate-200 stroke-0" />
        </div>
      </div>

      {/* BIG SLIDER RIGHT PART */}
      <div className="big-nft-slider-container-box-right  relative z-10 rounded-3xl min-w-[65%] p-3 bg-gradient-to-bl from-slate-800 via-slate-800 to-gray-900 backdrop-blur-xl transform translate-x-[-15%] translate-y-[-5%]">
        <div className="big-nft-slider-container-box-inner-wrapper">
          <Image
            src={images.nft_image_1}
            className="big-nft-slider-right-box-image rounded-2xl fill-current"
            alt="nft images"
            height={2000}
          />
        </div>

        <div className="like-icon absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-black ">
          <AiFillHeart className="text-rose-800 text-4xl animate-pulse" />
        </div>
        <div className="like-record absolute bottom-8 left-8 w-12 h-12 flex items-center justify-center rounded-full bg-black opacity-65 text-3xl">
          <HiOutlineVideoCamera />
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
