import Link from "next/link"

const HelpCenter = () => {
  const helpCenter=[
    {
      name:'About',
      link:'about'
    },
    {
      name:'Contact Us',
      link:'contact-us'
    },
    {
      name:'Sign Up',
      link:'ign-up'
    },
    {
      name:'Sign In',
      link:'sign-in'
    },
    {
      name:'Subscription',
      link:'subscription'
    },
  ];

  return (
    <div className="box  flex flex-col gap-y-4  ">
      {helpCenter.map((el, i) => {
        return (
          <div key={i + 1} className="help-center">
            <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default HelpCenter