import React from "react";
import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";
import { Button } from "../componentsindex";
import {
  TiArrowSortedDown,
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import { Discover, HelpCenter } from "../NavBar";
import images from "../../img";

const Footer = () => {
  return (
    <div className="footer w-full  h-fit flex justify-center items-center border-t ">
      <div className="footer-container flex   justify-between float-bottom p-8 py-16 text-slate-300 w-[1200px]">
        <div className="footer-container-box flex justify-between flex-col md:flex-row gap-y-16 md:gap-y-0 gap-x-16 ">
          
          {/* BRAND & SOCIAL COLUMN */}
          <div className="footer-container-box-social space-y-16 w-full  md:w-1/5">
            <Image src={images.logoLight} width={150} height={150} />
            <p className="text-sm">
              The world first and largest NFT marketplace for collectible and
              Non-Fungible Tokens (NFTs). Buy, Sell your exclusive digital
              items.{" "}
            </p>
            <div className="footer-social flex gap-x-8">
              <a href="#">
                <TiSocialFacebook size={32} />
              </a>
              <a href="#">
                <TiSocialTwitter size={32} />
              </a>
              <a href="#">
                <TiSocialLinkedin size={32} />
              </a>
              <a href="#">
                <TiSocialInstagram size={32} />
              </a>
            </div>
          </div>

          {/* DISCOVER COLUMN */}
          <div className="footer-container-discover-links-box  w-auto flex-wrap  ">
            <p className="font-semibold mb-6">Discover</p>
            <Discover />
          </div>

          {/* HELP CENTER COLUMN */}
          <div className="footer-container-help-links-box  w-auto  ">
            <p className="font-semibold mb-6">Help Center</p>
            <HelpCenter />
          </div>

          {/* SUBSCRIBE BOX */}
          <div className="footer-container-susbscribe-box  w-full  md:w-1/4 flex flex-col gap-y-8">
            <p className="font-semibold">Subscribe</p>
            <div className="footer-container-subscribe-wrapper min-w-[200px] md:min-w-[300px] max-w-fit flex items-center justify-between border rounded-full px-4 py-2">
              <input
                type="email"
                className="subscribe overflow-hidden bg-transparent w-[85%]  h-8 focus:border-none focus:outline-none"
                placeholder="Enter your email"
              />
              <RiSendPlaneFill size={24} className="subscribe-send " />
            </div>
            <div className="susbscribe-send-info text-sm">
              <p>
                The world first and largest NFT marketplace for collectible and
                Non-Fungible Tokens (NFTs). Buy, Sell your exclusive digital
                items.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
