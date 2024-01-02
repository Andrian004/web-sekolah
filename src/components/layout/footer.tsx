import {
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandX,
  TbBrandYoutubeFilled,
} from "react-icons/tb";

import { getCurrentYear } from "~/utils/datetime";
import { Separator } from "~/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/utils/cn";

type Socmed = {
  icon: React.ReactNode;
  onHover: string;
  link: string;
  tooltip: string;
};

const SocmedList: Socmed[] = [
  {
    icon: <TbBrandFacebookFilled />,
    onHover: "hover:text-blue-600",
    link: "https://github.com/Andrian004",
    tooltip: "Facebook",
  },
  {
    icon: <TbBrandYoutubeFilled />,
    onHover: "hover:text-red-600 ",
    link: "https://github.com/Andrian004",
    tooltip: "Youtube",
  },
  {
    icon: <TbBrandInstagram />,
    onHover: "hover:text-pink-700 ",
    link: "https://github.com/Andrian004",
    tooltip: "Instagram",
  },
  {
    icon: <TbBrandX />,
    onHover: "hover:text-black",
    link: "https://github.com/Andrian004",
    tooltip: "X (aja)",
  },
];

export function Footer() {
  const year = getCurrentYear();

  return (
    <footer className="w-full bottom-0 flex flex-col items-center justify-center bg-primary text-white text-base px-2">
      <div className="w-full max-w-6xl grid grid-cols-3 py-16 items-center">
        <ProfileSiteFooter />
      </div>
      <section className="w-full border-t-[1px] border-green-500 flex flex-col items-center justify-center bg-primarytext-base h-20">
        <div className="w-full max-w-6xl">
          <span>Web Sekolah. All rights reserved &copy; {year}</span>
        </div>
      </section>
    </footer>
  );
}

function ProfileSiteFooter() {
  return (
    <section className="w-80 flex flex-col items-center justify-center gap-4">
      <h2 className="w-full font-semibold">SMA Negeri 1 Surakarta</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vitae
        voluptate commodi eos maxime doloremque dolore reiciendis laudantium
        accusamus architecto.
      </p>
      <Separator />
      <div className="w-full flex">
        <ul className="flex gap-2">
          {SocmedList.map((item, index) => (
            <TooltipProvider key={index} delayDuration={300}>
              <Tooltip>
                <TooltipTrigger>
                  <li
                    className={cn(
                      `border border-white text-white p-2 rounded-full transition duration-300`,
                      item.onHover
                    )}>
                    <a href={item.link} className="text-2xl">
                      {item.icon}
                    </a>
                  </li>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{item.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </ul>
      </div>
    </section>
  );
}
