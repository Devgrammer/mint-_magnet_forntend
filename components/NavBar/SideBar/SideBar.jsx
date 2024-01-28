import { Button } from "@/components/componentsindex";
import Link from "next/link";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import {
  TiArrowSortedDown,
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import images from "../../../img";

const SideBar = ({ setOpenSideMenu, openSideMenu }) => {
  //====USESTATE-----
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

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
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };
  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };
  console.log("togg", openSideMenu);

  return (
    <div
      className={`sidebar a fixed top-0 left-0 w-[80%] h-full sm:h-screen transition-transform  ease-in-out duration-500  ${
        !openSideMenu ? "-translate-x-[100%]" : "-translate-x-[0%]"
      } md:w-[70%]  outline outline-1 outline-slate-700 bg-gradient-to-r from-slate-950 to-slate-900 z-30 backdrop-blur-4xl backdrop-brightness-0 bg-black/40 drop-shadow-md text-slate-300 p-8 py-10 space-y-16 `}
    >
      <GrClose
        size={32}
        className="sidebar-close-btn float-right"
        onClick={() => closeSideBar()}
      />
      <div className="sidebar-box space-y-10  ">
        <Image src={images.logoLight} alt="logo" width={150} height={150} />
        <p className="text-sm">
          Dicover the mmost outstanding articles onall topics of NFT & your own
          stories and share them
        </p>
        <div className="sidebar-social flex gap-4 text-3xl">
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className="sidebar-menu space-y-4">
        <div>
          <div
            className="sidebar-menu-box flex gap-2 items-center"
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className="sidebar-discover flex gap-2 items-center">
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div
            className="sidebar-menu-box flex gap-2 items-center"
            onClick={() => openHelpMenu()}
          >
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
      <div className="sidebar-button flex  flex-col gap-4">
        <Button btnText="Create" />
        <Button btnText="Connect Wallet" />
      </div>
    </div>
  );
};

export default SideBar;
