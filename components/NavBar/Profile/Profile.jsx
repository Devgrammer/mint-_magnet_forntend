import { FaUserAlt, FaRegUser, FaUserEdit, FaRegImage } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import images from "../.../../../../img";

const Profile = () => {
  return (
    <div className="profile flex flex-col gap-y-8 text-slate-200 divide-y    divide-slate-700 bg-slate-800 backdrop-blur-4xl py-6 px-6 font-sans rounded-3xl drop-shadow-md absolute top-24 right-12 border border-slate-700">
      <div className="profile-account flex gap-6 ">
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className="profile-account-img rounded-full"
        />
        <div className="profile-account-info">
          <p>Abhinav Rastogi</p>
          <small>X93KJU43439343430830243....</small>
        </div>
      </div>
      <siv className="profile-menu divide-y divide-slate-700  gap-y-8  ">
        <div className="profile-menu-one">
          <div className="profile-menu-one-item flex gap-6 items-center hover:bg-slate-700 transition-colors duration-500 p-2 rounded-md hover:cursor-pointer">
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/myprofile" }}>My Profile</Link>
            </p>
          </div>
          <div className="profile-menu-one-item flex gap-6 items-center hover:bg-slate-700 transition-colors duration-500 p-2 rounded-md hover:cursor-pointer">
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/myprofile" }}>My Items</Link>
            </p>
          </div>
          <div className="profile-menu-one-item flex gap-6 items-center hover:bg-slate-700 transition-colors duration-500 p-2 rounded-md hover:cursor-pointer">
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/myprofile" }}>Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className="profile menu-two">
          <div className="profile-menu-one-item flex gap-6 items-center hover:bg-slate-700 transition-colors duration-500 p-2 rounded-md hover:cursor-pointer">
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/help" }}>Help</Link>
            </p>
          </div>
          <div className="profile menu-two">
            <div className="profile-menu-one-item flex gap-6 items-center hover:bg-slate-700 transition-colors duration-500 p-2 rounded-md hover:cursor-pointer">
              <TbDownload />
              <p>
                <Link href={{ pathname: "/disconnect" }}>Disconnect</Link>
              </p>
            </div>
          </div>
        </div>
      </siv>
    </div>
  );
};

export default Profile;
