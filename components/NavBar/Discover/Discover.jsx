import Link from "next/link"


const Discover = () => {
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
  return (
    <div className="  flex flex-col gap-y-4  bg-slate-800 backdrop-blur-4xl py-6 px-6 text-slate-400 rounded-3xl drop-shadow-md absolute top-24 border border-slate-700 ">
      {discover.map((el, i) => {
        return (
          <div key={i + 1} className="discover">
            <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Discover