import Image from "next/image";
import images from "../../img";

const ServicesSection = () => {
  const services = [
    {
      serviceName: "Filter & Discover",
      serviceDesc: "Smart filtering and suggestions make it easy to find",
      img: images.service1,
    },
    {
      serviceName: "Add to bag",
      serviceDesc: "Easily select the correct items and add them to the cart",
      img: images.service2,
    },
    {
      serviceName: "Connect Wallet",
      serviceDesc: "The carrier will confirm and ship quickly to you",
      img: images.service3,
    },
    {
      serviceName: "Start Trading",
      serviceDesc: "Have fun and enjoy your 5-star quality products",
      img: images.service4,
    },
  ];
  const colored = ["rose", "blue", "green", "fuchsia"];
  return (
    <div className="services-container text-slate-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-y-16 md:gap-y-0 md:justify-between md:space-x-16 ">
      {services.map((el, i) => (
        <ServiceItem
          img={el.img}
          name={el.serviceName}
          desc={el.serviceDesc}
          step={i + 1}
        />
      ))}
    </div>
  );
};

const ServiceItem = ({ img, name, desc, step, textColor }) => {
  const colorGen = (color) => {
    if (color === 0) {
      return "text-red-700 bg-red-200";
    } else if (color === 1) {
      return "text-violet-700 bg-violet-200";
    } else if (color === 2) {
      return "text-yellow-700 bg-yellow-200";
    } else if (color === 3) {
      return "text-fuchsia-700 bg-fuchsia-200";
    }
  };

  const bgColor = "bg-yellow-200";

  return (
    <div className="service-container-box text-center space-y-6">
      <div className="service-image flex justify-center">
        <Image
          src={img}
          alt={name}
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>
      <div
        className={`services-step flex w-fit  text-xs mx-auto rounded-full p-1 px-3 ${colorGen(
          step - 1
        )}`}
      >{`Step ${step}`}</div>
      <div className="services-heading font-semibold">{name}</div>
      <div className="step-description text-sm leading-loose text-slate-400 ">
        {desc}
      </div>
    </div>
  );
};

export default ServicesSection;
