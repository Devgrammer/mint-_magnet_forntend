import Image from "next/image";
import images from "../../../img";


const Notification = () => {

  
  return (
    <div className="notification-container min-w-[400px]  flex flex-col  gap-y-4 font-sans bg-slate-800 backdrop-blur-4xl py-6 px-6 text-slate-400 rounded-3xl drop-shadow-md absolute top-24 right-12 border border-slate-700">
      <p className="font-bold text-slate-300 text-lg">Notification</p>
      <div className="notification-container-box flex items-center w-full transition-oolors duration-500 px-4 gap-4 hover:bg-slate-700 rounded-lg p-2">
        <div className="notification-container-box-image">
          <Image
            src={images.user1}
            alt="Profile Image"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <div className="notification-box-info">
          <h4 className="text-slate-300 text-md">Abhinav Rastogi</h4>
          <p className="text-sm">Measure action your user...</p>
          <small>3 minutes ago</small>
        </div>
        <span className="notification-box-new"></span>
      </div>
    </div>
  );
};

export default Notification;
