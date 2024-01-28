import { Button } from "@/components/componentsindex";
import Link from "next/link";
import Image from 'next/image'
import {GrClose} from 'react-icons/gr'
import { useState } from "react";
import { TiArrowSortedDown, TiSocialInstagram, TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import images from '../../../img'

const SideBar = ({setOpenSideMenu}) => {
  //====USESTATE-----
  const[openDiscover, setOpenDiscover]=useState(false);
  const[openHelp, setOpenHelp]=useState(false);

  //---- DISCOVER NAVIGATIONS MENU -----
  const discover = [
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "NFT Detail Page",
      link: "nft-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  
  const sidebar = [
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "NFT Detail Page",
      link: "nft-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "ign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => { 
    if(!openDiscover){
      setOpenDiscover(true);
    }else{
      setOpenDiscover(false);
    }
   };
  const openHelpMenu = () => { 
    if(!openHelp){
      setOpenHelp(true);
    }else{
      setOpenHelp(false);
    }
   };

   const closeSideBar=()=>{   
    setOpenSideMenu(false);
   }

  return (
    <div className="sidebar">
      <GrClose className="sidebar-close-btn" onClick={() => closeSideBar()} />
      <div className="sidebar-box">
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>
          Dicover the mmost outstanding articles onall topics of NFT & your own
          stories and share them
        </p>
        <div className="sidebar-social">
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className="sidebar-menu">
        <div>
          <div className="sidebar-menu-box" onClick={() => openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className="sidebar-discover">
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="sidebar-menu-box" onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className="sidebar-discover">
              {helpCenter.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="sidebar-button">
        <Button btnText="Create" />
        <Button btnText="Connect Wallet" />
      </div>
    </div>
  );
};

export default SideBar;
