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
    <div className="  flex flex-col gap-y-4  ">
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